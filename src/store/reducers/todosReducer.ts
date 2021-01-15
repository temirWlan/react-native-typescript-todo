import { IInitialState, ITodo } from '../../common/interfaces';
import {
	TODOS_REQUESTED,
	TODOS_LOADED,
	TODOS_REJECTED,
	TodosActionTypes
} from '../types';

interface IInitialState {
	todos: ITodo[];
}

const initialState: IInitialState = {
	loading: true,
	todos: [],
	error: false
};

function todosReducer(state = initialState, action: TodosActionTypes): IInitialState {
	switch (action.type) {
		case TODOS_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case TODOS_LOADED:
			return {
				...state,
				loading: true,
				todos: action.payload,
				error: false
			};
		case TODOS_REJECTED:
			return {
				...state,
				loading: false,
				error: true
			};
		default :
			return state;
	}
}

export default todosReducer;