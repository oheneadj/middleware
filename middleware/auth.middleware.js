const authRequired = (req, res, next)=> {
    const body = req.body;

    if (body.username !== "ohene" || body.password !== "secret"){
       return res.send("Invalid credentials");
    }

    next();

    
}

module.exports = {authRequired};