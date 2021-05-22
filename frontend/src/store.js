import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieDetailsReducer, movieListReducer, movieReviewsReducer } from "./reducers/movieReducers";
import { menuButtonReducer } from "./reducers/buttonReducer";

const reducer = combineReducers({
	movieList: movieListReducer,
	movieDetails: movieDetailsReducer,
	movieReviews: movieReviewsReducer,
	menuButtons: menuButtonReducer,
});

const initialState = {
	movieList: {
		movies: [],
	},
	menuButtons: {
		buttons: {
			allMoviesButton: true,
			trendingButton: false,
			topRatedButton: false,
		},
	},
};
const middleWare = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
