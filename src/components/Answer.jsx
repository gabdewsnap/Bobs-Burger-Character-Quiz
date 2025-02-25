import React from 'react'

function Answer(props) {
  return (
    <div className='question-container'>
        <img className="char-img"src={props.image} alt={props.name}/> 
        
    </div>
  )
}

export default Answer
