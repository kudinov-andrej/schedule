import { useParams } from 'react-router-dom'
import './App.css'

function Page({ lives, params, handleInputChange, newLife, setLives, setNewLife}) {
  const { index } = useParams()
  const selectedLife = lives[index]

  // Check if selectedLife is undefined or null
  if (!selectedLife) {
    return <div>Error: Life not found</div>
  }

  // Check if selectedLife.name is defined before using it
  const lifeName = selectedLife.name || 'Unknown Name'

  const handleAddTask = (evt) => {
    evt.preventDefault();
    // Проверяем наличие tasks в selectedLife и создаем новый объект жизни с добавленной задачей
    const updatedLife = {
      ...selectedLife,
      tasks: selectedLife.tasks ? [...selectedLife.tasks, { text: newLife.text }] : [{ text: newLife.text }],
    };
  
    // Обновляем массив жизней, заменяя старую жизнь на новую
    setLives((prevLives) => {
      const updatedLives = [...prevLives];
      updatedLives[index] = updatedLife;
      return updatedLives;
    });

    setNewLife((prevNewLife) => ({
        ...prevNewLife,
        text: '',
      }));
    
  };
  return (
    <>
      <div className="page">
        <h2 className="page__title">{selectedLife.name}</h2>
        <img
          className="page__img"
          src={selectedLife.background}
          alt={selectedLife.name}
        ></img>
        <div className="live__page">
          <div
            className="live__page-fill"
            style={{ width: `${(selectedLife.force / 10) * 100}%` }}
          ></div>
        </div>
        <h3 className='task__title'>Что сделать, чтобы улучшить эту жизнь?</h3>
        <form onSubmit={handleAddTask} className='task__form'>
            <input 
            className='task__input' 
            placeholder='Введите задачу'
            name='text'
            value={newLife.text}
            onChange={handleInputChange}
            ></input>
            <button  type='submit' className='task__button'>Добавить дело</button>
        </form>
         <ul className='task__list'>
          {selectedLife.tasks && selectedLife.tasks.map((item, index) => (
            <li className='task__item' key={index}>
              <p className='task__text'>{item.text}</p>
              <button type="button" className='task__finish'>Выполнено</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Page
