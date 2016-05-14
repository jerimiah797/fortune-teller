import { combineReducers } from 'redux';
import eventFormReducer from './eventFormReducer.js';
import userReducer from './userReducer.js';
//import speakerReducer from './speakerReducer.js';


var rootReducer = combineReducers({
  eventForm: eventFormReducer,
  user: userReducer,
//  items: itemsReducer,
//  speaker: speakerReducer
})

export default rootReducer;
