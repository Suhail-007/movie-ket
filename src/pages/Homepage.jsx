import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

import MoviesList from '../components/Movie/MoviesList';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function Homepage() {
  const { movies } = useLoaderData();

  return (
    <>
    <div className='input'>
      <Input placeholderText='Search your favourite movie...' type='search' />
      <Button type='button'>
        <BiSearchAlt />
      </Button>
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