import Quiz from "./Quiz";
import { useState } from "react";

export default function App(){
    
    const [resetQuiz, setResetQuiz] = useState(false);
    console.log(resetQuiz)
    
    return (   
        <>
        <Quiz resetQuiz={setResetQuiz}/>
        <footer>made with ❤️ by <a href="https://github.com/gabdewsnap">gabrielle</a></footer>
        </>
    )
    
}