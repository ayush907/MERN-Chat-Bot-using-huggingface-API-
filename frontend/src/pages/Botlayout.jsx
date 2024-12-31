import { Container } from '@mui/material';
import React from 'react';
import ChatBox from '../components/shared/ChatBox';

const Botlayout = () => {
    return (
        <Container
        maxWidth={false}
            sx={{ 
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to bottom, #f8c6d3, #e0b0ff)" 
             }}
        >
            <ChatBox/>
        </Container>
    );
};

export default Botlayout;
