import { useState, useEffect } from 'react'
import '../index.css'
import Question from './Question'
import Result from './Result'



function Quiz(props){
  const URL = "https://bobsburgers-api.herokuapp.com/characters/";
  const [questions, setQuestions] = useState([]);
  const [questionsNum, setQuestionsNum] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [resetQuizQuestions, setResetQuizQuestions] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      let newQuestions = [];

        //create an array of 40 random id's to then use to grab characters from api 
        let characterArray = [];
        while (characterArray.length < 40) {
          let num = Math.floor(Math.random() * 496) + 1;
          if (!characterArray.includes(num)) {
            characterArray.push(num);
          }
        }
        
        try {
          const arrayResponse = await fetch(URL + `[${characterArray}]`);
          if (!arrayResponse.ok) throw new Error("API request failed");
          const characters = await arrayResponse.json();
         
          for (let i = 0; i < 10; i++) {
            let choices = characters.splice(0, 4); 
            let charAnswer = choices[Math.floor(Math.random() * choices.length)]; 
           
            newQuestions.push({ answer: charAnswer, options: choices,});
          }

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      setQuestions(newQuestions);
    };

    fetchData();
  }, [resetQuizQuestions]);

  function handleStartQuiz(){
    setStartQuiz(prevState => !prevState)
  }

  function resetQuiz(){
    setQuestions([]); 
    setQuestionsNum(0);
    setTotalCorrectAnswers(0);
    setStartQuiz(false);
    setResetQuizQuestions(prev => !prev)
  }

  return (
    <>
      <div className='intro-container'>
       
        <h1 className='intro-title'>Bob's Burgers Quiz</h1>

        {startQuiz && (questionsNum < 10) && <>  <p className='position-absolute question-marker'>{questionsNum + 1}/10</p>
                                                  <Question questions={questions[questionsNum]} 
                                                     questionsNum={questionsNum} 
                                                     handleNextQuestion={() => {setQuestionsNum(prev => prev + 1)}} 
                                                     setTotalCorrectAnswers={() => {setTotalCorrectAnswers(prev => (prev += 1))}}/>
                                                     
        </>}
        
        {!startQuiz && <>
          <p className='just-another-hand-regular'>take this quiz to test how well you can name the characters we've all grown to love!</p>
          <button className='intro-btn' onClick={handleStartQuiz}>BEGIN</button>
        </>}
        
        { questionsNum >= 10 && <Result totalCorrectAnswers={totalCorrectAnswers} resetQuiz={resetQuiz}/>}
      </div>
    </>
  )
};

export default Quiz;
