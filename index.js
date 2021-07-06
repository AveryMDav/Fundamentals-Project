const registerNewUser = document.querySelector('#user');
const logInUser = document.querySelector('#log-in');
// connects to buttons in html

const baseURL = `http://localhost:4500/api`
const catchError = function(err){console.log(err)}
// useful constant variables

registerNewUser.addEventListener('click',registerSubmitHandler);
logInUser.addEventListener('click',loginSubmitHandler);
// creates interactivity for buttons when clicked

const register = function(body) {
    axios.post(`${baseURL}/register`, body)
    .then(res => {})
    .catch(catchError)
}

function registerSubmitHandler(e) {
    e.preventDefault();

    let firstname = document.querySelector("#fName");
    let lastname = document.querySelector("#lName");
    let username = document.querySelector("#uName");

    let bodyObj = {
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value
    };

    register(bodyObj)

    firstname.value = '';
    lastname.value = '';
    username.value = '';
}
// functions for creating a new user

const login = function(body){
    axios.post(`${baseURL}/login`, body)
    .then(res => {})
    .catch(catchError)
}


function loginSubmitHandler(e) {
    e.preventDefault();

    let username = document.querySelector('#loginUName');

    let bodyObj = {
        username: username.value
    };

    login(bodyObj);

    username.value = '';
}
// functions for logging in a user