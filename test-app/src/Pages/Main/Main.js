import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Main/Cards';
import HeroSelect from '../../Components/Main/SearchBox';
import Select from '../../Components/Main/Select';

const initialState = {
  status: '',
  species: '',
  gender: '',
  limit: 25,
  searchBox: '',
};

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '10px',
  },
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = this.windowScroll.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    if (this.props.data.allHeroesList.length === 0) {
      this.props.getAllHeroesListHero(this.props.data.page, this.props.data.limit);
    }
  }

  onSelecthandleChange = (name, value) => {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
    if (name === 'limit') {
      this.props.clearAllHeroList();
      this.props.changeLimitAndPage(value, 1);
      this.props.getAllHeroesListHero(1, value);
    }
  };

  windowScroll() {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop === offsetHeight) {
      const page = this.props.data.page + 1;
      this.props.changeLimitAndPage(this.props.data.limit, page);
      this.props.getAllHeroesListHero(this.props.data.page, this.props.data.limit);
    }
  }

  render() {
    const {
      status,
      species,
      gender,
      searchBox,
    } = this.state;
    return (
      <>
        <div style={style.root2}>
          <HeroSelect onSelecthandleChange={this.onSelecthandleChange} />
          <Select
            status={status}
            species={species}
            gender={gender}
            limit={this.props.data.limit}
            onSelecthandleChange={this.onSelecthandleChange}
          />
          <Link to="/hero/search">
            <Button
              onClick={() => this.props.getFilterHeroesActions(
                {
                  status,
                  species,
                  gender,
                  page: 1,
                  limit: this.props.data.limit,
                  searchBox,
                },
              )}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Link>
        </div>
        <div style={style.root}>
          {this.props.data.allHeroesList.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
        {this.props.data ? '' : <p>End.</p>}
      </>
    );
  }
}

MainPage.propTypes = {
  data: PropTypes.shape({
    limit: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    allHeroesList: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  getAllHeroesListHero: PropTypes.func.isRequired,
  getFilterHeroesActions: PropTypes.func.isRequired,
  clearAllHeroList: PropTypes.func.isRequired,
  changeLimitAndPage: PropTypes.func.isRequired,
};

export default MainPage;
