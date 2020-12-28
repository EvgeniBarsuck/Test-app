import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    paddingLeft: 5,
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function RecipeReviewCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            RM
          </Avatar>
        )}
        title={item.name}
        subheader={`Status: ${item.status}, Gender: ${item.gender}`}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
      />
      <CardActions>
        <Link to={`/hero/${item.id}`}>
          <Button variant="contained" color="primary">
            Lean more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
