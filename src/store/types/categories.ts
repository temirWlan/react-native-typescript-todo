import { ICategory } from '../../common/interfaces';

export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const CATEGORIES_REJECTED = 'CATEGORIES_REJECTED';

interface ICategoriesRequestedAction {
	type: typeof CATEGORIES_REQUESTED;
}

interface ICategoriesLoadedAction {
	type: typeof CATEGORIES_LOADED;
	payload: ICategory[];
}

interface ICategoriesRejectedAction {
	type: typeof CATEGORIES_REJECTED;
}	

export type CategoryActionTypes = ICategoriesRequestedAction | ICategoriesLoadedAction | ICategoriesRejectedAction;
