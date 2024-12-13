import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Главная</Link>
      <a href="#registration" style={styles.link}>Регистрация</a>
      <a href="#comments" style={styles.link}>Отзывы</a>
      <a href="#contacts" style={styles.link}>Контакты</a>
      <Link to="/calculate" style={styles.link}>Калькулятор</Link>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    zIndex: 1000,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 15px',
    transition: 'background-color 0.3s',
  },
};

export default NavigationMenu;
