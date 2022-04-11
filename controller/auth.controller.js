const login = (req, res) => {
    res.send("Login successsful");
}

const register = (req, res) => {
    res.send("Registration successful");
}


module.exports = {
    login,
    register
}