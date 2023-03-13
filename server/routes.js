const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserAccount = require("./models/UserAccount");
const Validator = require("validatorjs");
const CourseOutline = require("./models/CourseOutline");
const { ObjectId } = require("mongodb");
const Courses = require("./models/Courses");

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
      assignedCourses,
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
        assignedCourses,
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

router.get("/secure/course-names", (req, res) => {
  Course.find({}, "title")
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({
        error: err,
        noCourses: "No Course Names Found.",
      })
    );
});

router.get("/secure/instructor-names", (req, res) => {
  UserAccount.find(
    {},
    {
      first_name: 1,
      last_name: 1,
      user_id: 1,
      courses: 1,
    }
  )
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({
        error: err,
        noCourses: "No Course Names Found.",
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

// Route for decision on course outline approval.
router.post("/secure/request/:outlineID", async (req, res) => {
  const outlineID = req.params.outlineID;
  const requestApprove = req.body.requestApprove;

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
        { requestApproval: requestApprove },
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

// Route for decision on course outline approval.
router.post("/secure/reply/:outlineID", async (req, res) => {
  const outlineID = req.params.outlineID;
  const decider = req.body.decider;

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
        { decision: decider },
        { new: true }
      );
      res.send(courseOutline);
    } else {
      res.send("Administrator privileges required.");
    }
  } catch (err) {
    console.error(err);
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

router.post("/secure/assignment/:instructor", async (req, res) => {
  const instructorID = req.params.instructor;
  const courseTitle = req.body.course_title;

  const user = await UserAccount.findOne({ user_id: instructorID });

  if (user.courses.includes(courseTitle)) {
    user.assignedCourses.push(courseTitle);
    await user.save(); // save the updated user object to the database
    res.status(200).send("Course assigned successfully");
  } else {
    console.log("Not in courses");
    res.status(500).send("Can't assign instructor to that course");
  }
});

module.exports = router;
