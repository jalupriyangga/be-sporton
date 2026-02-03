import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import {
    createTransaction,
    getTransactionById,
    getTransactions,
    updateTransaction,
} from "../controllers/transaction.controller.js";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, updateTransaction);

export default router;