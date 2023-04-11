import { Router } from "express";
import paymentsController from '../controllers/paymentsController.js';
import productController from '../controllers/productController.js'

const router = Router();

router.get('/', productController.create);
router.get('/list', productController.list);
router.get('/payment', paymentsController.createPay);
//router.get('/payments', paymentsController.creatPayment);

export default router;
