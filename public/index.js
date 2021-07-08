// const registerNewUser = document.querySelector('#user');
// const logInUser = document.querySelector('#log-in');
const addFav = document.querySelector('#addFav');
const showAllFavs = document.querySelector('#showFavs')
const favContainer = document.querySelector('#favContainer')
const sparklemuffin = document.querySelector('#spMuff')
const sparkleContainer = document.querySelector('.tenor-gif-embed')
// connects to buttons in html

const baseURL = `http://localhost:4500/api`
const catchError = function(err){console.log(err)}
const favCallBack = function({data: favorites}){
    displayFavorites(favorites)
    console.log(favorites)
}
// useful constant variables

// registerNewUser.addEventListener('click',registerSubmitHandler);
// logInUser.addEventListener('click',loginSubmitHandler);
addFav.addEventListener('click', addFavHandler)
sparklemuffin.addEventListener('click', partyMuffin)
// creates interactivity for buttons when clicked

function uploadFav(body){
    axios.post(`${baseURL}/favorite-animal`, body)
    .then(favCallBack)
    .catch(catchError)
}

function addFavHandler(e) {
    e.preventDefault();
    let name = document.querySelector('#name')
    let favoriteAnimal = document.querySelector('#favAnimal')

    let bodyObj = {
        favoriteAnimal: `${name.value}'s favorite animal is a ${favoriteAnimal.value}`
    }
    uploadFav(bodyObj)
}

// adding a new favorite animal

function pullFavs(){
    axios.get(`${baseURL}/favorites`)
    .then(favCallBack)
    .catch(catchError)
}

function createFavLine(favs){
    const favLine = document.createElement('div')
    favContainer.classList.add('fav-line')
    favContainer.innerHTML = `<h3>${favs}</h3>`
    favContainer.appendChild(favLine)
}


function displayFavorites(arr){
    console.log(arr)
    // favContainer.innerHTML = ``
    createFavLine(arr)
}
// pull array of added favorites and display them

function partyMuffin(){
    if (sparkleContainer.style.display === "none"){
        sparkleContainer.style.display = "block"
    } else {
        sparkleContainer.style.display = "none"
    }
}

// turn sparklemuffin display on and off