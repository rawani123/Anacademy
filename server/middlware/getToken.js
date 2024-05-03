import studentModel from "../models/student.model.js";
import jwt from "jsonwebtoken"

const getToken = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.student.id = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).send({ message: "You are not authorized", success: false });
    }
}

export default getToken;
