import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import MovieSummary from './MovieSummary';
import Input from '../UI/Input';
import Button from '../UI/Button';

import styles from './movie-form.module.css'

export default function MovieForm({ rating, name, premiered, summary, image }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const navigation = useNavigation();

  const onSubmitHandler = function(e) {
    e.preventDefault();
    setIsSubmitting(true);
  }

  const onCancelHandler = function() {
    navigate('..');
  }

  return (
    <section className={styles.book__movie}>
      <h2>Book your favorite movie</h2>
      
      <MovieSummary name={name} premiered={premiered} image={image} summary={summary} rating={rating} />
      
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
        <div className={styles.btns}>
          <Button onClick={onCancelHandler} type='button' text='Cancel' />
          <Button text={!isSubmitting ? 'Book Ticket' : 'Submitting...'}>
            {!isSubmitting && <BsArrowRight /> }
          </Button>
        </div>
      </form>
    </section>
  )
}