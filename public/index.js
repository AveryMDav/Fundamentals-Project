// const registerNewUser = document.querySelector('#user');
// const logInUser = document.querySelector('#log-in');
const addFav = document.querySelector('#addFav');
const showAllFavs = document.querySelector('#showFavs')
const favContainer = document.querySelector('#favContainer')
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
showAllFavs.addEventListener('click', pullFavs)
// creates interactivity for buttons when clicked

// const register = function(body) {
//     axios.post(`${baseURL}/register`, body)
//     .then()
//     .catch(catchError)
// }

// function registerSubmitHandler(e) {
//     e.preventDefault();
//     let firstname = document.querySelector("#fName");
//     let lastname = document.querySelector("#lName");
//     let username = document.querySelector("#uName");

//     let bodyObj = {
//         firstname: firstname.value,
//         lastname: lastname.value,
//         username: username.value
//     };

//     register(bodyObj)

//     firstname.value = '';
//     lastname.value = '';
//     username.value = '';
// }
// // functions for creating a new user

// const login = function(body){
//     axios.post(`${baseURL}/login`, body)
//     .then(res => {})
//     .catch(catchError)
// }


// function loginSubmitHandler(e) {
//     e.preventDefault();
//     let username = document.querySelector('#loginUName');
//     let bodyObj = {
//         username: username.value
//     };
//     login(bodyObj);
//     username.value = '';
// }
// functions for logging in a user

function uploadFav(body){
    axios.post(`${baseURL}/favorite-animal`, body)
    .then()
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
    // favContainer.innerHTML = ``
    for(let i=0; i<arr.length; i++){
        createFavLine(arr[i])
    }
}