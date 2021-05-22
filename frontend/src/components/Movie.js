import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Movie = ({ movie }) => {
  return (
    <Card style={{border: 'none'}} className="my-3 p-3 rounded">
        <Link to={`/movies/${movie.id}`}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
        </Link>
        <Card.Body>
            <Link to={`/movies/${movie._id}`}>
                <Card.Title style={{textAlign: "center"}} as="div">
                    <strong>{movie.title}</strong>
                </Card.Title>
            </Link>
      </Card.Body>
    </Card>
  );
};

export default Movie
