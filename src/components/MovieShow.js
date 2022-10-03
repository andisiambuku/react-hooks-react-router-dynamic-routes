import React from "react";
import { useParams } from "react-router";


function MovieShow({ movies }) {
    const params=useParams();

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;