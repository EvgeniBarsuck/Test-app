import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../../Components/Main/Cards';
import { getHeroActions } from '../../Redux/Hero/actions';
import HeroSelect from '../../Components/Main/SearchBox';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = this.windowScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.hero.hero.length === 0) this.props.getHero('https://rickandmortyapi.com/api/character/?page=1');
  }

  // eslint-disable-next-line class-methods-use-this
  windowScroll() {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop === offsetHeight) {
      if (this.props.hero.nextPage) {
        this.props.getHero(this.props.hero.nextPage);
      }
    }
  }

  render() {
    return (
      <>
        <div style={style.root}>
          <HeroSelect />
        </div>
        <div style={style.root}>
          {this.props.hero.hero.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
        {this.props.hero.nextPage ? '' : <p>End.</p>}
      </>
    );
  }
}

MainPage.propTypes = {
  getHero: PropTypes.func.isRequired,
  hero: PropTypes.shape({
    hero: PropTypes.arrayOf(Object).isRequired,
    loading: PropTypes.bool.isRequired,
    nextPage: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) => ({
  getHero: (nextPage) => dispatch(getHeroActions(nextPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
