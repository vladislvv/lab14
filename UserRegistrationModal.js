import React from 'react';

const UserRegistrationModal = ({ isOpen, onClose, onUserAdded }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <h2>Регистрация пользователя</h2>
        <button onClick={onClose}>Закрыть</button>
        <button onClick={() => onUserAdded({ name: 'Новое имя', email: 'email@example.com' })}>Добавить пользователя</button>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
