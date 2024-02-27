import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paula from '../images/PaulaBio.jpg';
import Long from '../images/Long-winded.png';
import Smart from '../images/smart-dog.png';

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

const PaulaBio = () => {
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
          image={Paula}
        />
        <CardContent>
          <Typography
            variant='h1'
            component='h1'
            className={classes.text}
            style={{ fontSize: '2rem' }}
          >
            Paula's Bio
          </Typography>
          <Typography variant='subtitle1' className={classes.text}>
            The Short ‘n Sassy Version
          </Typography>
          {/* Text container with background color */}
          <div className={classes.textContainer}>
            <Typography variant='body2' component='p' className={classes.text}>
              Paula Benton is a certified professional dog trainer and behavior
              coach committed to reward-focused, humane, pain-free training.
              Paula earned the certified professional dog trainer credential by
              demonstrating her knowledge and experience in the field of dog
              training with the Certification Council for Professional Dog
              Trainers. She studied at Bergin University’s Assistance Dog
              Institute to become a certified assistance dog trainer
              specializing in mobility assistance. Paula is San Francisco’s
              first Karen Pryor Academy Certified Trainer. Pryor is a founding
              pioneer of the clicker training movement. Paula studied with
              Grisha Stewart and is in the final stages of becoming a Certified
              Behavior Adjustment Training (BAT) Instructor. She is a graduate
              of: the Marin Humane Society’s Canine Behavior Academy with Trish
              King, Dogs Of Course’s Instructor Training Course in New York with
              Sue Sternberg and Pia Silvani, and Living and Learning with
              Animals with by Dr. Susan Friedman at Utah State University.
              Additionally, Paula is trained in Assess-A-Pet and SAFER Pet
              evaluating. She is an AKC Certified Canine Good Citizen/S.T.A.R.
              Puppy evaluator and a professional member of the Association of
              Pet Dog Trainers. Most recently, Paula became a registered San
              Francisco Disaster Animal Response Team (DART) Volunteer Service
              Worker. Paula provides private one-on-one dog training, teaches
              group classes, trains mobility assistance dogs, conducts
              temperament assessments, hosts a kids' dog training summer camp,
              coordinates an after school dog training program for kids at Live
              Oak School and in 2014 became the Director for SF Animal Care and
              Control's summer animal camp for kids. In 2009, Paula launched the
              San Francisco mobile outreach program to provides free pet care
              resources to people in need. Paula is committed to improving the
              lives of shelter & rescue dogs and to helping people keep their
              pets.
            </Typography>
          </div>
          <Button
            className={invertedButton ? classes.invertedButton : classes.button}
            onClick={handleButtonClick}
          >
            {!showSecondCard
              ? 'Want the long version?'
              : 'Oops, that was too much!'}
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
              image={Long}
            />
            <CardContent>
              <Typography
                variant='h1'
                component='h1'
                className={classes.text}
                style={{ fontSize: '2rem' }}
              >
                The Long-winded Version
              </Typography>
              <Typography variant='subtitle1' className={classes.text}>
                Deep breath, here we go!
              </Typography>
              <div className={classes.textContainer}>
                <Typography
                  variant='body2'
                  component='p'
                  className={classes.text}
                >
                  Paula Benton’s passion for dog training began over 15 years
                  ago. Like most trainers, it all started with the love of one
                  very special companion dog. B. Floyd Humphries sparked an
                  interest in Paula to learn everything she could about dog
                  behavior and how to effectively train dogs in the most humane
                  and compassionate way possible. Her downright zeal for all
                  things dog led to the creation of Chez Floyd, a professional
                  day care and boarding business in San Francisco. In 2007,
                  Paula continued pursuing her interest in dog training by
                  taking a job at San Francisco’s Animal Care and Control.
                  There, Paula assessed dogs for ACC adoptability, taught
                  classes for shelter volunteers and coordinated doggie
                  socialization play groups weekly. After a shelter internship
                  in New York with world-renowned trainer Sue Sternberg, Paula
                  left SF ACC in 2009 to start Training Wheels San Francisco.
                  Training Wheels, a national mobile outreach program created by
                  Sternberg and Jane Kopelman is dedicated to helping owners
                  with animal care resources that they would not have access to
                  ordinarily. With our name changed to Paula Benton Dog Training
                  we are a proud partner of VET SOS and together provide 12
                  clinics a year for homeless and no income pet owners. At each
                  clinic, pet owners receive behavior and training help,
                  wellness exams, vaccinations, microchipping, and
                  spay/neutering - all free-of-charge. Additionally, Paula has
                  combined her devotion to dog training with her love of
                  teaching kids by hosting a kids dog training summer camp every
                  year, where kids learn to train their own dogs as well as
                  fostered rescued dogs. Paula also teaches group classes,
                  provides private one-on-one training and trains mobility
                  assistance dogs. In 2014 she became the Director of SF Animal
                  Care and Controls summer animal camp for kids. One of Paula’s
                  most favorite client quotes: “If dog training solutions were
                  crayons, you couldn’t find a box big enough to hold all of
                  Paula’s.”
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component='img'
              alt="Paula's Image"
              image={Smart}
            />
            <CardContent>
              <Typography
                variant='h1'
                component='h1'
                className={classes.text}
                style={{ fontSize: '2rem' }}
              >
                Professional Certifications
              </Typography>
              <Typography variant='subtitle1' className={classes.text}>
                and Bragging Rights!
              </Typography>
              {/* Text container with background color */}
              <div className={classes.textContainer}>
                <Typography
                  variant='body2'
                  component='p'
                  className={classes.text}
                >
                  <ul>
                    <li>
                      Certified Professional Dog Trainer – Knowledge Assessed by
                      the Certification Council for Professional Dog Trainers
                    </li>
                    <li>
                      Certified Trainer by the Karen Pryor Academy for Animal
                      Training and Behavior
                    </li>
                    <li>
                      Certified Assistance Dog Trainer by the Bergin University
                      for Canine Studies
                    </li>
                    <li>
                      Graduate of Living and Learning with Animals program at
                      Utah State University with Dr. Susan Friedman
                    </li>
                    <li>
                      Graduate of the Marin Humane Society’s Canine Behavior
                      Academy with Trish King
                    </li>
                    <li>
                      Graduate of the Instructor Training Course by Dogs Of
                      Course with Sue Sternberg and Pia Silvani
                    </li>
                    <li>
                      Certified AKC Canine Good Citizen and S.T.A.R Puppy
                      Evaluator
                    </li>
                    <li>
                      Assess-A-Pet trained by Sue Sternberg at Rondout Valley
                      Animals for Adoption
                    </li>
                    <li>
                      SAFER trained by Heather Mohan & Teryn Jones at Tony La
                      Russa's Animals for Adoption
                    </li>
                    <li>
                      Registered San Francisco Disaster Animal Response Team
                      (DART) Volunteer Service Worker
                    </li>
                  </ul>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default PaulaBio;
