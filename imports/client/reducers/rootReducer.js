import { combineReducers } from 'redux';
import tempReducer from './tempReducer.js';
//import userReducer from './userReducer.js';
//import speakerReducer from './speakerReducer.js';


var rootReducer = combineReducers({
  temp: tempReducer,
//  items: itemsReducer,
//  speaker: speakerReducer
})

export default rootReducer;
