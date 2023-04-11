import { Router } from "express";
import paymentsController from '../controllers/paymentsController.js';

const router = Router();

router.get('/teste', paymentsController.home);
router.get('/', paymentsController.creatPayment);

export default router;
