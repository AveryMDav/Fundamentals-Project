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
        console.log(req.body)
        const {name, favoriteAnimal} = req.body;
        favAnimal.push(req.body);
        return res.status(200).send(res);
    }
}

