import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: '#EEDDCE',
    marginTop: 40,
  },
  media: {
    height: 140,
  },
  text: {
    fontFamily: 'cursive',
    margin: 'auto',
    borderRadius: 8,
    textAlign: 'center',
  },
});

const CampCards = () => {
  const classes = useStyles();
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      heading: "Paula's Camp!",
      text: 'In each week-long summer session, certified dog trainer and behavior coach, Paula Benton teaches kids how to positively reinforce, communicate with and motivate their pups to do basic good manner behaviors.  They also master loose leash walking, as well as fun tricks to amaze and thrill friends and family members.  Kids have a ball learning the art of clicker training.  If camp dogs already offer these behaviors reliably, kids are taught more advanced skills building in distractions, duration, distance, improved timing and how to fade out treats. ',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      heading: 'Dog Requirements',
      text: [
        'Dogs should be spayed/neutered a minimum of 3 weeks prior to camp. ',
        'Dogs should be up-to-date with all vaccinations, including rabies. ',
        'Dogs should be over 6 months old. ',
        'Dogs should be licensed within the city/county of residence. ',
        'Paula needs to meet and interview all dogs prior to class beginning. ',
        'Dogs should weigh an amount the child can physically manage. ',
        'Dogs should be comfortable in a TWSF provided wire crate for 2 hours. ',
        'Dogs should wear a flat buckle collar with ID, license & rabies tags. ',
      ],
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      heading: 'What to Bring?',
      text: [
        'Hungry dog - please do not feed dogs breakfast. ',
        "Proof from your Vet of dog's DHLPP, bordetella & rabies vaccinations. ",
        'Kong or any food puzzle that will fit in a crate. ',
        'Sense-ation/Sense-ible/Easy Walk Harness (Paula can help with fitting). ',
        '6 ft. flat leash. ',
        'Kids need to wear/bring: sturdy closed toe shoes, hat for sun protection, long pants, rain gear and jacket - in case of bad weather. ',
        'If any of these items are new to you and you want more info about them, PLEASE give us a call.  ',
      ],
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/150',
      heading: 'Crafts and Games!',
      text: 'Paula use to own a small art school in Noe Valley called Artery and she has oodles of fun projects for the kids to do.  Project ideas include: creating tug toys, baking treats, decorating collars, making leash holders and personalized frames for your favorite pooch pose.',
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/150',
      heading: 'Friday Celebration!',
      text: 'Friday at 5:15 p.m. family and friends are invited to share some cake and lemonade as a fun way to end and celebrate the week.',
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/150',
      heading: 'Want to know more?',
      text: 'Please visit our contact page to get in touch with us. We would love to hear from you!',
    },
  ];

  return (
    <Container maxWidth='lg'>
      {' '}
      {/* Wrap with Container and set maxWidth */}
      <Grid container spacing={10} justify='center' >
        {cardsData.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={card.imageUrl}
                title={card.heading}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {card.heading}
                </Typography>
                <Typography
                  variant='body2'
                  color='black'
                  component='p'
                  className={classes.text}
                >
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CampCards;
