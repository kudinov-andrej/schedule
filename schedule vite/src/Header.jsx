import './App.css'
import { useState} from 'react'
function Header() {
 
    const [name, setName] = useState('Введите Ваше имя')

  return (
        <header className="header">
          <div className="header__logo"></div>
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
