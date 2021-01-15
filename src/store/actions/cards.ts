import { Dispatch } from 'redux';

import { ICategoryCard } from '../../common/interfaces';
import {
	CARDS_REQUESTED,
	CARDS_LOADED,
	CARDS_REJECTED,
	CardsActionTypes
} from '../types';


export const cardsRequested = (): CardsActionTypes => ({ type: CARDS_REQUESTED });
export const cardsLoaded = (cards: ICategoryCard[]): CardsActionTypes => ({ 
	type: CARDS_LOADED, 
	payload: cards 
});
export const cardsRejected = (): CardsActionTypes => ({ type: CARDS_REJECTED });
// export const uploadCards = (dispatch: Dispatch) => {
	
// };