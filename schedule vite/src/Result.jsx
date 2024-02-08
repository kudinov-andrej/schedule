import './App.css'

function Result({ totalLivesForce }) {
  return (
    <div className="live__result">
      <div
        className="live__level-total"
        style={{ width: `${(totalLivesForce / 10) * 100}%` }}
      ></div>
    </div>
  )
}

export default Result
