import express from "express";

import { getAnimation, postAnimation, updateAnimation, deleteAnimation } from "../controlers/Animation";
import { authMiddleware } from "middleware";

const router = express.Router();

router.get("/:name", getAnimation);
router.post("/", authMiddleware, postAnimation);
router.put("/:id", authMiddleware, updateAnimation);
router.delete("/:id", authMiddleware, deleteAnimation);

export default router;
