import { IInitialState, ICategoryCard } from '../../common/interfaces';
import {
	CARDS_REQUESTED,
	CARDS_LOADED,
	CARDS_REJECTED,
	CardsActionTypes
} from '../types';

interface IInitialState {
	cards: ICategoryCard[];
}

const initialState: IInitialState = {
	loading: true,
	cards: [],
	error: false
};

function cardsReducer(state = initialState, action: CardsActionTypes): IInitialState {
	switch (action.type) {
		case CARDS_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case CARDS_LOADED:
			return {
				...state,
				loading: true,
				cards: action.payload,
				error: false
			};
		case CARDS_REJECTED:
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