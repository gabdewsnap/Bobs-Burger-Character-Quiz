import {useState, useEffect} from 'react'
import * as ReactDom from 'react-dom';
import Answer from './Answer';

function Option(props) {
  
  const [activeSelection, setActiveSelection] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const selections = props.options.map(char => 
    <button
      key={char.id}
      name={char.name}
      onClick={() => setActiveSelection(char.id)}
      className={char.id === activeSelection ? "option-card col-sm-5 col active" : "option-card col-sm-5 col-12"}
    >
      {char.name}
    </button>
  )

  function toggleShowAnswer(){
    setShowAnswer(showAnswer => !showAnswer)
    console.log("test")
  }

  return (
    <>
    <div className='row options-container' >
      {selections}
    </div>
    
    {activeSelection ? <button className='intro-btn' onClick={toggleShowAnswer}>SUBMIT</button> : null}

    {showAnswer ? <Answer selection={activeSelection} toggleShowAnswer={toggleShowAnswer}/> : null}
   
  </>
  )
}

export default Option
