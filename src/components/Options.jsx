import { useState, useEffect } from 'react';
import Option from './Option'
import Answer from './Answer';

function Options(props) {
  
  const URL = 'https://bobsburgers-api.herokuapp.com/characters/';

  
  //create an array of 4 random id's to then use to grab characters from api 
  let characterArray = [];
  while(characterArray.length < 4){
    let num = Math.floor(Math.random() * 496) + 1
    if(characterArray.indexOf(num) === -1){
      characterArray.push(num);
      
    }
  }

  const [optionsList, setOptionsList] = useState([])
  const [answer, setAnswer] = useState({})
  const [clickedId, setClickedId] = useState(-1);
  let charAnswer = characterArray[Math.floor(Math.random()*characterArray.length)];

  useEffect(() =>{
    const fetchData = async () => {
      const arrayResult = await fetch(URL + `[${characterArray}]`)
      arrayResult.json().then(json => {
        setOptionsList(json.map(x => ({name: x.name, id: x.id})));
      });
      const answerResult = await fetch(URL + `${charAnswer}`)
      answerResult.json().then(json => {
        setAnswer(json);
      });
    }
    fetchData();
  }, []);
  

  
  return (
    <>
    {/* <Answer name={answer.name} image={answer.image}/> */}
    <div className='question-container'>
        <img className="char-img" src={answer.image} alt={answer.name}/> 
    </div>

    <Option options={optionsList}/>
    
    </>
  )
}

export default Options
