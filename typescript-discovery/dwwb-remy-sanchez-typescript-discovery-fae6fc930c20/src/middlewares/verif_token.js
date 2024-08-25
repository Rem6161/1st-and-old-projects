const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (request, response, next) => {
    const token = request.headers.authorization
    // check if token is inside request
    if (!token) {
        //if i dont have any token send an error response
        return response.status(401).json({
            message: "Vous n'avez pas de token"
        })
    } else {
        try {
            // check validity token
            const tokenIsValid = jwt.verify(token, process.env.JWT_TOKEN);
            // if validity token ok keep going
            if (tokenIsValid) {
                next();
            } else {
                //else send error response
                return response.status(502).json({
                    error: "Access Denied: Votre token n'est pas valid"
                })
            }

        } catch (error) {
            return response.status(500).json({
                error: error
            })
        }
    }




}

module.exports = verifyToken
