import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Header() {
  const [name, setName] = useState('Введите Ваше имя')

  return (
     <header className="header"> 
      <Link to="/"><div className="header__logo"></div></Link>
      <input
        onChange={(evt) => setName(evt.target.value)}
        className="header__input"
        placeholder={name}
        value={name}
      />
    </header>
  )
}

export default Header
