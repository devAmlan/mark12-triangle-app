import React,{useState} from 'react'
import './Hypotenuse.css'
function Hypotenuse() {
    const [base,setBase] = useState(0)
    const [height,setHeight] = useState(0)
    const [hypo,setHypo] = useState(0)
    let hypotenuse = 0;
    const calculateHypotenuse = ()=>{
      if(base > 0 && height > 0){
         hypotenuse = Math.sqrt((base*base)+(height*height))
         setHypo(hypotenuse)
      } 
      else{
          alert('Please enter a valid number')
      } 
    }
    return (
        <div>
        <div className="heading">
        <h3>Calculate the Hypotenuse</h3></div>
        <div className="inputarea">
            <label>base value(a): </label> 
            <input type="number"
            placeholder="Enter the base value"
            onChange={(e)=>{setBase(e.target.value)}}
             />
             <label>height value(b): </label> 
            <input type="number"
            placeholder="Enter the height value"
            onChange={(e)=>{setHeight(e.target.value)}}
             />
             <button
             onClick={calculateHypotenuse}
             >Calculate</button>
        </div>
        <div className="result">
        {
         (hypo !== 0)
         ?<><h3>Hypotenuse (h) is : {hypo.toFixed(2)}</h3></>
         :<></>
        }
        </div>
        </div>
    )
}

export default Hypotenuse
