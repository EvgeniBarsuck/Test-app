import { createSelector } from 'reselect';

const getFilterHeroes = (state) => state.hero.filterHeroes;
const getFilterHeroesPageCount = (state) => state.hero.filterHeroesPageCount;
const getFilterPage = (state) => state.hero.filterPage;

const resaultPageSelector = createSelector(
  getFilterHeroes,
  getFilterHeroesPageCount,
  getFilterPage,
  (filterHeroes) => filterHeroes,
);

export default resaultPageSelector;
