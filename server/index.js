const express = require("express");
const app = express();
const path = require("path")

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));





let port = process.env.PORT || 4500
app.listen(port, () => console.log(`Server is assimilating mortals on ${port}`))