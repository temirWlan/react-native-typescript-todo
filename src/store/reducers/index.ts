import { combineReducers } from 'redux'

import categoriesReducer from './categoriesReducer';
import todosReducer from './todosReducer';

export default combineReducers({
	categories: categoriesReducer,
	todos: todosReducer
});
