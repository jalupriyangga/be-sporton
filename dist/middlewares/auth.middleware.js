import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "Sporton123";
export const authenticate = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        res.status(401).json({ message: "Authentication Required!" });
        return;
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid Token" });
    }
};
