const express = require("express");
const cors = require("cors")
const app = express();
const path = require("path");
const controller = require("./controller");
const { } = controller;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get("/api/", get);
// app.get("/api/live-decorah", getDecorah);
// app.get("/api/live-decorah", getDecorah);



let port = process.env.PORT || 4500
app.listen(port, () => console.log(`Server is assimilating mortals on ${port}`))