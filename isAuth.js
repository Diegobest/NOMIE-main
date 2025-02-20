import verify from "jsonwebtoken";

const isAuth = req => {
    const authorization = req.headers['authorization'];
    if (!authorization) throw new Error("You must sign in.");
    const token = authorization.split(' ')[1];
    const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
    return userId;
}

export default isAuth;