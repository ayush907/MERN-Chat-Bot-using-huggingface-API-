import { IconButton, Stack, Typography } from '@mui/material'
import { Logout as LogoutIcon } from "@mui/icons-material"
import React from 'react'

const Header = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"3rem"}
            border={"2px solid black"}
            sx={{
                padding: "2rem",
                borderRadius: "5px",
                bgcolor: "blue",
                color: "white"
            }}
        >

            <Typography variant='h3' fontSize={"2rem"} fontWeight={"600"}>CHATBOT</Typography>
            <Typography flexGrow={"1"}></Typography>
            <IconButton sx={{ color: 'white' }}><LogoutIcon sx={{ color: 'white' }} /></IconButton>

        </Stack>
    )
}

export default Header