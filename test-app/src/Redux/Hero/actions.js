import {
  REQUEST_HERO,
  REQUEST_ONE_HERO,
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

export default { getHeroActions };
