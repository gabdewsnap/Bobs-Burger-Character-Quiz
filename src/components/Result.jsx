import React from 'react'

function Result(props) {
  return (
    <div className='d-flex justify-content-center flex-column'>
       <p className='intro-text mt-3'> You got {props.totalCorrectAnswers}/10 correct! {props.totalCorrectAnswers >= 7 ? "Yay!" : "Better luck next time."}</p>
       <button className='intro-btn' onClick={() => {props.resetQuiz()}}>RETRY</button>
        
    </div>
  )
}

export default Result
