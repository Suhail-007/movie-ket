import styles from './button.module.css';

export default function Button({ text, children, onClick }) {

  return (
    <button className={styles.cta} onClick={onClick}>
      <div>
        {children}
      </div>
      <span>{text}</span>
    </button>
  )
}