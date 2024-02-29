import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});



const CampCards = () => {
  const classes = useStyles();
  const cardsData = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 1',
    text: 'This is the text for card 1.',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 2',
    text: 'This is the text for card 2.',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 3',
    text: 'This is the text for card 3.',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 4',
    text: 'This is the text for card 4.',
  },
  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 5',
    text: 'This is the text for card 5.',
  },
  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card 6',
    text: 'This is the text for card 6.',
  },
];

  return (
    <Grid container spacing={3}>
      {cardsData.map(card => (
        <Grid key={card.id} item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={card.imageUrl}
              title={card.heading}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.heading}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CampCards;
