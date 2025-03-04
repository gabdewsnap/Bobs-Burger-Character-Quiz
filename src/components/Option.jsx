import {useState, useEffect} from 'react'
import * as ReactDom from 'react-dom';

function Option(props) {
  
  const [activeButton, setActiveButton] = useState(0);

  const selections = props.options.map(char => 
    <button
      key={char.id}
      name={char.name}
      onClick={() => setActiveButton(char.id)}
      className={char.id === activeButton ? "option-card col-sm-5 col char-name bobs-font2 active" : "option-card col-sm-5 col-12 char-name bobs-font2 "}
    >
      {char.name}
    </button>
  )



  return (
    <>
    <div className='row options-container' >
      {selections}
    </div>
    
    {activeButton ? <button className='intro-btn'>SUBMIT</button> : null}
    
   
  </>
  )
}

export default Option
