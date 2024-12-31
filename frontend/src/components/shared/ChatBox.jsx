import { IconButton, Input, Stack, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Send as SendIcon } from "@mui/icons-material"
import Messagebox from './Messagebox'
import toast from 'react-hot-toast'
import { url } from '../constants/config'
import { TypingLoader } from '../loader/Loader'


const usercontent = "Agar future mein aur bhi files add karni padti hain jaise specific thunks, selectors, ya helper functions"

const botcontent = ", toh aap unhe apne respective folder mein rakh sakte hain (e.g., counterHelpers.js inside counter folder)., toh aap unhe apne respective folder mein rakh sakte hain (e.g., counterHelpers.js inside counter folder)., toh aap unhe apne respective folder mein rakh sakte hain (e.g., counterHelpers.js inside counter folder)., toh aap unhe apne respective folder mein rakh sakte hain (e.g., counterHelpers.js inside counter folder)., toh aap unhe apne respective folder mein rakh sakte hain (e.g., counterHelpers.js inside counter folder)."

const ChatBox = () => {

    const [messages, setmessages] = useState([])
    const [question, setquestion] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const messagesEndRef = useRef(null)

    useEffect(() => {
        const getAllMessages = async () => {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await response.json()
            setmessages(data.data)
        }
        getAllMessages()
    }, [])



    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    // question submit handle karne ke liye function
    const submitHandler = async (e) => {
        e.preventDefault()

        if (!question.trim()) {
            return toast.error('Please enter a question')
        }

        const usermessage = { sender: "user", text: question }

        setmessages((prev) => [...prev, usermessage])

        const obj = { question: question }

        try {
            setisLoading(true)
            setquestion("")
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })

            const data = await response.json()
            // console.log("the data is ",data)

            setmessages((prev) => [...prev, { sender: data.botResponse.sender, text: data.botResponse.text }])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setisLoading(false)
        }
    }

    return (
        <Stack
            height={"100%"}
            sx={{
                background: "linear-gradient(to bottom, #E0F7FA, #F5F5F5)",
                width: { xs: "100%", md: "70%" },
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"
            }}
        >
            <Header />
            <Stack
                height={"calc(100vh - 4rem)"}
                padding={"15px"}
                overflow={"scroll"}
                borderRadius={"5px"}
                gap={"2rem"}
            >
                {
                    messages.map((value, index) => (
                        <Messagebox
                            key={index}
                            sender={value.sender}
                            text={value.text}
                        />
                    ))
                }
                {
                    isLoading && <TypingLoader/>
                }
                <div ref={messagesEndRef} />
            </Stack>

            <form onSubmit={submitHandler}>
                <Stack
                    direction={"row"}
                    width={"100%"}
                    padding={"5px"}
                    alignItems={"center"}
                    bgcolor={"black"}
                >
                    <TextField
                        value={question}
                        onChange={(e) => { setquestion(e.target.value) }}
                        type='text'
                        placeholder='enter question here......'
                        name='question'
                        sx={{
                            width: "100%",
                            bgcolor: "white"
                        }}
                    />
                    <IconButton
                        type='submit'
                        sx={{
                            rotate: "-30deg",
                            backgroundColor: "orange",
                            color: "white",
                            marginLeft: "1rem",
                            "&:hover": {
                                bgcolor: "error.dark",
                            }
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Stack>
            </form>
        </Stack>
    )
}

export default ChatBox