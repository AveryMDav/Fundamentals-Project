let userArray = [];
let favAnimal = []

module.exports = {
    registerUser: (req,res) => {
        const {firstname, lastname, username} = req.body;
        console.log(req.body)

        let userObj = {
            firstname,
            lastname,
            username
        }

        console.log('Registering User');
        userArray.push(userObj);
        let infoToReturn = {...userObj};
        res.status(200).send(infoToReturn)
    },

    loginUser: (req,res) => {
        
    },

    addFav: (req,res) => {
        const {favoriteAnimal} = req.body
        favAnimal.push(favoriteAnimal)
        let infoToReturn = favoriteAnimal
        console.log(favAnimal)
        return res.status(200).send(infoToReturn);
    },

    showFavs: (req,res) => {
        res.status(200).send(favAnimal)
    }
}

