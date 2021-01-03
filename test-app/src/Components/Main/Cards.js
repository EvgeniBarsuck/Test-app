import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useStyles from '../../Style/cardStyle';

const RecipeReviewCard = React.memo(({ item }) => {
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
});

RecipeReviewCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeReviewCard;
