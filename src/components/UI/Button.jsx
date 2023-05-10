import styles from './button.module.css';

export default function Button({ text, children, onClick, type}) {

  return (
    <button type={type} onClick={onClick} className={styles.cta}>
      <span>{text}</span>
      <div>
        {children}
      </div>
    </button>
  )
}