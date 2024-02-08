import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Modal from 'react-modal'
import Popup from './Popup'
import Header from './Header'
import Page from './Page'
import Content from './Content'

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
        <Header />
      </div>
      <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Content
              totalLivesForce={totalLivesForce}
              lives={lives}
              openModal={openModal}
            />
          }
        />
        <Route path="/life/:index" element={<Page lives={lives} />} />
      </Routes>
      </main>
      <Modal
        className="popup"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Life Modal"
      >
        <Popup
          handleInputChange={handleInputChange}
          newLife={newLife}
          handleAddLife={handleAddLife}
          closeModal={closeModal}
        />
      </Modal>
    </>
  )
}

export default App
