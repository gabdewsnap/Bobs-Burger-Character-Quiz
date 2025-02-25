import { useState, useEffect } from 'react'
import './index.css'
import Options from './components/Options'

function App() {
  
  /*  1. Create basic front-end (options component which will have an image and name)
      2. Pick four random characters and create and array of the options components with their details. 
        Character must be unique and one needs to be matching to correct answer
  */
    const [startQuiz, setStartQuiz] = useState(false);
  
    function handleStartQuiz(){
      setStartQuiz(prevState => !prevState)
    }
  
    return (
      <>
        <div className='intro-container'>
        <h1 className='intro-title bobs-font2 bob-sign-style'>Bob's Burgers Quiz</h1>
        
        {startQuiz ? <Options/> : 
        <>
          <p className='intro-text just-another-hand-regular'>take this quiz to test how well you can name the characters we've all grown to love!</p>
          <button className='intro-btn' onClick={handleStartQuiz}>BEGIN</button>
        </>
        }
        </div>
      </>
    )
}

export default App
