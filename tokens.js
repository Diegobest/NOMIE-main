import jwt from "jsonwebtoken";

const createAccessToken = user_id => {
    return jwt.sign({user_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
};

// const createRefreshToken = user_id => {
//     return jwt.sign({user_id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
// };

const sendAccessToken = (req, res, accessToken) => {
    res.send({ accessToken})
};

// const sendRefreshToken = (res, refreshToken) => {
//     res.cookie('bigfoot', refreshToken, {
//         httpOnly: true,
//         path: '/refresh_token'
//     })
// };

export {createAccessToken, sendAccessToken};