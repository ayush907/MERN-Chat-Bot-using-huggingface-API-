import express from "express"
import { getMessage, sendMessage } from "../controllers/chatController.js"

const router = express.Router()

router.get("/chat", getMessage)
router.post("/chat", sendMessage)

export default router