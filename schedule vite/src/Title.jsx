import './App.css'

function Title({lives}) {
 
  return (
    <h2 className="title">
    {lives.length === 0
      ? 'Добавьте Ваши жизни'
      : 'Ваши  ' + lives.length + '  жизни'}
  </h2>
  )
}

export default Title