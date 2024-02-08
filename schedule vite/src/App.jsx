import { useState, useEffect } from 'react'
import './App.css'
import Modal from 'react-modal'
import Popup from './Popup'
import Header from './Header'
import Result from './Result'
import Lives from './Lives'
import Title from './Title'

function App() {
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
        <Header  />
        <main className="main">
         <Result 
         totalLivesForce = {totalLivesForce}
         />
          <Title 
          lives = {lives}
          />
          <Lives 
          lives = {lives}
          openModal ={openModal}
          />
        </main>
      </div>
      <Modal
        className="popup"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Life Modal"
      >
        <Popup 
        handleInputChange = {handleInputChange}
        newLife={newLife}
        handleAddLife={handleAddLife}
        closeModal={closeModal}
        />
      </Modal>
    </>
  )
}

export default App
