import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import mia from '../images/mia.jpg';
import Qualifications from './Qualifications';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#EEDDCE',
    width: 'auto',
    height: 'auto',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
    display: 'flex',
  },
  media: {
    width: '25%',
    borderRadius: '50%',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'cursive',
    margin: '0 0.5rem',
    fontSize: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontFamily: 'cursive',
    marginBottom: theme.spacing(2),
  },
  signature: {
    fontSize: '1.5rem',
    fontFamily: 'cursive',
    fontStyle: 'italic',
    marginTop: theme.spacing(2),
  },
}));

const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt='Welcome Image'
        image={mia}
        className={classes.media}
      />
      <CardContent className={classes.content}>
        <Typography variant='h4' className={classes.heading}>
          Welcome!
        </Typography>
        <Typography className={classes.content}>
          Thank you for visiting Paula Benton Dog Training! We are a San
          Francisco mobile outreach program dedicated to providing free pet care
          resources to people in need. Our program was created in 2009 and
          inspired by Sue Sternberg and Training Wheels. Our devoted team of
          talented volunteers is committed to helping companion animal owners
          before they find themselves in need of surrendering their pets to
          shelters. Paula Benton Dog Training is proud to announce our
          partnership with Veterinary Street Outreach Services also known as VET
          SOS. Together, we provide animal training & behavior coaching,
          wellness exams, vaccinations, microchipping, and spay/neuter
          assistance at 12 clinics a year - all free of charge to people who are
          homeless. In addition to our volunteer services, I personally provide
          private one-on-one training, group classes, behavior assessments,
          mobility assistance dog training, a dog training after school program
          for kids, a dog training summer camp for kids and in 2014 became the
          Director for San Francisco's Animal Care and Control's summer animal
          camp for kids. I hope you enjoy exploring our website. Please contact
          me if you would like to sign up for any of our services or if you have
          any questions.
        </Typography>
        <Typography className={classes.signature}>
          - Paula Benton Certified Professional Dog Trainer and Behavior Coach
        </Typography>
        <Qualifications />
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
