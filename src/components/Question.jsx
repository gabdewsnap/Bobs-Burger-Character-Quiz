import { useState, useEffect } from 'react';

function Question(props) {

  const [activeSelection, setActiveSelection] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const questions = props.questions;

  // Creates the quiz button options
  const selections = questions.options.map(char => 
    <button
      key={char.id}
      id={char.id}
      onClick={() => setActiveSelection(char.id)}
      disabled={disabled}
      className={char.id === activeSelection ? "option-card col-sm-5 col active" : "option-card col-sm-5 col-12"}
    >
      {char.name}
    </button>
  )

  //Does a bunch of things when you submit your answer 
  function toggleShowAnswer(){
    setShowAnswer(false)
    setDisabled(true);
    const element = document.getElementById(questions.answer.id)
    element.classList.add("correct-answer")
    
    if(questions.answer.id == activeSelection){
      props.setTotalCorrectAnswers();
    }
    else{
      document.getElementById(activeSelection).classList.add("incorrect-answer");
    }   
  }

  //resets the quiz question
  function handleNext(){
    setDisabled(false)
    setShowAnswer(true)
    setActiveSelection(0)
    props.handleNextQuestion()
  }

  return (
    <>
    <div className='d-flex justify-content-center'>
      <img className="char-img"src={questions.answer.image} alt={questions.answer.name} /> 
    </div>

    <div className='row options-container' >
      {selections}
    </div>
    
    {activeSelection && showAnswer ? <button className='intro-btn' onClick={toggleShowAnswer}>SUBMIT</button> : null}
    {!showAnswer && (props.questionsNum < 10) ? <button className='intro-btn' onClick={handleNext}>NEXT</button> : null}
    
    
  </>
  )
}

export default Question
