import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

import MoviesList from '../components/Movie/MoviesList';

export default function Homepage() {
  const { movies } = useLoaderData();

  return (
    <>
    <div>
      <input type='search' placeholder='Search your favourite movie...' />
      <button>
        <BiSearchAlt />
      </button>
    </div>
    <Suspense fallback={<p> Loading... </p>}>
      <Await resolve={movies}>
      {loadData => <MoviesList movies={loadData} /> }
      </Await>
    </Suspense>
    </>
  )
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

export async function loader() {
  // return await loadData()
  const movies = await loadData()
  return defer({
    movies,
  })
}