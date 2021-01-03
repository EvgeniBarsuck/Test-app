import { createSelector } from 'reselect';

const getFilterHeroes = (state) => state.hero.filterHeroes;
const getFilterHeroesPageCount = (state) => state.hero.filterHeroesPageCount;
const getPageLimit = (state) => state.hero.limit;

const resaultPageSelector = createSelector(
  getFilterHeroes,
  getFilterHeroesPageCount,
  getPageLimit,
  (filterHeroes, filterHeroesPageCount, pageLimit) => ({
    filterHeroes,
    filterHeroesPageCount,
    pageLimit,
  }),
);

export default resaultPageSelector;
