import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Corinne from '../images/Corinne.jpg';
import WhiteDog from '../images/white-dog.png';
import Naomi from '../images/Naomi.jpg';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    margin: 40,
    backgroundColor: '#EEDDCE',
    marginTop: 20,
  },
  media: {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#B19D99',
    fontSize: '.8rem',
    fontFamily: 'cursive',
    color: 'black', // Font color
    '&:hover': {
      backgroundColor: 'black',
      color: '#B19D99', // Hover background color
    },
  },
  invertedButton: {
    marginTop: 20,
    backgroundColor: 'black', // Inverted background color
    color: '#B19D99', // Inverted font color
    fontSize: '.8rem',
    fontFamily: 'cursive',
    '&:hover': {
      backgroundColor: '#B19D99',
      color: 'black',
    },
  },
  textContainer: {
    backgroundColor: '#F0EDEA', // Background color for the text container
    padding: 20, // Add padding around the text content
    margin: 'auto', // Add margin to separate the text container from the card
    borderRadius: 8, // Add border radius for rounded corners
    textAlign: 'center', // Center align the text
  },
  text: {
    fontFamily: 'cursive',
    marginTop: 15,
    fontSize: '1.2rem', // Increased font size
  },
});

const VetTrainers = () => {
  const classes = useStyles();
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [invertedButton, setInvertedButton] = useState(false);

  const handleButtonClick = () => {
    setShowSecondCard(!showSecondCard);
    setInvertedButton(!invertedButton);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component='img'
          alt="Paula's Image"
          image={Corinne}
        />
        <CardContent>
          <Typography
            variant='h1'
            component='h1'
            className={classes.text}
            style={{ fontSize: '2rem' }}
          >
            Joining Paula at VET SOS Clinics{' '}
          </Typography>
          <Typography variant='subtitle1' className={classes.text}>
            Corinne Dowling
          </Typography>
          {/* Text container with background color */}
          <div className={classes.textContainer}>
            <Typography variant='body2' component='p' className={classes.text}>
              Corinne Dowling pioneered environ- mental enrichment for dogs in
              long term shelter care over 10 years ago. She created and founded
              Give a Dog a Bone (GADAB), a non-profit organization devoted to
              environmental enrichment, at San Francisco Animal Care & Control,
              focusing on how to develop quality of life for a group of dogs
              never seen by the public. Her emphasis has been on creating
              programs that are replicatible, inexpensive, and that range from
              simple to complicated interactions with the dogs in her care for
              both the dogs and the volunteers in Give a Dog a Bone. Her
              enrichment techniques include providing mental stimulation,
              physical exercises, emotive interactions, stress relief, positive
              rewards-based training, and canine-specific pleasurable
              activities. GADAB’s intent and purpose is to address shelter dogs’
              needs individually as well as holistically.
            </Typography>
          </div>
          <Button
            className={invertedButton ? classes.invertedButton : classes.button}
            onClick={handleButtonClick}
          >
            {!showSecondCard
              ? 'See More Trainers!'
              : 'See Less Trainers!'}
          </Button>
        </CardContent>
      </Card>
      {showSecondCard && (
        <>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component='img'
              alt="Paula's Image"
              image={WhiteDog}
            />
            <CardContent>
              <Typography
                variant='h1'
                component='h1'
                className={classes.text}
                style={{ fontSize: '2rem' }}
              >
                Heather Burton
              </Typography>
              <Typography variant='subtitle1' className={classes.text}>
                Certified Trainer{' '}
              </Typography>
              <div className={classes.textContainer}>
                <Typography
                  variant='body2'
                  component='p'
                  className={classes.text}
                >
                  Heather Burton was a volunteer dog walker and training class
                  assistant at the SF/SPCA for more than a year when she adopted
                  what she likes to call a "special needs" dog. This canine
                  addition to her family was a very shy, fearful girl that
                  didn't have much experience in life or dog/dog interactions.
                  Both Heather and her special girl had much to learn about how
                  to successfully make it in this crazy, mixed-up world
                  together. In order to be the best guardian she could be,
                  Heather enrolled in the SF/SPCA's Academy for Dog Trainers and
                  graduated with an Honors Certificate in Training & Counseling,
                  and the rest is history. Heather takes nearly all types of
                  behavior cases, but she continues to have an affinity for
                  working with the scaredy-cat dogs because she can't imagine
                  anything more rewarding than helping frightened creatures gain
                  confidence and to the ability to gently expand their horizons.
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component='img'
              alt="Paula's Image"
              image={Naomi}
            />
            <CardContent>
              <Typography
                variant='h1'
                component='h1'
                className={classes.text}
                style={{ fontSize: '2rem' }}
              >
                Naomi Sims{' '}
              </Typography>
              <Typography variant='subtitle1' className={classes.text}>
                Behavior and Training Department{' '}
              </Typography>
              <div className={classes.textContainer}>
                <Typography
                  variant='body2'
                  component='p'
                  className={classes.text}
                >
                  Naomi's goal is to give dog owners the tools needed to empower
                  them to make a difference in their day-to-day interactions
                  with their dogs as well as to set the stage for a rewarding
                  long-term relationship with their dogs. She believes that the
                  learning process should be engaging and fun for both the
                  family and the dog! Naomi apprenticed with SIRIUS® trainer
                  Natalie Bayless in Pacifica and Redwood City, and she is
                  currently the SIRIUS® Redwood City trainer.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default VetTrainers;
