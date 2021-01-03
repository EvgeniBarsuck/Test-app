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

class MainPage extends React.Component {
  constructor(props) {
    super(props);
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

  windowScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight === scrollHeight) {
      if (this.props.data.page <= this.props.data.allHeroesListPage) {
        const page = this.props.data.page + 1;
        this.props.changeLimitAndPage(this.props.data.limit, page);
        this.props.getAllHeroesListHero(page, this.props.data.limit);
      }
    }
  }

  render() {
    const {
      status,
      species,
      gender,
      searchBox,
    } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.search}>
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
        <div className={classes.card} onScroll={(e) => this.windowScroll(e)}>
          {this.props.data.allHeroesList.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
        {this.props.data ? '' : <p>End.</p>}
      </div>
    );
  }
}

MainPage.propTypes = {
  data: PropTypes.shape({
    limit: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    allHeroesListPage: PropTypes.number,
    allHeroesList: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  getAllHeroesListHero: PropTypes.func.isRequired,
  getFilterHeroesActions: PropTypes.func.isRequired,
  clearAllHeroList: PropTypes.func.isRequired,
  changeLimitAndPage: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    search: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(MainPage);
