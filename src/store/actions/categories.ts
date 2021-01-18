import { Dispatch } from 'redux';

import { ICategory } from '../../common/interfaces';
import {
	CATEGORIES_REQUESTED,
	CATEGORIES_LOADED,
	CATEGORIES_REJECTED,
	CategoryActionTypes
} from '../types';


export const cardsRequested = (): CategoryActionTypes => ({ type: CATEGORIES_REQUESTED });
export const cardsLoaded = (cards: ICategory[]): CategoryActionTypes => ({ 
	type: CATEGORIES_LOADED, 
	payload: cards 
});
export const cardsRejected = (): CategoryActionTypes => ({ type: CATEGORIES_REJECTED });
// export const uploadCards = (dispatch: Dispatch) => {
	
// };