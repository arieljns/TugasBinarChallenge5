const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("server is up and running at port 3000");
});

app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error);
  }
});

app.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.error(error);
  }
});

app.get("/contact", (req, res) => {
  try {
    res.send("Contact me @ arieljns1@gmail.com");
  } catch (error) {
    console.error(error);
  }
});
