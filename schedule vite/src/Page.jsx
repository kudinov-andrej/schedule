import { useParams } from 'react-router-dom'
import './App.css'

function Page({ lives, params }) {
  const { index } = useParams()
  const selectedLife = lives[index]

  // Check if selectedLife is undefined or null
  if (!selectedLife) {
    return <div>Error: Life not found</div>
  }

  // Check if selectedLife.name is defined before using it
  const lifeName = selectedLife.name || 'Unknown Name'

  return (
    <>
      <div className="page">
        <h2 className="page__title">{selectedLife.name}</h2>
        <img
          className="page__img"
          src={selectedLife.background}
          alt={selectedLife.name}
        ></img>
        <div className="live__level">
          <div
            className="live__level-fill"
            style={{ width: `${(selectedLife.force / 10) * 100}%` }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Page
