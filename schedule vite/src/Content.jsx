import './App.css'
import Result from './Result'
import Lives from './Lives'
import Title from './Title'

function Content({totalLivesForce, lives, openModal}) {
 
  return (
   <>
    <Result 
    totalLivesForce = {totalLivesForce}
    />
     <Title 
     lives = {lives}
     />
     <Lives 
     lives={lives}
      openModal={openModal}
     />
     </>
  )
}

export default Content