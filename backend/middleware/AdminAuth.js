import jwt from 'jsonwebtoken'
export const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again!" });
        }

        const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again!" });
        }

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ error: "Invalid or Expired Token" });
    }
};