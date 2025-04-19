import jwt from "jsonwebtoken";

const getToken = (req) => {
    const token = req.cookies.accessToken;
    console.log(`token: ${token}`);
    return token;
}

export {getToken};