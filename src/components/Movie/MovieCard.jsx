import { Link } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

import { BsTicketPerforated } from 'react-icons/bs';

import styles from './movie-card.module.css';

const MovieCard = function({ name, status, runtime, language, genres, summary, premiered, image, id, rating }) {

  // {
  //   "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg",
  //   "original": "https://static.tvmaze.com/uploads/images/original_untouched/33/82953.jpg"
  // }

  const formattedGenre = genres.map((genre, i) => {
    if (i === genres.length - 1) return <span key={uuid4()}> {genre}</span>
    return <span key={uuid4()}> {genre},</span>
  })

  return (
    <article className={styles.card}>
      <div className={styles.img__cont}> 
        <img loading='lazy' src={image?.medium} alt={name} />
      </div>
      
      <div className={styles.movie__info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.details}><span>Rating:</span> {rating.average}</p>
        <p className={styles.details}><span>Runtime:</span> {runtime}</p>
        <p className={styles.details}><span>Genres:</span> {formattedGenre} </p>
        <p className={styles.details}><span>Premiered:</span> {premiered} </p>
      </div>
      
      <Link className={styles.cta} to={`book-ticket/${id}`}>
        Book Ticket
        <BsTicketPerforated />
      </Link>
    </article>
  )
}

export default MovieCard