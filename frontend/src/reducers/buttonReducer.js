import { ALL_MOVIES_BUTTON, RESET_BUTTON, TOP_RATED_BUTTON, TRENDING_BUTTON } from "../constants/buttonConstants";

export const menuButtonReducer = (state = {}, action) => {
	switch (action.type) {
		case ALL_MOVIES_BUTTON:
			return {...state, buttons: action.payload };
		case TRENDING_BUTTON:
			return {...state, buttons: action.payload };
		case TOP_RATED_BUTTON:
			return {...state, buttons: action.payload };
		case RESET_BUTTON:
			return {buttons: {}}
		default:
			return { ...state };
	}
};
