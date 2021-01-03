import { createSelector } from 'reselect';

const getLimit = (state) => state.hero.limit;
const getAllHeroesList = (state) => state.hero.allHeroesList;
const getPage = (state) => state.hero.page;
const getAllHeroesListPage = (state) => state.hero.allHeroesListPage;

const itemsSelector = createSelector(
  getLimit,
  getAllHeroesList,
  getPage,
  getAllHeroesListPage,
  (limit, allHeroesList, page, allHeroesListPage) => ({
    limit,
    allHeroesList,
    page,
    allHeroesListPage,
  }),
);

export default itemsSelector;
