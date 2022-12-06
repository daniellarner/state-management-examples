// import { combineReducers} from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import CountReducer from './reducers/countReducer';
 
// const rootReducer = combineReducers({
//   count: CountReducer,
// });
 
// const store = configureStore({
//   rootReducer,
// });

// export default store;
import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
});
 
export const store = createStore(rootReducer);