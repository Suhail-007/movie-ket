import styles from './button.module.css';

export default function Button({ text, children }) {

  return (
    <button className={styles.cta}>
      <span>{text}</span>
      <div>
        {children}
      </div>
    </button>
  )
}