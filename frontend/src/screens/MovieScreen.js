import React, { useEffect } from "react";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { getMovieDetails, getMovieReviews } from "../actions/movieActions";

const MovieScreen = ({ match, history }) => {
	const dispatch = useDispatch();

	const movieDetails = useSelector((state) => state.movieDetails);
	const { loading, error, movie } = movieDetails;

	const movieReviews = useSelector((state) => state.movieReviews);
	const {
		loading: loadingReviews,
		error: errorReviews,
		reviews,
	} = movieReviews;

	useEffect(() => {
		window.scrollTo(0, 0)
		document.body.setAttribute(
			"style",
			`background: linear-gradient(to bottom, #c9c9c9 100%, white) no-repeat;
       background-size: 100% 280px!important;`
		);

		if (!movie.id || movie.id !== match.params.id) {
			dispatch(getMovieDetails(match.params.id));
			dispatch(getMovieReviews(match.params.id));
		}

		return () => {
			document.body.setAttribute("style", `background: none`);
		};
	}, [dispatch, match.params.id, movie.id]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<Row className='mt-5'>
						<Col md={3}>
							<Image
								src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
								alt={movie.title}
								fluid
							/>
						</Col>
						<Col style={{ marginTop: "100px" }} md={9}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									{movie.genres
										? movie.genres.map((genre) => (
												<Button
													style={{
														borderRadius: "15px",
													}}
													className='mr-3'
													disabled
													variant='outline-primary'
													size='sm'>
													{genre.name}
												</Button>
										  ))
										: ""}
								</ListGroup.Item>
								<ListGroup.Item>
									<h3>{movie.title}</h3>
								</ListGroup.Item>
								<ListGroup>
									<Row>
										<ListGroup.Item
											style={{ border: "none" }}>
											<Col>{movie.release_date}</Col>
										</ListGroup.Item>

										<ListGroup.Item
											style={{ border: "none" }}>
											<Col>
												<span>
													<i
														style={{
															color: "#f8e825",
														}}
														className='fas fa-star'
													/>
												</span>
												{movie.vote_average} / 10 (
												{movie.vote_count})
											</Col>
										</ListGroup.Item>

										<ListGroup.Item
											style={{ border: "none" }}>
											<Col>
												{Math.floor(movie.runtime / 60)}{" "}
												hours {movie.runtime % 60}{" "}
												minutes
											</Col>
										</ListGroup.Item>

										<ListGroup.Item
											style={{ border: "none" }}>
											<Col>{movie.status}</Col>
										</ListGroup.Item>
									</Row>
								</ListGroup>
								<ListGroup.Item>
									{movie.overview}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row className='mt-5'>
						<Col md={12}>
							<h2>Reviews</h2>
							{loadingReviews && <Loader />}
							{errorReviews && (
								<Message variant='danger'>{error}</Message>
							)}
							{reviews.length === 0 && (
								<Message>No Reviews</Message>
							)}
							<ListGroup variant='flush'>
								{reviews
									? reviews.map((review) => (
											<ListGroup.Item key={review.id}>
												<p
													style={{
														fontWeight: "bold",
													}}>
													{
														review.author_details
															.username
													}{" "}
													(
													{review.created_at.substring(
														0,
														10
													)}
													)
												</p>
												<p style={{
														fontWeight: "bolder",
													}}>
													Score:{" "}
													{review.author_details
														.rating
														? review.author_details
																.rating
														: "Unrated"}{" "}
												</p >

												<p className='mt-2'>{review.content}</p>
											</ListGroup.Item>
									  ))
									: ""}
							</ListGroup>
						</Col>
					</Row>
				</div>
			)}
		</>
	);
};

export default MovieScreen;
