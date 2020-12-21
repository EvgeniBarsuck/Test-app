import {
  REQUEST_HERO,
  REQUEST_ONE_HERO,
  REQUEST_FILTER_HERO,
  REQUEST_SEARCH_HERO,
} from './types';

export function getHeroActions(page) {
  return {
    type: REQUEST_HERO,
    page,
  };
}

export function getSelectedHeroActions(id, name) {
  return {
    type: REQUEST_ONE_HERO,
    id,
    name,
  };
}

export function getFilterHeroActions(name) {
  return {
    type: REQUEST_FILTER_HERO,
    name,
  };
}

export function getSelectedFilterHeroActions(page) {
  return {
    type: REQUEST_SEARCH_HERO,
    page,
  };
}

export default { getHeroActions };
