import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../../Components/Main/Cards';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

class ResaultPage extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = this.windowScroll.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  windowScroll() {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop === offsetHeight) {
      // this.props.getSelectedFilterHeroActions(this.props.hero.nextPageSearch);
    }
  }

  render() {
    return (
      <>
        <div style={style.root}>
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
};

export default ResaultPage;
