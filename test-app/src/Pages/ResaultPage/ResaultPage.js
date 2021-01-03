import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../../Components/Main/Cards';

class ResaultPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <p>
          Number of search results:
          {` ${this.props.data.filterHeroesPageCount * this.props.data.pageLimit}`}
          (limit 100)
        </p>
        <div className={classes.cardResault}>
          {this.props.data.filterHeroes.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </>
    );
  }
}

ResaultPage.propTypes = {
  data: PropTypes.shape({
    filterHeroes: PropTypes.arrayOf(Object).isRequired,
    filterHeroesPageCount: PropTypes.number.isRequired,
    pageLimit: PropTypes.number.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    cardResault: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(ResaultPage);
