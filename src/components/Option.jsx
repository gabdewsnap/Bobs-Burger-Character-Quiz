import React from 'react'

function Option(props) {
  return (
    
    <div className='option-card'>
        <img className="char-img"src={props.image} alt={props.name}/>
        <span className='char-name'>{props.name}</span>
        {/* <p className='title'>Test</p> 
        <p className='title2'>Test2</p>  */}
    </div>
  )
}

export default Option
