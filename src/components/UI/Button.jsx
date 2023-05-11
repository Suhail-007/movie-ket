import styles from './button.module.css';

export default function Button({ text, children, onClick, type}) {

  return (
    <button type={type} onClick={onClick} className={styles.cta}>
      {text && <span>{text}</span>}
      {children && <div>
        {children}
      </div> }
    </button>
  )
}