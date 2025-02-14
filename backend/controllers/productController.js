
import cloudinary from '../config/cloudinary.js';
import ProductModel from '../models/productModel.js';
import fs from 'fs';



const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller, date } = req.body;
        // Validate required fields
        if (!name || !description || !price || !category || !subCategory || !sizes || !date) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!req.files || req.files.name === 0) {
            return res.status(400).json({ error: "At least one image is required" });
        }

        // Upload images to Cloudinary
        const imageUploadPromises = req.files.map(async (file) => {

            try {
                const result = await cloudinary.uploader.upload(file.path, { folder: 'product_images' });
                console.log(`Uploaded to: ${result.secure_url}`);

                // ✅ Check if file exists before deleting
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
                return result.secure_url;

            } catch (uploadError) {
                console.error("Cloudinary Upload Error:", uploadError);
                throw new Error("Image upload failed. Please try again.");
            }
        });

        // Wait for all uploads to complete
        const imagesUrl = await Promise.all(imageUploadPromises);
        console.log("Final Images Array:", imagesUrl);

        // ✅ Save product details to MongoDB
        const newProduct = new ProductModel({
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === 'true',
            sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        })

        try {
            await newProduct.save();
        } catch (dbError) {
            console.error("Database Save Error:", dbError);
            return res.status(500).json({ success: false, error: "Failed to save product to database." });
        }

        res.status(201).json({ success: true, message: "Product added successfully", product: newProduct });


    } catch (error) {

        console.log(error);
        res.json({ sucess: false, message: error.message })
    }
}
const listProduct = async (req, res) => {

    try {
        const { category, subCategory, minPrice, maxPrice, bestSeller, page = 1, limit = 10, sort } = req.query;

        let query = {}
        if (category) {
            query.category = category
        }
        if (subCategory) {
            query.subCategory = subCategory
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) {
                query.price.$gte = Number(minPrice)
            }
            if (maxPrice) {
                query.price.$lte = Number(maxPrice);
            }
        }
        if (bestSeller) {
            query.bestSeller = bestSeller === 'true';
        }
        // Pagination settings
        const skip = (page - 1) * limit
        const products = await ProductModel.find(query)
            .sort(sort ? { price: sort === 'asc' ? 1 : -1 } : {})
            .skip(skip)
            .limit(Number(limit))

        // Get total count for pagination metadata
        const totalProducts = await ProductModel.countDocuments(query);
        res.json({
            success: true,
            total: totalProducts,
            page: Number(page),
            limit: Number(limit),
            products,
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve products" });
    }

}

const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
           return res.status(400).json({success:false ,message:"Product Id is required!"}) 
        }
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }

       return res.status(200).json({ success: true, message: "Product removed successfully." });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
}

const singleProduct = async (req, res) => {
    res.json({ msg: "single product API Working" });
}

export { addProduct, listProduct, removeProduct, singleProduct }