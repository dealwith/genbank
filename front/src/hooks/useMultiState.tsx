import { useReducer } from 'react';


export const useMultiState = initialState => {
	const [state, setState] =  useReducer((state, newState) => ({ ...state, ...newState }), initialState);

	return [state, setState];
}
