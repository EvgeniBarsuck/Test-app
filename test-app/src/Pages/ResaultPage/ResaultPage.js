import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../../Components/Main/Cards';
import { getSelectedFilterHeroActions } from '../../Redux/Hero/actions';
import { CONCAT_HERO } from '../../Redux/Hero/types';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = this.windowScroll.bind(this);
  }

  componentDidMount() {
    this.props.concatHero();
  }

  // eslint-disable-next-line class-methods-use-this
  windowScroll() {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop === offsetHeight) {
      if (this.props.hero.nextPageSearch) {
        this.props.getSelectedFilterHeroActions(this.props.hero.nextPageSearch);
      }
    }
  }

  render() {
    return (
      <>
        <div style={style.root}>
          {this.props.hero.filterSearchResult.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
        {this.props.hero.nextPageSearch ? '' : <p>End.</p>}
      </>
    );
  }
}

ResultPage.propTypes = {
  getSelectedFilterHeroActions: PropTypes.func.isRequired,
  concatHero: PropTypes.func.isRequired,
  hero: PropTypes.shape({
    filterSearchResult: PropTypes.arrayOf(Object).isRequired,
    loading: PropTypes.bool.isRequired,
    nextPageSearch: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedFilterHeroActions:
  (nextPageSearch) => dispatch(getSelectedFilterHeroActions(nextPageSearch)),
  concatHero: () => dispatch({ type: CONCAT_HERO }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
