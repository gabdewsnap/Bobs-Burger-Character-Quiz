import { useState, useEffect } from 'react'
import './index.css'
import Option from './components/Option';

function App() {
  
  const URL = 'https://bobsburgers-api.herokuapp.com/characters/';
  //create an array of 4 random id's to then use to grab characters from api 
  let characterArray = [];
  while(characterArray.length < 4){
    let num = Math.floor(Math.random() * 496) + 1
    if(characterArray.indexOf(num) === -1){
      characterArray.push(num);
      
    }
  }

  const [charList, setCharList] = useState([])

  useEffect(() =>{
    const fetchData = async () => {
      const result = await fetch(URL + `[${characterArray}]`)
      result.json().then(json => {
        setCharList(json.map(x => <Option image={x.image} name={x.name} key={x.id}/>));
        console.log(charList)
      })
    }
    fetchData();
  }, []);


  /*  1. Create basic front-end (options component which will have an image and name)
      2. Pick four random characters and create and array of the options components with their details. 
        Character must be unique and one needs to be matching to correct answer
      3. Create basic api of all the characters and ~10 quotes each.
  */
  return (
    <>
      <div className="row">
        {charList}
      </div>
    </>
  )
}

export default App
