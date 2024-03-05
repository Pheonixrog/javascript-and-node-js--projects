const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection1 = require("./mongodb");

const templatespath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatespath);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await collection1.insertMany([data]);
  res.render("home");
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection1.findOne({ name: req.body.name });

    if (check.password === req.body.password) {
      res.render("home");
    } else {
      res.send("wrong pass");
    }
  } catch (e) {
    res.send("wrong details");
  }
});

app.listen(3000, () => {
  console.log("listening on");
});
