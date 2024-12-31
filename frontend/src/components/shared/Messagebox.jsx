import { Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"

const Messagebox = ({ sender, text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
                alignSelf: sender === "user" ? "flex-end" : "flex-start",
                backgroundColor: sender === "user" ? "#f5f8ec" : "#333",
                color: sender === "user" ? "black" : "white",
                width: "fit-content",
                maxWidth: sender === "user" ? "300px" : "800px",
                borderRadius: "5px",
                padding: "0.5rem",
                wordWrap: "break-word",
                whiteSpace: "normal",
            }}
        >
            <Typography variant='caption' color={sender === "user" ? "blue" : "yellow"} fontSize={"1rem"} fontWeight={"600"}>{sender}</Typography>
            <Typography>{text}</Typography>
        </motion.div>
    )
}

export default Messagebox