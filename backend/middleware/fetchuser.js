const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = "thisismyprivatejwtkey"

const fetchUser = (req, res, next) => {

    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate with a valid token" })
    }

    try {

        const data = jwt.verify(token, JWT_SECRET_KEY)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate with a valid token" })
    }

}

module.exports = fetchUser