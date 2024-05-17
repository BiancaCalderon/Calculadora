import { useState, useEffect, useCallback } from 'react';
import styles from '../styles/Home.module.css';
import Display from '../components/Display';
import Button from '../components/Button';

export default function Home() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState(0);
  const [clearDisplay, setClearDisplay] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const handleKeyDown = useCallback((event) => {
    const key = event.key;
    setActiveKey(key);
    if (!isNaN(key)) {
      handleButtonClick(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleOperationClick(key);
    } else if (key === '.') {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Escape') {
      clearDisplayValue();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (activeKey) {
      const timer = setTimeout(() => setActiveKey(null), 200);
      return () => clearTimeout(timer);
    }
  }, [activeKey]);

  const handleButtonClick = (value) => {
    if (clearDisplay) {
      setDisplayValue(value === '.' ? '0.' : value);
      setClearDisplay(false);
    } else {
      setDisplayValue(prevValue => {
        if (prevValue.length >= 9) return prevValue; // Restricción de 9 caracteres
        if (prevValue === '0' && value !== '.') return value;
        if (prevValue.includes('.') && value === '.') return prevValue;
        return prevValue + value;
      });
    }
  };

  const handleOperationClick = (value) => {
    setOperation(value);
    setPreviousValue(parseFloat(displayValue));
    setClearDisplay(true);
  };

  const calculateResult = () => {
    const currentValue = parseFloat(displayValue);
    let result = 0;
    switch (operation) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        if (currentValue === 0) {
          setDisplayValue('ERROR');
          return;
        }
        result = previousValue / currentValue;
        break;
      default:
        return;
    }
    if (result < 0 || result > 999999999) {
      setDisplayValue('ERROR');
    } else {
      setDisplayValue(result.toString().slice(0, 9)); // Limitar el resultado a 9 caracteres
    }
    setOperation('');
    setPreviousValue(0);
    setClearDisplay(true);
  };

  const clearDisplayValue = () => {
    setDisplayValue('0');
    setOperation('');
    setPreviousValue(0);
    setClearDisplay(false);
  };

  const getButtonLabel = (key) => {
    switch (key) {
      case '+':
        return '+';
      case '-':
        return '-';
      case '*':
        return '*';
      case '/':
        return '/';
      case 'Enter':
        return '=';
      case 'Escape':
        return 'C';
      default:
        return key;
    }
  };

  return (
    <div className={styles.container}>
      <Display value={displayValue} />
      <div className={styles.grid}>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((label) => (
          <Button
            key={label}
            onClick={() => {
              if (label === '=') {
                calculateResult();
              } else if (['+', '-', '*', '/'].includes(label)) {
                handleOperationClick(label);
              } else if (label === 'C') {
                clearDisplayValue();
              } else {
                handleButtonClick(label);
              }
            }}
            label={getButtonLabel(label)}
            active={activeKey === label || (label === '=' && activeKey === 'Enter')}
          />
        ))}
        <Button onClick={clearDisplayValue} label="C" active={activeKey === 'Escape'} />
      </div>
    </div>
  );
}
