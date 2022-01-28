//  Client <--> Node.js -> Express -> Midlewares -> Controller

import jwt from "jsonwebtoken"

import authConfig from "../config/auth"

export default (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'token was not provided.' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret);
        req.userId = decoded.id

        return next()
    } catch (err) {
        return res.status(401).json({ error: 'invalid token.' });
    }
};
