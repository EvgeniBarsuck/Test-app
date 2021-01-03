import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import mainSelector from '../Selectors/mainSelector';
import MainPage from '../Pages/Main/Main';
import {
  getAllHeroesListActions,
  clearAllHeroesList,
  changeLimitAndPage,
  getFilterHeroesActions,
} from '../Redux/Hero/actions';
import style from '../Style/mainStyle';

const mapStateToProps = (state) => ({
  data: mainSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllHeroesListHero: (page, limit) => dispatch(getAllHeroesListActions(page, limit)),
  clearAllHeroList: () => dispatch(clearAllHeroesList()),
  changeLimitAndPage: (limit, page) => dispatch(changeLimitAndPage(limit, page)),
  getFilterHeroesActions: (filter) => dispatch(getFilterHeroesActions(filter)),
});

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(MainPage));
