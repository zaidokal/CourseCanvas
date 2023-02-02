const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserAccount = require("./models/UserAccount");
const Validator = require("validatorjs");

router.get("/test", (req, res) => {
  if (!req.session.email) {
    res.send("User not logged in.");
  }

  res.send("User logged in.");
});

router.post("/auth/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

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

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userAccount = await UserAccount.findOne({ email });

    if (!userAccount) {
      return res.status(400).send({ message: "Invalid Credentials." });
    }

    const match = await bcrypt.compare(password, userAccount.password);

    if (!match) {
      return res.status(400).send({ message: "Invalid Credentials." });
    }

    req.session.email = email;
    // res.send({ message: "Authentication Successful." });

    res.redirect("/api/test"); // Redirect to test page is login is successful.
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

router.get("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Successfully Logged Out");
  });
});

module.exports = router;
