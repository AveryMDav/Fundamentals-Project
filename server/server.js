const express = require("express");
const cors = require("cors")
const app = express();
const path = require("path");
const { registerUser, addFav, showFavs } = require('./controller.js')

app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.post(`/api/register`, registerUser);
app.post(`/api/favorite-animal`, addFav)
app.get(`/api/favorites`, showFavs)



let port = process.env.PORT || 4500
app.listen(port, () => console.log(`Server is running on ${port}`))