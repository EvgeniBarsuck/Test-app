import { createSelector } from 'reselect';

const getSelectedHero = (state) => state.hero.selectedHero;
const getLoadingStatus = (state) => state.hero.loading;

const resaultPageSelector = createSelector(
  getSelectedHero,
  getLoadingStatus,
  (selectedHero, loading) => ({
    selectedHero,
    loading,
  }),
);

export default resaultPageSelector;
