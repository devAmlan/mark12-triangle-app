import React,{useState} from 'react'
import './IsTriangle.css'
function IsTriangle() {
    const [angle1, setAngle1] = useState(0)
    const [angle2, setAngle2] = useState(0)
    const [angle3, setAngle3] = useState(0)
    const [msg,setMsg] = useState("")
    const checkTriangle = ()=>{
    let sumofTriangles = 0;
    if(Number(angle1) <= 0 && Number(angle1) <= 0 && Number(angle1) <= 0){
      setMsg('Please enter a valid angle')
    }
    else if(Number(angle1) > 0 && Number(angle1) > 0 && Number(angle1) > 0){
        sumofTriangles = Number(angle1)+Number(angle2)+Number(angle3)
        if(sumofTriangles === 180){
         setMsg("Congrats, these angles form a triangle!")
        }
        else{
           setMsg("Oh Oh! These angles don't form a triangle")
        }
      }
    }
    return (
        <div>
        <div className="angleinput">
        <label>Angle 1</label>
        <input type="number" 
        onChange={(e)=>{setAngle1(e.target.value)}} />
        <label>Angle 2</label>
        <input type="number" onChange={(e)=>{setAngle2(e.target.value)}} />
        <label>Angle 3</label>
        <input type="number" onChange={(e)=>{setAngle3(e.target.value)}} />
        <button onClick={checkTriangle}>Is Tringle?</button>
        </div>
         <div className="msgarea"><h3>{msg}</h3></div>
        </div>
    )
}

export default IsTriangle
