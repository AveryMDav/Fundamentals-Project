const express = require("express");
const cors = require("cors")
const app = express();
const path = require("path");
const { registerUser, addFav } = require('./controller.js')

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.post(`/api/register`, registerUser);
app.post(`api/favorite-animal/`, addFav)



let port = process.env.PORT || 4500
app.listen(port, () => console.log(`Server is running on ${port}`))