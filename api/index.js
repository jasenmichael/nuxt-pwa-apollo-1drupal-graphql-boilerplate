const express = require("express")
const app = express()

app.get("/", (req, res, next) => {
  console.log(req);
  res.send("hello world")
})

module.exports = {
  path:"/api/",
  handler: app
}
