import { connect } from 'react-redux';
import mainSelector from '../Selectors/mainSelector';
import MainPage from '../Pages/Main/Main';
import {
  getAllHeroesListActions,
  clearAllHeroesList,
  changeLimitAndPage,
  getFilterHeroesActions,
} from '../Redux/Hero/actions';

const mapStateToProps = (state) => ({
  data: mainSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllHeroesListHero: (page, limit) => dispatch(getAllHeroesListActions(page, limit)),
  clearAllHeroList: () => dispatch(clearAllHeroesList()),
  changeLimitAndPage: (limit, page) => dispatch(changeLimitAndPage(limit, page)),
  getFilterHeroesActions: (filter) => dispatch(getFilterHeroesActions(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
