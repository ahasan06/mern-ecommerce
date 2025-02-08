import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); // ✅ Use correct variable

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        
        mongoose.connection.on("error", (err) => {
            console.error(`❌ MongoDB Connection Error: ${err.message}`);
            process.exit(1);
        });

    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
