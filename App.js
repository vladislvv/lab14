import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRegistrationModal from './components/UserRegistrationModal';
import NavigationMenu from './components/NavigationMenu';
import ContactsSection from './components/ContactsSection';
import Formarea from './components/Formarea';
import deleteUser from './components/deleteUser';
import CartPage from './components/CartPage';
import Calculate from './components/Calculate';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleUserAdded = (newUser) => {
    const userWithId = { ...newUser, id: Date.now() };
    setUsers((prevUsers) => [...prevUsers, userWithId]);
  };

  const handleUserDelete = async (userId) => {
    console.log('Удаляем пользователя с ID:', userId);
    const success = await deleteUser(userId);
    if (success) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="home" style={styles.section}>
                <h1>Добро пожаловать на сайт!</h1>
                <p>Это главная секция с описанием сайта.</p>
              </div>
              <div id="registration" style={styles.section}>
                <h2>Регистрация пользователя</h2>
                <button onClick={() => setIsModalOpen(true)}>Добавить пользователя</button>
                <UserRegistrationModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onUserAdded={handleUserAdded}
                />
                <h3>Список пользователей:</h3>
                <ul>
                  {users.map((user) => (
                    <li key={user.id}>
                      {user.name} ({user.email})
                      <button
                        onClick={() => handleUserDelete(user.id)}
                        style={{ marginLeft: '10px' }}
                      >
                        Удалить
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="comments" style={styles.section}>
                <Formarea />
              </div>
              <div id="contacts" style={styles.section}>
                <ContactsSection />
              </div>
            </div>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </Router>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #ddd',
    marginTop: '60px',
  },
};

export default App;
