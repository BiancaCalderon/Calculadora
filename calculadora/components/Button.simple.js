// components/Button.simple.js
const Button = ({ onClick, label, active }) => {
  return (
    <button
      className={`button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
