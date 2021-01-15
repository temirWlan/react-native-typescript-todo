import { ITodo } from '../../common/interfaces';
import {
	TODOS_REQUESTED,
	TODOS_LOADED,
	TODOS_REJECTED,
	TodosActionTypes
} from '../types';

export const todosRequested = (): TodosActionTypes => ({ type: TODOS_REQUESTED });
export const todosLoaded = (todos: ITodo[]): TodosActionTypes => ({ 
	type: TODOS_LOADED, 
	payload: todos 
});
export const todosRejected = (): TodosActionTypes => ({ type: TODOS_REJECTED });