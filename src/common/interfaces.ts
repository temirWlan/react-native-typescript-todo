export interface IListItem {
	id: string;
}

export interface ITodo extends IListItem {
	title: string;
	isCompleted: boolean;
}

export interface ICategoryCard extends IListItem {
	category: string;
	completed: number;
	total: number;
}

export interface IInitialState {
	loading: boolean;
	error: boolean;
}

