const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const token = req.header('Authorization');

    if(!token){
        res.status(400).json({ msg: "No token, authorization denied" })
    }

    try {
        const decoded = jwt.verify(token, process.env.SECREET);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({msg: "Token is invalid"});
    }

}

module.exports = auth;