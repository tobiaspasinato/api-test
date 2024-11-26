const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Express on Vercel")}
);

app.listen(process.env.PORT, () => {
    console.log("Server ready on port 3000.")
});

module.exports = app;