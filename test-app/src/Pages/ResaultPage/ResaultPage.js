import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../../Components/Main/Cards';

class ResaultPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.cardResault}>
          {this.props.filterHeroes.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
        {this.props.filterHeroes ? '' : <p>End.</p>}
      </>
    );
  }
}

ResaultPage.propTypes = {
  filterHeroes: PropTypes.arrayOf(Object).isRequired,
  classes: PropTypes.shape({
    cardResault: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(ResaultPage);
