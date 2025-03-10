import { useState, useEffect } from 'react';
import Option from './Option'
import Answer from './Answer';

function Question(props) {


  const [activeSelection, setActiveSelection] = useState(0);
  const [questionsNum, setQuestionsNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const questions = props.questions[questionsNum];

  console.log(questions.options)
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
    setShowAnswer(showAnswer => !showAnswer)
    setDisabled(true);
    const element = document.getElementById(questions.answer.id)
    element.classList.add("correct-answer")
    document.getElementById("answer-paragraph").classList.remove("d-none");
    
    if(questions.answer.id == activeSelection){
      setWasCorrect(true)
      setTotalCorrectAnswers(prev => (prev += 1));
      document.getElementById("answer-paragraph").classList.add("green-color", "d-block");
    }
    
    else{
      document.getElementById(activeSelection).classList.add("incorrect-answer");
      document.getElementById("answer-paragraph").classList.add("red-color", "d-block");
    }

  }

  return (
    <>
    <div className='position-relative d-flex justify-content-center'>
    <img className="char-img"src={questions.answer.image} alt={questions.answer.name} /> 
    <p className='text-center answer-text position-absolute d-none' id="answer-paragraph">{wasCorrect ?  `Correct! ` : `&#x274c; Incorrect :( ` }</p>
    </div>


    <div className='row options-container' >
      {selections}
    </div>
    
    {activeSelection && showAnswer? <button className='intro-btn' onClick={toggleShowAnswer}>SUBMIT</button> : null}

    {!showAnswer ? <button className='intro-btn'>NEXT</button> : null}
   
  </>
  )
}

export default Question
