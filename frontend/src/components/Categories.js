import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { allMoviesButtonClicked, topRatedButtonClicked, trendingButtonClicked } from "../actions/buttonActions";

const Categories = () => {
	const dispatch = useDispatch();

	const menuButtons = useSelector((state) => state.menuButtons);
	const { allMoviesButton, trendingButton, topRatedButton } = menuButtons.buttons;


	return (
		<>
			<ButtonGroup>
				<LinkContainer to='/home?page=1&section=popular'>
					<Button
						onClick={() => {
							dispatch(allMoviesButtonClicked());
						}}
						style={{ borderRadius: "15px" }}
						className={`mr-2 ${allMoviesButton ? "disabled" : ""}`}
						variant={`${allMoviesButton ? "primary" : "outline-primary"}`}
						size='sm'>
						All Movies
					</Button>
				</LinkContainer>
				
				<LinkContainer to='/home?page=1&section=now_playing'>
					<Button
						onClick={() => {
							dispatch(trendingButtonClicked());
						}}
						style={{ borderRadius: "15px" }}
						className={`mr-2 ${trendingButton ? "disabled" : ""}`}
						variant={`${trendingButton ? "primary" : "outline-primary"}`}
						size='sm'>
						Trending
					</Button>
				</LinkContainer>
				
				<LinkContainer to='/home?page=1&section=top_rated'>
					<Button
						onClick={() => {
							dispatch(topRatedButtonClicked());
						}}
						style={{ borderRadius: "15px" }}
						className={`mr-2 ${topRatedButton ? "disabled" : ""}`}
						variant={`${topRatedButton ? "primary" : "outline-primary"}`}
						size='sm'>
						Top 100
					</Button>
				</LinkContainer>

			</ButtonGroup>
		</>
	);
};

export default Categories;
