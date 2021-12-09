import React,{useState} from 'react'
import './Quiz.css'
function Quiz() {
  const optionselected = document.querySelectorAll(".option")
  const [result,setResult] =  useState("")
  const [selected, setSelected] = useState("")
  const optionArray = ["60°","30°","45°","90°"]
  const selectOption = (optn,index)=>{
    for (let i = 0; i < optionselected.length; i++) {
      if(index === i){
        optionselected[i].style.backgroundColor = '#105652' 
        optionselected[i].style.color = '#F6F6F6' 
      }else{
        optionselected[i].style.backgroundColor = '#F6F6F6' 
        optionselected[i].style.color = '#105652' 
      }
    }
    setSelected(optn)
    if(selected === "90°"){
      setResult("Congrats you gave currect answer!!!")
    }else{
      setResult("Sorry Try again later !!!")
    }
  }
    return (
        <div>
           <div className="heading"><h3>Let's Play Triangle Quiz</h3></div> 
        
          <div className="quizarea">
          <p>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
          <div className="alloptions">
          {
            optionArray.map((each,index)=>{
              return(
                <>
                <div className="option" 
                onClick={()=>{selectOption(each,index)}}>
                <p>{each}</p>
                </div>
                </>
              )
            })
          }
          </div>
          <h3>{result}</h3>
          </div>
        </div>
    )
}

export default Quiz
