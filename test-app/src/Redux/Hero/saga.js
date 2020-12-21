import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_HERO_START,
  GET_HERO_SUCCESS,
  GET_HERO_FAILURE,
  GET_ONE_HERO_START,
  GET_ONE_HERO_SUCCESS,
  GET_ONE_HERO_FAILURE,
  REQUEST_HERO,
  REQUEST_ONE_HERO,
} from './types';

async function fetchHero(page) {
  const response = await axios.get(page);
  return response;
}

async function fetchOneHero(id = null, name = null) {
  if (id) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response;
  }
  if (name) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return response;
  }
  return null;
}

function* sagaOneHeroWorker(action) {
  try {
    yield put({ type: GET_ONE_HERO_START });
    const payloads = yield call(fetchOneHero, action.id, action.name);
    yield put({ type: GET_ONE_HERO_SUCCESS, payload: payloads.data });
  } catch (e) {
    yield put({ type: GET_ONE_HERO_FAILURE, payload: e });
  }
}

function* sagaHeroWorker(action) {
  try {
    yield put({ type: GET_HERO_START });
    const payloads = yield call(fetchHero, action.page);
    yield put({ type: GET_HERO_SUCCESS, payload: payloads.data });
  } catch (e) {
    yield put({ type: GET_HERO_FAILURE, payload: e });
  }
}

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_HERO, sagaHeroWorker);
  yield takeEvery(REQUEST_ONE_HERO, sagaOneHeroWorker);
}
