import { useState, useEffect } from 'react'
import './App.css'
import Modal from 'react-modal'

function App() {
  const [name, setName] = useState('Введите Ваше имя')
  const [lives, setLives] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newLife, setNewLife] = useState({
    name: '',
    background: '',
    force: '',
  })
  const [totalLivesForce, setTotalLivesForce] = useState(0)

  useEffect(() => {
    setTotalLives()
  }, [lives])

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    // Очистите данные для следующего использования
    setNewLife({ name: '', background: '', force: '' })
  }

  const handleAddLife = () => {
    // Добавьте новую жизнь в массив
    setLives([...lives, newLife])
    closeModal()
  }

  const handleInputChange = (e) => {
    // Обновите состояние новой жизни при изменении ввода
    setNewLife({ ...newLife, [e.target.name]: e.target.value })
  }

  function setTotalLives() {
    let result = 0
    lives.forEach((element) => {
      result = parseFloat(element.force) + result
      console.log(totalLivesForce, lives.length)
    })
    return setTotalLivesForce(result / lives.length)
  }

  return (
    <>
      <div className="content">
        <header className="header">
          <div className="header__logo"></div>
          <input
            onChange={(evt) => setName(evt.target.value)}
            className="header__input"
            placeholder={name}
            value={name}
          />
        </header>
        <main className="main">
          <div className="live__result">
            <div
              className="live__level-total"
              style={{ width: `${(totalLivesForce / 10) * 100}%` }}
            ></div>
          </div>
          <h2 className="title">
            {lives.length === 0
              ? 'Добавьте Ваши жизни'
              : 'Ваши  ' + lives.length + '  жизни'}
          </h2>
          <section className="lives">
            <ul className="lives__list">
              {lives.map((item, index) => (
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
              ))}
            </ul>
            <button onClick={openModal} className="lives__add">
              Добавить жизнь
            </button>
          </section>
        </main>
      </div>
      <Modal
        className="popup"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Life Modal"
      >
        <div className="popup__conteiner">
          <h2 className='popup__title'>Добавить жизнь</h2>
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
            <label className="input__description">
              Фон (URL изображения):{' '}
            </label>
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
          <div className='button__conteiner'>
          <button  className="popup__button" onClick={handleAddLife}>Добавить</button>
          <button className="popup__button" onClick={closeModal}>Отмена</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default App
