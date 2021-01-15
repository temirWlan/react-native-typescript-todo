import { ICategoryCard } from '../../common/interfaces';

export const CARDS_REQUESTED = 'CARDS_REQUESTED';
export const CARDS_LOADED = 'CARDS_LOADED';
export const CARDS_REJECTED = 'CARDS_REJECTED';

interface ICardsRequestedAction {
	type: typeof CARDS_REQUESTED;
}

interface ICardsLoadedAction {
	type: typeof CARDS_LOADED;
	payload: ITodo[];
}

interface ICardsRejectedAction {
	type: typeof CARDS_REJECTED;
}	

export type CardsActionTypes = ICardsRequestedAction | ICardsLoadedAction | ICardsRejectedAction;
