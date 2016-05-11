import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
const logger = createLogger();


const finalCreateStore = applyMiddleware(ReduxThunk, logger)(createStore);

const Store = finalCreateStore(rootReducer);

export default Store;
