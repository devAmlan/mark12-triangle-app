import React,{useState} from 'react'
import './Area.css'

function Area() {
    const [trianglebase, setTrianglebase] = useState(0)
    const [triangleheight, setTriangleheight] = useState(0)
    const [trianglearea, setTrianglearea] = useState(0)
    let area = 0;
    const calculateArea = ()=>{
       if(trianglebase > 0 && triangleheight > 0){
        area = 0.5*(trianglebase*triangleheight)
        setTrianglearea(area)
       }else{
           alert('Please enter a valid value')
       }
    }
    return (
        <div>
        <div className="heading"><h3>Calculate the Area of a Triangle</h3></div>
        <div className="sideinput">
        <label>Enter Base 👇</label>
        <input type="number" 
        placeholder="Enter base of the triangle"
        onChange={(e)=>{setTrianglebase(e.target.value)}}
        />
         <label>Enter height 👇</label>
        <input type="number" 
        placeholder="Enter height of the triangle"
        onChange={(e)=>{setTriangleheight(e.target.value)}}
        />
        <button onClick={calculateArea}>Area?</button>
        </div>
        <div className="result">
        {
        (trianglearea !== 0)?
        <><h3>Area of the Triangle is : {trianglearea}</h3></>:<></>
        }
        </div>  
        </div>
    )
}

export default Area
