import MovieCard from './MovieCard';

import styles from './movies-list.module.css';

export default function MovieList({ movies }) {

  return (
    <section className={styles.moviesCont}>
      <ul>
        {movies.map(movie => <li key={movie.id}><MovieCard {...movie} /></li>)}
      </ul>
    </section>
  )
}