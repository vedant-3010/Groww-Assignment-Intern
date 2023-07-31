// redux/reducers.js
import { combineReducers } from 'redux';
import newsFeedReducer from './newsFeedSlice';
import profileReducer from './profileSlice';

const rootReducer = combineReducers({
  newsFeed: newsFeedReducer,
  profile: profileReducer,

});

export default rootReducer;
