import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: theme.spacing(2),
        backgroundColor: '#B19D99;', // Light tan background color
        width: '100%',
        height: '80px', // Set height to 80px or adjust as needed
        marginLeft: -10, // Adjust margin as needed
        marginTop: -10, // Adjust margin as needed
    },
    pawIcon: {
        position: 'absolute',
        right: theme.spacing(2),
        color: theme.palette.primary.main, // Adjust color as needed
    },
    text: {
        fontSize: '2rem', // Increase font size to make it cuter
        margin: '0 0.5rem', // Adjust margin as needed
        fontFamily: 'cursive', // Add a cute font family
    },
    navbar: {
        position: 'absolute',
        left: 0,
    },
    '@media (max-width: 500px)': {
        text: {
            fontSize: '1.5rem', // Decrease font size for smaller screens
        },
    },
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.banner}>
            <Navbar className={classes.navbar} />
            <Typography variant="h1" className={classes.text}><strong>Paula Benton Dog Training</strong></Typography>
        </Paper>
    );
};

export default Banner;
