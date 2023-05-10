import styles from './input.module.css';

export default function Input({ placeholderText, id, value, disabled }) {

  return <input disabled={disabled ? disabled : false} value={value} id={id} className={styles.input} type='text' placeholder={placeholderText} />
}