import baseApi from "../apis/baseApi";
import { MOVIE_DETAILS_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_REVIEWS_FAIL, MOVIE_REVIEWS_REQUEST, MOVIE_REVIEWS_SUCCESS } from "../constants/movieConstants";

export const getMovieList = (page = 1, section = 'popular') => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST });

        const { data } = await baseApi.get(`/movies?page=${page}&section=${section}`);

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          });
    }
}

export const getMovieDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_DETAILS_REQUEST });

        const { data } = await baseApi.get(`/movies/${id}`);

        dispatch({
            type: MOVIE_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MOVIE_DETAILS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          });
    }
}

export const getMovieReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_REVIEWS_REQUEST });

        const { data } = await baseApi.get(`/movies/${id}/reviews`);

        dispatch({
            type: MOVIE_REVIEWS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MOVIE_REVIEWS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          });
    }
}

export const getMovieListByKeyword = (page = 1, keyword) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST });

        const { data } = await baseApi.get(`/movies/search?keyword=${keyword}&page=${page}`);

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          });
    }
}