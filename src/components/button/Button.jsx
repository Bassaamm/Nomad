import styles from "./Button.module.css";
export default function Button({ children, onClick, style }) {
  return (
    <button className={`${styles.btn} ${styles[style]}`} onClick={onClick}>
      {children}
    </button>
  );
}
