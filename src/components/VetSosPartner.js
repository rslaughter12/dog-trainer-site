import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Partner from '../images/partner.jpg';

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
  textContainer: {
    backgroundColor: '#F0EDEA',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'cursive',
    marginTop: 15,
    fontSize: '1.2rem', // Increased font size
  },
  media: {
    height: 300,
    width: 300,
    objectFit: 'cover',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: 20,
  },
  scheduleContainer: {
    backgroundColor: '#F0EDEA',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'center',
  },
});

const VetSosPartner = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={Partner}
        title='VetSos Partner'
      />
      <CardContent>
        <Typography variant='h4' component='h2' className={classes.text}>
          VET SOS Partner
        </Typography>
        <div className={classes.textContainer}>
          <Typography
            variant='body1'
            component='p'
            className={classes.text}
          >
            Partners in Helping People Keep Their Pets!
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Paula Benton Dog Training is proud and deeply honored to partner
            with Veterinary Street Outreach Services (VET SOS) in helping people
            keep their pets. PBDT provides free animal training and behavior
            counseling at 12 VET SOS clinics annually throughout San Francisco.
            VET SOS is an innovative outreach project which addresses the unique
            problems of homeless individuals with companion animals. It is a
            project of the Street Outreach Services (SOS) program at the San
            Francisco Community Clinic Consortium (SFCCC). Services are provided
            by volunteer veterinarians and veterinary technicians through the
            use of a specially equipped mobile outreach van. VET SOS provides
            free: * veterinary exams * basic veterinary procedures *
            vaccinations * microchipping * referrals & transportation for free
            spay/neuter surgery * information about service animals in rental
            housing * information about responsible pet ownership * health care
            information & referrals to their homeless humans 12 mobile clinics
            are conducted in selected areas of San Francisco that are inhabited
            by homeless individuals with companion animals. VET SOS visits the
            Castro/Mission, China Basin, Golden Gate Park, Haight-Ashbury and
            Bayview-Hunter's Point neighborhoods. Additionally, they provide
            services at San Francisco’s Project Homeless Connect events as well
            as at the Homeless Youth Alliance. More than 6,500 homeless people
            were identified during San Francisco's 2009 biennial homeless count.
            VET SOS recognizes that keeping the pets of homeless people healthy
            sustains the physical and mental well-being of their human owners.
            Often, these pets serve as a sole source of emotional support,
            promote responsibility, and act as social catalysts for interactions
            with other people. By combining the efforts of animal health care
            providers and human health care providers to reach out to this
            often-wary population, VET SOS builds trust, enabling further
            outreach and education.
          </Typography>
        </div>
        <div className={classes.scheduleContainer}>
          <Typography variant='h6' component='h3' className={classes.text}>
            Schedule
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Monday - Friday: 9am - 6pm
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Saturday: 10am - 4pm
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Sunday: Closed
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            NOTE: All attendees needing services must arrive to each clinic by
            11 a.m.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default VetSosPartner;
