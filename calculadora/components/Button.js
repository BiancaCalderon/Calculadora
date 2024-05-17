import styles from '../styles/Button.module.css';

const Button = ({ onClick, label, active }) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
