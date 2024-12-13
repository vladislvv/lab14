import React, { useState } from 'react';

function CartPage() {
  const [fruits, setFruits] = useState([]);
  const [fruitName, setFruitName] = useState('');

  const addFruit = () => {
    if (fruitName.trim() !== '') {
      setFruits((prevFruits) => [...prevFruits, { id: Date.now(), name: fruitName }]);
      setFruitName('');
    }
  };

  const removeFruit = (id) => {
    setFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));
  };


  return (
    <div style={styles.cartContainer}>
      <h2>Корзина с фруктами</h2>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Введите название фрукта"
      />
      <button onClick={addFruit} style={styles.addButton}>Добавить</button>


      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}
            <button onClick={() => removeFruit(fruit.id)} style={styles.removeButton}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}





const styles = {
  cartContainer: {
    padding: '20px',
    maxWidth: '600px',
    marginTop: '60px',
    textAlign: 'center',
  },
  addButton: {
    marginLeft: '10px',
  },
  removeButton: {
    marginLeft: '10px',
    backgroundColor: 'red',
    color: 'white',
  },
};

export default CartPage;
