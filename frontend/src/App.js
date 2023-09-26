import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import QuoteInput from './component/QuoteInput';
import QuoteDisplay from './component/QuoteDisplay';
import ActionButtons from './component/ActionButtons';

function App() {
    const [quote, setQuote] = useState("");
    const [displayQuote, setDisplayQuote] = useState("");

    useEffect(() => {
        const fetchRandomQuote = async () => {
            try {
                const response = await fetch("http://localhost:3000/random");
                const data = await response.json();
                setDisplayQuote(data.quote);
            } catch (error) {
                console.error("Error fetching random quote:", error);
            }
        };

        fetchRandomQuote();
    }, []);

    const backendURL = process.env.REACT_APP_BACKEND_URL

    const handleSave = async () => {
        try {
            await fetch(`${backendURL}/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quote })
            });
            setQuote("");
        } catch (error) {
            console.error("Error saving the quote:", error);
        }
    }
    
    const handleGenerate = async () => {
        try {
            const response = await fetch(`${backendURL}/random`);
            const data = await response.json();
            setDisplayQuote(data.quote);
        } catch (error) {
            console.error("Error fetching random quote:", error);
        }
    }
    
    


    return (
        <Container component="main" sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h4" gutterBottom align="center">
            Quote Generator 
            </Typography>

            <QuoteInput 
                quote={quote}
                setQuote={setQuote}
                handleSave={handleSave}
            />

            <ActionButtons 
                handleSave={handleSave}
                handleGenerate={handleGenerate}
            />

            <QuoteDisplay displayQuote={displayQuote} />
        </Container>
    );
}

export default App;
