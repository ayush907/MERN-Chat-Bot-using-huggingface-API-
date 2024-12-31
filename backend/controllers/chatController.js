import axios from "axios"
import Chat from "../models/chatModel.js"


// for fetching all the chats with the bot
const getMessage = async(req, res)=>{
    try {
        const messages = await Chat.find().sort({Timestamp: 1})
        if(!messages){
            return res.status(404).json({success: false, message: "No messages found"})
        }
        res.status(200).json({success: true, data: messages})
    } catch (error) {
        res.status(400).json({success: false , message: error.message})
    }
}


// for sending a message to the bot
const sendMessage = async(req, res)=>{

    const {question} = req.body

    if(!question){
        return res.status(500).json({success: false, message: "Message is Required"})
    }

    try {

        const userMessage = await Chat.create({sender: "user", text: question})

        const {data} = await axios.post(
            process.env.LLAMA_MODEL_URL,
            { inputs: question },
            { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } 
        })

        // console.log(data[0].generated_text.split("\n\n")[1].trim());
        // console.log(data[0].generated_text)
        console.log(data)

        const ansarr = data[0].generated_text.split("\n")
        const newAnsarr = ansarr.filter((value) => {
            return value != question && value != `${question}?`;
        });
        
        // console.log(ansarr);
        // console.log(newAnsarr);
        const finalans = newAnsarr.join("\n")
        // console.log(finalans);

        const botReply = finalans || "Sorry I didn't understand that";

        const chat = await Chat.create({sender: "bot", text: botReply});

        res.status(200).json({success: true, botResponse: chat})

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message})
    }
}

export {getMessage, sendMessage}