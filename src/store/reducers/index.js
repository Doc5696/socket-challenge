import { combineReducers } from 'redux';
import messageReducer from './message.reducer'


const reducers = combineReducers({
  message: messageReducer,
});

export default reducers;
