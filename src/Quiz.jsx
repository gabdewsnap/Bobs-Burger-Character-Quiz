import { useState, useEffect } from 'react'
import './index.css'
import Question from './components/Question'



function Quiz(){
  const URL = "https://bobsburgers-api.herokuapp.com/characters/";
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let newQuestions = [];

      //loop 10 times to have 10 questions
      for (let i = 0; i < 10; i++) {

        //create an array of 4 random id's to then use to grab characters from api 
        let characterArray = [];
        while (characterArray.length < 4) {
          let num = Math.floor(Math.random() * 496) + 1;
          if (!characterArray.includes(num)) {
            characterArray.push(num);
          }
        }

        let charAnswer = characterArray[Math.floor(Math.random() * characterArray.length)];

        try {
          
          const arrayResponse = await fetch(URL + `[${characterArray}]`);
          const choicesData = await arrayResponse.json();

          const choices = choicesData.map((x) => ({ name: x.name, id: x.id }));
          const answerResponse = await fetch(URL + `${charAnswer}`);
          const correctAnswer = await answerResponse.json();

          // ARRAY STRUCTURE
          newQuestions.push({ answer: correctAnswer, options: choices, number: i});
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      setQuestions(newQuestions);
    };

    fetchData();
  }, []);

  const [startQuiz, setStartQuiz] = useState(false);
  function handleStartQuiz(){
    setStartQuiz(prevState => !prevState)
  }

  console.log(questions)
  return (
    <>
      <div className='intro-container'>
      <h1 className='intro-title bobs-font2 bob-sign-style'>Bob's Burgers Quiz</h1>
      
      {startQuiz ? <Question questions={questions}/> : 
      <>
        <p className='intro-text just-another-hand-regular'>take this quiz to test how well you can name the characters we've all grown to love!</p>
        <button className='intro-btn' onClick={handleStartQuiz}>BEGIN</button>
      </>
      }
      </div>
    </>
  )
};

export default Quiz;
