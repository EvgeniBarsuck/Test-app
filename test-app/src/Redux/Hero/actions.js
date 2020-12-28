import {
  REQUEST_HEROES,
  REQUEST_SELECTED_HERO,
  REQUEST_SEARCH_BOX_HINTS,
  REQUEST_FILTER_HEROES,
  CLEAR_ALL_HEROES_LIST,
  CHANGE_LIMIT_AND_PAGE,
} from './const';

export function getAllHeroesListActions(page, limit) {
  return {
    type: REQUEST_HEROES,
    page,
    limit,
  };
}

export function clearAllHeroesList() {
  return {
    type: CLEAR_ALL_HEROES_LIST,
  };
}

export function changeLimitAndPage(limit, page) {
  return {
    type: CHANGE_LIMIT_AND_PAGE,
    payload: {
      limit,
      page,
    },
  };
}

export function getSelectedHeroActions(id) {
  return {
    type: REQUEST_SELECTED_HERO,
    id,
  };
}

export function getSearchBoxHintsActions(filter) {
  return {
    type: REQUEST_SEARCH_BOX_HINTS,
    filter,
  };
}

export function getFilterHeroesActions(filter) {
  return {
    type: REQUEST_FILTER_HEROES,
    filter,
  };
}
