import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { getMovieList, getMovieListByKeyword } from '../actions/movieActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Movie from '../components/Movie'
import Paginate from '../components/Paginate'
import queryString from 'query-string';
import { MOVIE_DETAILS_RESET, MOVIE_LIST_RESET, MOVIE_REVIEWS_RESET } from '../constants/movieConstants'
import Categories from '../components/Categories'

export const HomeScreen = ({match, location}) => {
    const dispatch = useDispatch();
    const pageNumber = queryString.parse(location.search).page || 1;
    const section = queryString.parse(location.search).section || "popular"
    const keyword = queryString.parse(location.search).keyword;


    const movieList = useSelector((state) => state.movieList);
    const { loading, error, movies, page, pages } = movieList;

    useEffect(() => {
        dispatch({type: MOVIE_LIST_RESET});
        dispatch({type: MOVIE_DETAILS_RESET});
        dispatch({type: MOVIE_REVIEWS_RESET});
        window.scrollTo(0, 0)
        if (keyword) {
            console.log(pageNumber);
            console.log(keyword);
            dispatch(getMovieListByKeyword(pageNumber, keyword))
        } else {
            console.log(pageNumber);
            console.log(section);
            dispatch(getMovieList(pageNumber, section));
        }
    }, [dispatch, keyword, pageNumber, section])
    return (
        <>
            <Categories/>
            {/* {loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>) : ( */}
            {loading && <Loader/>}
            {error && (<Message variant='danger'>{error}</Message>)}    
            {movies && (<>
                <Row>
                    {movies.map(movie => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                            <Movie movie={movie}/>
                        </Col>
                    ))}
                </Row>
                <Paginate pages={pages} page={page} section={section} keyword={keyword}/>
            </>)}
        </>
    )
}

export default HomeScreen
