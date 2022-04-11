const greet = (req, res) => {
    res.send("Hello Server");
}

const welcome = (req, res) => {
   res.send("Welcome to my server"); 
}


module.exports ={
    greet,
    welcome
}