import { IInitialState, ICategory } from '../../common/interfaces';
import {
	CATEGORIES_REQUESTED,
	CATEGORIES_LOADED,
	CATEGORIES_REJECTED,
	CategoryActionTypes
} from '../types';

interface ICategoryInitialState extends IInitialState {
	categories: ICategory[];
}

const initialState: ICategoryInitialState = {
	loading: true,
	categories: [],
	error: false
};

function cardsReducer(state = initialState, action: CategoryActionTypes): ICategoryInitialState {
	switch (action.type) {
		case CATEGORIES_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case CATEGORIES_LOADED:
			return {
				...state,
				loading: true,
				categories: action.payload,
				error: false
			};
		case CATEGORIES_REJECTED:
			return {
				...state,
				loading: false,
				error: true
			};
		default :
			return state;
	}
}

export default cardsReducer;