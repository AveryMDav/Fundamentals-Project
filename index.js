const express = require("express");
const app = express();

app.use(express.json());





let proc = 4500
app.listen(proc, () => console.log(`Server is assimilating mortals on ${proc}`))