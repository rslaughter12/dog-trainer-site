import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({ 
    text: {
        fontSize: 12, // Font size
        fontFamily: 'cursive', // Font family
        color: 'black', // Font color
        padding: 20, // Add padding around the text content
        margin: 'auto', // Add margin to separate the text container from the card
        borderRadius: 8, // Add border radius for rounded corners
        textAlign: 'center', // Center align the text
    },
});

const Copyright = () => {
    const classes = useStyles();
    return (
        <div>
            <p className={classes.text}>Website created by Ryan Acevedo Slaughter 2024</p>
        </div>
    );
};

export default Copyright;