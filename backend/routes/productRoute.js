import express from 'express'
import { listProduct,addProduct,removeProduct,singleProduct } from '../controllers/productController.js'

const productRoute = express.Router()

productRoute.post('/add',addProduct);
productRoute.post('/remove',removeProduct);
productRoute.post('/single',singleProduct);
productRoute.get('/list',listProduct);

export default productRoute