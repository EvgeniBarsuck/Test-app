import {
  GET_HERO_START,
  GET_HERO_SUCCESS,
  GET_HERO_FAILURE,
  GET_ONE_HERO_START,
  GET_ONE_HERO_SUCCESS,
  GET_ONE_HERO_FAILURE,
} from './types';

const initialState = {
  hero: [],
  oneHero: {},
  nextPage: 2,
  nextPageSeacrh: null,
  loading: true,
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_START: return {
      ...state,
      loading: true,
    };
    case GET_HERO_SUCCESS: return {
      ...state,
      hero: state.hero.concat(action.payload.results),
      nextPage: action.payload.info.next,
      loading: false,
    };
    case GET_HERO_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    case GET_ONE_HERO_START: return {
      ...state,
      loading: true,
    };
    case GET_ONE_HERO_SUCCESS: return {
      ...state,
      oneHero: action.payload,
      loading: false,
    };
    case GET_ONE_HERO_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    };
    default: return state;
  }
};

export default { heroReducer };
