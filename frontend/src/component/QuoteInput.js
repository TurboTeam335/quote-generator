import React from 'react';
import { TextField } from '@mui/material';

const QuoteInput = ({ quote, setQuote, handleSave }) => (
    <>
        <TextField
            label="Add New Quote"
            variant="outlined"
            fullWidth
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            sx={{ mb: 2 }}
        />
    </>
);

export default QuoteInput;
