
import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import CCPDT from '../images/CCPDT.png';
import AKC from '../images/AKC.png';
import ADPT from '../images/ADPT.jpg';
import MHL from '../images/MHL.png';
import KPA from '../images/kpa-logo-tagline-reverse-2012-09-25-450x284.png';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    padding: 16,
    marginTop: theme.spacing(2),
    backgroundColor: '#F0EDEA',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'cursive',
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: 'cursive',
    fontStyle: 'italic',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 16,
    cursor: 'pointer', // Add this line to change the cursor on hover
  },
}));

const Qualifications = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.heading} variant='h2'>
          Certifications
        </Typography>
        <Typography className={classes.text} variant='body1'>
          I am always growing to make sure that I am providing the best service
          possible. I have obtianed many dog training certifications. Below you
          can click on the institutions that I have been certified by.
        </Typography>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src={CCPDT}
            alt='Logo 1'
            onClick={() => window.open('https://www.ccpdt.org/', '_blank')}
          />
          <img
            className={classes.logo}
            src={AKC}
            alt='Logo 2'
            onClick={() =>
              window.open(
                'https://www.akc.org/products-services/training-programs/canine-good-citizen/',
                '_blank'
              )
            }
          />
          <img
            className={classes.logo}
            src={ADPT}
            alt='Logo 3'
            onClick={() =>
              window.open(
                'https://apdt.com/',
                '_blank'
              )
            }
          />
          <img
            className={classes.logo}
            src={KPA}
            alt='Logo 4'
            onClick={() =>
              window.open(
                'https://karenpryoracademy.com/',
                '_blank'
              )
            }
          />
          <img
            className={classes.logo}
            src={MHL}
            alt='Logo 5'
            onClick={() =>
              window.open(
                'https://marinhumane.org/',
                '_blank'
              )
            }
          />

        </div>
      </CardContent>
    </Card>
  );
};

export default Qualifications;
