import React from 'react';

const Formarea = () => {
  return (
    <div>
      <h2>книга жалоб и предложений</h2>
      <form>
        <textarea placeholder="Введите свой отзыв"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Formarea;
