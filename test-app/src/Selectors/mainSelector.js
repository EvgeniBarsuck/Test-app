import { createSelector } from 'reselect';

const getLimit = (state) => state.hero.limit;
const getAllHeroesList = (state) => state.hero.allHeroesList;
const getPage = (state) => state.hero.page;

const itemsSelector = createSelector(
  getLimit,
  getAllHeroesList,
  getPage,
  (limit, allHeroesList, page) => ({
    limit,
    allHeroesList,
    page,
  }),
);

export default itemsSelector;
