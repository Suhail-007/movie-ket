import { BsArrowRight } from 'react-icons/bs';
import Input from '../UI/Input';
import Button from '../UI/Button';

import styles from './movie-form.module.css'

const onSubmitHandler = function(e) {
  e.preventDefault();
}

export default function MovieForm({ rating, name, premiered, summary, image }) {

  return (
    <section className={styles.book__movie}>
      <h2>Book your favorite movie</h2>
      
      <div className={styles.movie__summary}>
        <div className={styles.img__cont}>
          <img src={image?.medium} alt={name} />
        </div>
        
        <div className={styles.movie__info}> 
          <h3>{name}</h3>
          <p>Rating: {rating.average}</p>
          <p>Primere: {premiered}</p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </div>
      
      <form onSubmit={onSubmitHandler} className={styles.book__form}>
        <div>
          <label name="movieName" htmlFor='movieName' >Movie Name:</label>
          <Input disabled={true} value={name} placeholderText='Movie name' id='movieName' />
        </div>
        
        <div>
          <label name="username" htmlFor='username' >Name:</label>
          <Input placeholderText='Enter your fullname' id='name' />
        </div>
        <div>
          <label name='age' htmlFor='age'>Age</label>
          <Input placeholderText='19' id='age' />
        </div>
        <div>
          <label name='email' htmlFor='email'>Email:</label>
          <Input id='email' placeholderText='johndoe@example.com' />
        </div>
        <div>
          <label name='tickets' htmlFor='tickets'>Tickets:</label>
          <Input id='tickets' placeholderText='01' />
        </div>
        
        <Button text='Book Tickets'>
          <BsArrowRight />
        </Button>
      </form>
    </section>
  )
}