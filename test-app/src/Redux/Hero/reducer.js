import {
  GET_ALL_HEROES_LIST_START,
  GET_ALL_HEROES_LIST_SUCCESS,
  GET_ALL_HEROES_LIST_FAILURE,
  GET_SELECTED_HERO_START,
  GET_SELECTED_HERO_SUCCESS,
  GET_SELECTED_HERO_FAILURE,
  GET_SEARCH_BOX_HINTS_START,
  GET_SEARCH_BOX_HINTS_SUCCESS,
  GET_SEARCH_BOX_HINTS_FAILURE,
  GET_FILTER_HEROES_START,
  GET_FILTER_HEROES_SUCCESS,
  GET_FILTER_HEROES_FAILURE,
  CLEAR_ALL_HEROES_LIST,
  CHANGE_LIMIT_AND_PAGE,
} from './const';

const initialState = {
  allHeroesList: [],
  page: 1,
  allHeroesListPage: 1,
  limit: 25,
  selectedHero: {},
  searchBoxHints: [],
  filterHeroes: [],
  filterHeroesPageCount: 1,
  filterPage: 1,
  loading: true,
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    // Work with all heroes
    case GET_ALL_HEROES_LIST_START: return {
      ...state,
      loading: true,
    };
    case GET_ALL_HEROES_LIST_SUCCESS: return {
      ...state,
      allHeroesList: state.allHeroesList.concat(action.payload),
      allHeroesListPage: action.allHeroesListPage,
      loading: false,
    };
    case GET_ALL_HEROES_LIST_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    case CLEAR_ALL_HEROES_LIST: return {
      ...state,
      allHeroesList: [],
      page: 1,
    };
    case CHANGE_LIMIT_AND_PAGE: return {
      ...state,
      page: action.payload.page,
      limit: action.payload.limit,
    };
    // work with resault page and selected hero
    case GET_SELECTED_HERO_START: return {
      ...state,
      loading: true,
    };
    case GET_SELECTED_HERO_SUCCESS: return {
      ...state,
      selectedHero: action.payload,
      loading: false,
    };
    case GET_SELECTED_HERO_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    // work with searchBox
    case GET_SEARCH_BOX_HINTS_START: return {
      ...state,
      loading: true,
    };
    case GET_SEARCH_BOX_HINTS_SUCCESS: return {
      ...state,
      searchBoxHints: action.payload,
      loading: false,
    };
    case GET_SEARCH_BOX_HINTS_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    // work with resault page
    case GET_FILTER_HEROES_START: return {
      ...state,
      loading: true,
    };
    case GET_FILTER_HEROES_SUCCESS: return {
      ...state,
      filterHeroes: action.payload,
      filterHeroesPageCount: action.filterHeroesPageCount,
      loading: false,
    };
    case GET_FILTER_HEROES_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    default: return state;
  }
};

export default { heroReducer };
