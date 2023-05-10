import {Suspense} from 'react';
import {useLoaderData, defer, json, Await} from 'react-router-dom';

import MovieForm from '../components/Movie/MovieForm';

export default function BookForm() {
  const movie = useLoaderData();
  
  return <MovieForm {...movie} />
}

const loadData = async function() {
  try {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const allMovies = await res.json();

    const formattedMovies = allMovies.map(movie => {
      const { runtime, genres, id, name, language, premiered, status, summary, image, rating } = movie.show;
      return {
        rating,
        runtime,
        genres,
        id,
        name,
        language,
        premiered,
        status,
        summary,
        image
      }
    });
    return formattedMovies
  } catch (err) {
    console.log(err);
  }
}

export const loader = async function({ params }) {
  const allMovies = await loadData()
  const id = params.movieId;

  const filteredMovie = allMovies.find(movie => movie.id === +id);

  return filteredMovie;
}