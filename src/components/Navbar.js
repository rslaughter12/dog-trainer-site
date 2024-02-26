import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        position: 'absolute',
        top: 25,
        left: 0,
        zIndex: 1,
        marginLeft: theme.spacing(2),
        color: 'black',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: '#EEDCE',
        },
    },
    drawerPaper: {
        width: 240,
        color: 'white',
        backgroundColor: '#EEDDCE',
        opacity: 0.9,
        paddingTop: theme.spacing(4),
    },
    listItem: {
        '&:hover': {
            backgroundColor: '#F0EDEA', // Change the background color on hover
        },
    },
    '@media (max-width: 500px)': {
        menuButton: {
            backgroundColor: 'transparent',
            marginLeft: theme.spacing(-1),
            opacity: 1,
        },
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenuItemClick = () => {
        setDrawerOpen(false);
    };

    return (
        <div className={classes.root}>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem button component={Link} to="/" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Home" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/partners" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="VET SOS Partner" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/bio" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Paula's Bio" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/trainers" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="VET SOS Trainers" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/camp" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Kids Summer Camp" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/tips" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Free Training Tips" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/private-training" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Private Training" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/calendar" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Calendar" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/food-bank" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Pet Food Bank" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/help" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Ways to Help" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                    <ListItem button component={Link} to="/contact" onClick={handleMenuItemClick} className={classes.listItem}>
                        <ListItemText primary="Contact Us" primaryTypographyProps={{ style: { color: '#B19D99' } }} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;
