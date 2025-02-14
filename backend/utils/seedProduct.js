// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import connectDB from "../config/mongodb.js";  // ✅ Import existing DB connection
// import ProductModel from "../models/productModel.js";
// import { allProducts } from "../assets/assets.js";

// dotenv.config(); // ✅ Load environment variables

// const seedDatabase = async () => {
//     try {
//         await connectDB(); // ✅ Use the existing database connection
//         console.log("✅ Database Connected Successfully!");

//         await ProductModel.deleteMany(); // Clear existing data
//         console.log("🗑️ Existing products deleted!");

//         await ProductModel.insertMany(allProducts); // Insert new data
//         console.log("🎉 Products inserted successfully!");

//         mongoose.connection.close(); // ✅ Close connection after seeding
//         console.log("🔌 Database Connection Closed!");
//     } catch (error) {
//         console.error("❌ Error inserting products:", error);
//         mongoose.connection.close();
//         process.exit(1);
//     }
// };

// // Run the script
// seedDatabase();
