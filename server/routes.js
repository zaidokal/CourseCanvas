const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserAccount = require("./models/UserAccount");
const Validator = require("validatorjs");
const CourseOutline = require("./models/CourseOutline");
const { ObjectId } = require("mongodb");

// Route to test session management.
router.get("/test", (req, res) => {
  res.send("User logged in.");
  console.log(req.session.email);
});

// Route to allow for account creation.
router.post("/auth/register", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      user_id,
      user_type,
      courses,
    } = req.body;

    const existingAccount = await UserAccount.findOne({ email });

    if (existingAccount) {
      return res.status(400).send("An account with this email already exists.");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    let data = {
      email: req.body.email,
    };

    let rules = {
      email: "email",
    };

    let validation = new Validator(data, rules);

    if (validation.passes()) {
      const userAccount = new UserAccount({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        user_id,
        user_type,
        courses,
      });

      await userAccount.save();

      res.send("Account Registered Successfully.");
    } else {
      res.send("Please enter a valid email.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

// Route to allow users to login.
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userAccount = await UserAccount.findOne({ email });

    req.session.email = email;

    if (!userAccount) {
      return res.status(400).send("Invalid Credentials.");
    }

    const match = await bcrypt.compare(password, userAccount.password);

    if (!match) {
      return res.status(400).send("Invalid Credentials.");
    }

    if (req.session.email) {
      // res.send("Authentication Successful.");
      res.redirect("/api/test");
    } else {
      res.redirect("/api/auth/login");
      res.send("Login failed.");
    }

    // res.redirect("/api/test"); // Redirect to test page is login is successful.
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

// Route to allow users to logout.
router.get("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Successfully Logged Out");
  });
});

// Route to allow for user creation, tracked based on the current logged in user.
router.post("/secure/create-outline", (req, res) => {
  console.log(req.session);

  CourseOutline.create({
    userId: req.session.email,
    ...req.body,
  })
    .then((outline) => res.json({ msg: "Outline added successfully!" }))
    .catch((err) => res.status(400).json({ err }));
});

// Route to get all course outlines based on who is logged in.
router.get("/secure/all-outlines", (req, res) => {
  CourseOutline.find({ userId: req.session.email })
    .then((outlines) => res.json(outlines))
    .catch((err) =>
      res.status(404).json({
        error: err,
        noMemories: "No Outlines Found.",
      })
    );
});

// Route to extract data for a single outline.
router.get("/secure/:outlineID", (req, res) => {
  const outlineID = req.params.outlineID;

  CourseOutline.findById(ObjectId(outlineID), (err, outline) => {
    if (err) {
      res.send("An error has occured trying to fetch the outline.");
    } else {
      res.send(outline);
    }
  });
});

// Route for decision on course outline approval.
router.post("/secure/decision/:outlineID", async (req, res) => {
  const outlineID = req.params.outlineID;
  const approval = req.body.approval;

  // First get session email to check if logged in user is an admin.
  const userEmail = req.session.email;
  const findUserType = await UserAccount.find({ email: userEmail }).select(
    "user_type"
  );
  const userType = findUserType[0].user_type;

  try {
    if (userType == "admin") {
      const courseOutline = await CourseOutline.findByIdAndUpdate(
        { _id: outlineID },
        { approved: approval },
        { new: true }
      );

      res.send(courseOutline);
    } else {
      res.send("Administrator privileges required.");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to filter instructors based on the courses they can teach.
router.get("/secure/instructors/:course", async (req, res) => {
  const course = req.params.course;

  // First get session email to check if logged in user is an admin.
  const userEmail = req.session.email;
  const findUserType = await UserAccount.find({ email: userEmail }).select(
    "user_type"
  );
  const userType = findUserType[0].user_type;

  try {
    if (userType == "admin") {
      // In the .select, the - in -_id excludes sending the id and only returns first name and last name.
      UserAccount.find({ courses: course })
        .select("-_id first_name last_name")
        .then((instructors) => {
          res.send(instructors);
        });
    } else {
      res.send("Administrator privileges required.");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
