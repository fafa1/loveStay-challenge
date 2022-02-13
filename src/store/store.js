import { createStore, combineReducers } from 'redux';
import { InformationUser } from './informationUser/Information.reducers'


const rootReducer = combineReducers({
  information: InformationUser,
});

const store = createStore(rootReducer);

export default store;