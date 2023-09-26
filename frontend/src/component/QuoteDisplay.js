import React from 'react';
import { Typography } from '@mui/material';

const QuoteDisplay = ({ displayQuote }) => (
    displayQuote && (
        <Typography variant="h6" sx={{ mt: 3, textAlign: 'center' }}>
            "{displayQuote}"
        </Typography>
    )
);

export default QuoteDisplay;
