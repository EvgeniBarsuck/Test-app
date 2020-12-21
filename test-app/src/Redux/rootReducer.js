import { combineReducers } from 'redux';
import { heroReducer } from './Hero/reducer';

const rootReducer = combineReducers({
  hero: heroReducer,
});

export default rootReducer;
