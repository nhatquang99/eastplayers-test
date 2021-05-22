import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/home' component={HomeScreen} exact />
					<Route path='/movies/:id' component={MovieScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
