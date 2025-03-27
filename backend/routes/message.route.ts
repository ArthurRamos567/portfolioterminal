import express from "express";
import { authMiddleware } from "../middleware";
import { getMessage, postMessage, updateMessage, deleteMessage } from "../controlers/Message";

const router = express.Router();

router.get("/:name", getMessage);
router.post("/", authMiddleware, postMessage);
router.put("/:id", authMiddleware, updateMessage);
router.delete("/:id", authMiddleware, deleteMessage);

export default router;
