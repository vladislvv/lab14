import React, { useState } from 'react';

function CartPage() {
  const [fruits, setFruits] = useState([]);
  const [fruitName, setFruitName] = useState('');
  const [fruitPrice, setFruitPrice] = useState('');
  const [calcResult, setCalcResult] = useState(0);

  const handleAddFruit = () => {
    if (fruitName.trim() !== '' && fruitPrice.trim() !== '') {
      const existingFruit = fruits.find((fruit) => fruit.name === fruitName);
      if (existingFruit) {
        
        setFruits((prevFruits) =>
          prevFruits.map((fruit) =>
            fruit.name === fruitName
              ? { ...fruit, quantity: fruit.quantity + 1 }
              : fruit
          )
        );
      } else {
        
        setFruits((prevFruits) => [
          ...prevFruits,
          { name: fruitName, price: parseFloat(fruitPrice), quantity: 1 },
        ]);
      }

      setFruitName('');
      setFruitPrice('');
    }
  };

  const handleCalculate = () => {
    
    const total = fruits.reduce((acc, fruit) => {
      return acc + fruit.price * fruit.quantity;
    }, 0);
    setCalcResult(total);
  };

  const handleClear = () => {
    setFruits([]);
    setCalcResult(0);
  };

  return (
    <div style={styles.container}>
      <h2>Корзина с фруктами</h2>
      
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Введите название фрукта"
      />
      <input
        type="number"
        value={fruitPrice}
        onChange={(e) => setFruitPrice(e.target.value)}
        placeholder="Введите цену фрукта"
      />
      <button onClick={handleAddFruit} style={styles.addButton}>
        Добавить фрукт
      </button>

      <h3>Список фруктов в корзине:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} (x{fruit.quantity}) - {fruit.price} руб.
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleCalculate} style={styles.calcButton}>
          Рассчитать общую стоимость
        </button>
        <button onClick={handleClear} style={styles.clearButton}>
          Очистить корзину
        </button>
      </div>

      <h3>Общая стоимость: {calcResult} руб.</h3>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    marginTop:'60px',
  },
  addButton: {
    marginTop: '10px',
    marginLeft: '10px',
  },
  calcButton: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  clearButton: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartPage;
