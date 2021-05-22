const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require('cors');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
dotenv.config();

app.use(cors());
app.options("*", cors());

const PORT = process.env.PORT || 5000;

app.get("/api/movies", async (req, res) => {

	const page = Number(req.query.page);
	const section = req.query.section || 'popular'

	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${section}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
	);

    res.json(response.data);
});

app.get("/api/movies/search", async (req, res) => {
	const keyword = req.query.keyword;
	const page = Number(req.query.page);

	const response = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${keyword}&language=en-US&page=${page}&include_adult=false`
	);

    res.json(response.data);
});

app.get("/api/movies/:id", async (req, res) => {

	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
	);

    res.json(response.data);
});

app.get("/api/movies/:id/reviews", async (req, res) => {

	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${req.params.id}/reviews?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
	);

    res.json(response.data);
});


app.use(notFound);
app.use(errorHandler);

app.listen(
	PORT,
	console.log(`Connected in ${process.env.NODE_ENV} to port ${PORT}`)
);
