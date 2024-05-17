import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Display from '../components/Display';
import Button from '../components/Button';

export default function Home() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState(0);
  const [clearDisplay, setClearDisplay] = useState(false);

  const handleKeyDown = (event) => {
    const key = event.key;
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
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleButtonClick = (value) => {
    if (clearDisplay) {
      setDisplayValue(value === '.' ? '0.' : value);
      setClearDisplay(false);
    } else {
      setDisplayValue(prevValue => {
        if (prevValue === '0' && value !== '.') return value;
        else if (prevValue.includes('.') && value === '.') return prevValue;
        else return prevValue + value;
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
      setDisplayValue(result.toString());
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

  return (
    <div className={styles.container}>
      <Display value={displayValue} />
      <div className={styles.grid}>
        <Button onClick={() => handleButtonClick('1')} label="1" />
        <Button onClick={() => handleButtonClick('2')} label="2" />
        <Button onClick={() => handleButtonClick('3')} label="3" />
        <Button onClick={() => handleOperationClick('+')} label="+" />
        <Button onClick={() => handleButtonClick('4')} label="4" />
        <Button onClick={() => handleButtonClick('5')} label="5" />
        <Button onClick={() => handleButtonClick('6')} label="6" />
        <Button onClick={() => handleOperationClick('-')} label="-" />
        <Button onClick={() => handleButtonClick('7')} label="7" />
        <Button onClick={() => handleButtonClick('8')} label="8" />
        <Button onClick={() => handleButtonClick('9')} label="9" />
        <Button onClick={() => handleOperationClick('*')} label="*" />
        <Button onClick={() => handleButtonClick('0')} label="0" />
        <Button onClick={() => handleButtonClick('.')} label="." />
        <Button onClick={calculateResult} label="=" />
        <Button onClick={() => handleOperationClick('/')} label="/" />
        <Button onClick={clearDisplayValue} label="C" />
      </div>
    </div>
  );
}
