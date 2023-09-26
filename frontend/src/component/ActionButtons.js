import React from 'react';
import { Button, Grid } from '@mui/material';

const ActionButtons = ({ handleSave, handleGenerate }) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Button 
                    variant="contained" 
                    color="primary"
                    fullWidth
                    onClick={handleSave}>
                    Save Quote
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    fullWidth
                    onClick={handleGenerate}>
                    Generate Random Quote
                </Button>
            </Grid>
        </Grid>
    );
};

export default ActionButtons;
