import {
	ALL_MOVIES_BUTTON,
	TOP_RATED_BUTTON,
	TRENDING_BUTTON,
} from "../constants/buttonConstants";
import { MOVIE_LIST_RESET } from "../constants/movieConstants";
import { getMovieList } from "./movieActions";


export const allMoviesButtonClicked = () => async (dispatch) => {
		dispatch({
			type: ALL_MOVIES_BUTTON,
			payload: {
				allMoviesButton: true,
				trendingButton: false,
				topRatedButton: false,
			},
		});

		dispatch({
      type: MOVIE_LIST_RESET
    });
};

export const trendingButtonClicked = () => async (dispatch) => {
  dispatch({
		type: TRENDING_BUTTON,
		payload: {
			allMoviesButton: false,
			trendingButton: true,
			topRatedButton: false,
		}
  });

  dispatch({
    type: MOVIE_LIST_RESET
  });

};

export const topRatedButtonClicked = () => async (dispatch) => {
  dispatch({
    type: TOP_RATED_BUTTON,
		payload: {
			allMoviesButton: false,
			trendingButton: false,
			topRatedButton: true,
    },
  });

  dispatch({
    type: MOVIE_LIST_RESET
  });
};
