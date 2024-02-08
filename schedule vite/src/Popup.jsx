import { useState, useEffect } from 'react'
import './App.css'

function Popup({ handleInputChange, newLife, handleAddLife, closeModal }) {
  return (
    <div className="popup__conteiner">
      <h2 className="popup__title">Добавить жизнь</h2>
      <div className="input__item">
        <label className="input__description">Название:</label>
        <input
          type="text"
          name="name"
          value={newLife.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__item">
        <label className="input__description">Фон (URL изображения): </label>
        <input
          type="text"
          name="background"
          value={newLife.background}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__item">
        <label label className="input__description">
          Оцените жизнь от 1 до 10:
        </label>
        <input
          type="text"
          name="force"
          value={newLife.force}
          onChange={handleInputChange}
        />
      </div>
      <div className="button__conteiner">
        <button className="popup__button" onClick={handleAddLife}>
          Добавить
        </button>
        <button className="popup__button" onClick={closeModal}>
          Отмена
        </button>
      </div>
    </div>
  )
}

export default Popup
