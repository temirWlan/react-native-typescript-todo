import { ITodo } from '../../common/interfaces';

export const TODOS_REQUESTED = 'TODOS_REQUESTED';
export const TODOS_LOADED = 'TODOS_LOADED';
export const TODOS_REJECTED = 'TODOS_REJECTED';

interface ITodosRequestedAction {
	type: typeof TODOS_REQUESTED;
}

interface ITodosLoadedAction {
	type: typeof TODOS_LOADED;
	payload: ITodo[];
}

interface ITodosRejectedAction {
	type: typeof TODOS_REJECTED;
}	

export type TodosActionTypes = ITodosRequestedAction | ITodosLoadedAction | ITodosRejectedAction;
