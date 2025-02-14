import express from 'express'
import { listProduct, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import { adminAuth } from '../middleware/AdminAuth.js';

const productRoute = express.Router()

// productRoute.post(
//     '/add',
//     upload.fields([
//         { name: 'image1', maxCount: 1 },
//         { name: 'image2', maxCount: 1 },
//         { name: 'image3', maxCount: 1 },
//         { name: 'image4', maxCount: 1 }
//     ]),
//     addProduct
// );

productRoute.post(
    '/add',
    adminAuth,
    upload.array('images',4),
    addProduct
)

productRoute.post('/remove/:id', adminAuth, removeProduct);
productRoute.post('/single/:id', singleProduct);
productRoute.get('/list', listProduct);

export default productRoute