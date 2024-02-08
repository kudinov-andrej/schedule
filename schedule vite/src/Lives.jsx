import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Lives({ lives, openModal }) {
  const [name, setName] = useState('Введите Ваше имя')

  return (
    <section className="lives">
      <ul className="lives__list">
        {lives.map((item, index) => (
          <Link to={`/life/${index}`} key={index} className="live-link">
            <div key={index} className="live">
              <img
                className="live__img"
                src={item.background}
                alt={item.name}
              />
              <p className="live__name">{item.name}</p>
              <div className="live__level">
                <div
                  className="live__level-fill"
                  style={{ width: `${(item.force / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
      <button onClick={openModal} className="lives__add">
        Добавить жизнь
      </button>
    </section>
  )
}

export default Lives
