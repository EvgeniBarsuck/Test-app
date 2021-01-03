import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
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
  REQUEST_HEROES,
  REQUEST_SELECTED_HERO,
  REQUEST_SEARCH_BOX_HINTS,
  REQUEST_FILTER_HEROES,
} from './const';

async function fetchAllHeroList(page, limit) {
  const response = await axios.get(`http://localhost:5000/api/hero/?page=${page}&limit=${limit}`);

  return response;
}

async function fetchSelectedHero(id) {
  const response = await axios.get(`http://localhost:5000/api/hero/${id}`);

  return response;
}

async function fetchHeroesWithFilter(filter) {
  const page = filter.page || 1;
  const searchBox = filter.searchBox || '';
  const status = filter.status || '';
  const species = filter.species || '';
  const gender = filter.gender || '';

  const response = await axios.get(`http://localhost:5000/api/hero/?page=${page}&limit=100&name=${searchBox}&status=${status}&species=${species}&gender=${gender}&isFilter=true`);

  return response;
}

function* filterHeroesWorkerSaga(action) {
  try {
    yield put({ type: GET_FILTER_HEROES_START });
    const payloads = yield call(fetchHeroesWithFilter, action.filter);
    yield put({
      type: GET_FILTER_HEROES_SUCCESS,
      payload: payloads.data.resault,
      filterHeroesPageCount: payloads.data.countPage,
    });
  } catch (e) {
    yield put({ type: GET_FILTER_HEROES_FAILURE, payload: e });
  }
}

function* selectedHeroWorkerSaga(action) {
  try {
    yield put({ type: GET_SELECTED_HERO_START });
    const payloads = yield call(fetchSelectedHero, action.id);
    yield put({ type: GET_SELECTED_HERO_SUCCESS, payload: payloads.data });
  } catch (e) {
    yield put({ type: GET_SELECTED_HERO_FAILURE, payload: e });
  }
}

function* searchBoxHintsWorkerSaga(action) {
  try {
    yield put({ type: GET_SEARCH_BOX_HINTS_START });
    const payloads = yield call(fetchHeroesWithFilter, action.filter);
    yield put({ type: GET_SEARCH_BOX_HINTS_SUCCESS, payload: payloads.data.resault });
  } catch (e) {
    yield put({ type: GET_SEARCH_BOX_HINTS_FAILURE, payload: e });
  }
}

function* getAllHeroesListSaga(action) {
  try {
    yield put({ type: GET_ALL_HEROES_LIST_START });
    const payloads = yield call(fetchAllHeroList, action.page, action.limit);
    yield put({
      type: GET_ALL_HEROES_LIST_SUCCESS,
      payload: payloads.data.resault,
      allHeroesListPage: payloads.data.countPage,
    });
  } catch (e) {
    yield put({ type: GET_ALL_HEROES_LIST_FAILURE, payload: e });
  }
}

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_HEROES, getAllHeroesListSaga);
  yield takeEvery(REQUEST_SELECTED_HERO, selectedHeroWorkerSaga);
  yield takeEvery(REQUEST_SEARCH_BOX_HINTS, searchBoxHintsWorkerSaga);
  yield takeEvery(REQUEST_FILTER_HEROES, filterHeroesWorkerSaga);
}
