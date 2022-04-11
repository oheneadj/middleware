const greet = (req, res) => {
    res.send("Hello Server");
}

const welcome = (req, res) => {
   res.send("Welcome to my server"); 
};

const protected = (req, res) => {
    res.send("You can see this because you have been authenticated");
}


module.exports = {
    greet,
    welcome,
    protected
}