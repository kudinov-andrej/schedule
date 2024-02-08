import { useState, useEffect } from 'react'
import './App.css'

function Page(props) {
  return (
    <>
      <div className="page">
        <h2 className="page__title">{props.name}</h2>
        <img
          className="page__img"
          src={props.background}
          alt={props.name}
        ></img>
        <div className="live__level">
          <div
            className="live__level-fill"
            style={{ width: `${(props.force / 10) * 100}%` }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Page
