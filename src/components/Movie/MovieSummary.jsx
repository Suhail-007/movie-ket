import styles from './movie-summary.module.css';

export default function MovieSummary({ image, name, rating, premiered, summary }) {
  return (
    <div className={styles.movie__summary}>
      <div className={styles.img__cont}>
        <img src={image?.medium} alt={name} />
      </div>
      
      <div className={styles.movie__info}> 
        <h3>{name}</h3>
        <p className={styles.details}>Rating: {rating.average}</p>
        <p className={styles.details}>Premiere: {premiered}</p>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  )
}