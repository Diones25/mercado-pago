import { Router } from "express";
import paymentsController from '../controllers/paymentsController.js';

const router = Router();

router.get('/', paymentsController.home);
router.get('/payments', paymentsController.creatPayment);

export default router;
