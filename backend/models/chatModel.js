import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    // userId
    sender: { type: String, required: true }, // "user" or "bot"
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
})

const chatModel = new mongoose.model("chat", chatSchema)

export default chatModel