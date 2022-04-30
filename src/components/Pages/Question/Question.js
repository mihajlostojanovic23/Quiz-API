import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import './Question.css'



const Question = ({
    questions,
    setQuestion,
    options,
    currentQuestion,
    setCurrentQuestion,
    correct,
    score,
    setScore
}) => {

const [selected, setselected] = useState()
const [error, setError] = useState(false)

const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select1";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select1";
  };

  const handleCheck = (opt) => {
      setselected(opt)
      if(opt === correct) setScore (score +1);
      setError(false)
  }

  let navigation = useNavigate()


  const handleNext = () => {
    if (currentQuestion > 8) {
      navigation("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setselected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setScore(0)
    navigation('/')
  };
  return (
    <div>
        <span>Question {currentQuestion +1} </span>
        <div className='singleQuestion'>
            <h5>{questions[currentQuestion].question}</h5>
            <div className='options'>
            {error && <div className='error'> <ErrorMessage className="error" >Please select one answer!</ErrorMessage> </div> }
            {
                options && options.map(opt => 
                <button onClick={() => {handleCheck(opt)}} 
                
                className={`singleOption  ${selected && handleSelect(opt)}`}  
                key={opt} > {opt} </button>)
            }
        
            </div>
            <div className='buttons'> 
            <button onClick={handleQuit} className='quit'>Quit</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Question