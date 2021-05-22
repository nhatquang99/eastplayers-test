import {
	MOVIE_DETAILS_FAIL,
	MOVIE_DETAILS_REQUEST,
	MOVIE_DETAILS_RESET,
	MOVIE_DETAILS_SUCCESS,
	MOVIE_LIST_FAIL,
	MOVIE_LIST_REQUEST,
	MOVIE_LIST_RESET,
	MOVIE_LIST_SUCCESS,
	MOVIE_REVIEWS_FAIL,
	MOVIE_REVIEWS_REQUEST,
	MOVIE_REVIEWS_RESET,
	MOVIE_REVIEWS_SUCCESS,
} from "../constants/movieConstants";

export const movieListReducer = (state = { movies: [] }, action) => {
	switch (action.type) {
		case MOVIE_LIST_REQUEST:
			return { ...state, loading: true };
		case MOVIE_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.payload.results,
				pages: action.payload.total_pages,
				page: action.payload.page,
			};
		case MOVIE_LIST_FAIL:
			return { ...state, loading: true, error: action.payload };
		case MOVIE_LIST_RESET:
			return {movies: []}
		default:
			return { ...state };
	}
};

export const movieDetailsReducer = (
	state = { movie: {} },
	action
  ) => {
	switch (action.type) {
	  case MOVIE_DETAILS_REQUEST:
		return { ...state, loading: true };
	  case MOVIE_DETAILS_SUCCESS:
		return { ...state, loading: false, movie: action.payload };
	  case MOVIE_DETAILS_FAIL:
		return { ...state, loading: false, error: action.payload };
	  case MOVIE_DETAILS_RESET:
		  return {movie: {}}
	  default:
		return state;
	}
  };

  export const movieReviewsReducer = (
	state = { reviews: [] },
	action
  ) => {
	switch (action.type) {
	  case MOVIE_REVIEWS_REQUEST:
		return { ...state, loading: true };
	  case MOVIE_REVIEWS_SUCCESS:
		return { ...state, loading: false, reviews: action.payload.results };
	  case MOVIE_REVIEWS_FAIL:
		return { ...state, loading: false, error: action.payload };
	  case MOVIE_REVIEWS_RESET:
		  return {reviews: []}
	  default:
		return state;
	}
  };
  
