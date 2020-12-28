import { createSelector } from 'reselect';

const getFilterHeroes = (state) => state.hero.filterHeroes;

const resaultPageSelector = createSelector(
  getFilterHeroes,
  (filterHeroes) => filterHeroes,
);

export default resaultPageSelector;
