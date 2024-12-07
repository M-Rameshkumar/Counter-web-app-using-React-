import { useEffect, useState } from "react";
import "./App.css";


function App (){
    const[data1,setData1] = useState(0);
   

 
 //adding   
const run = () =>{

    setData1((cur)=>{
      return cur+1;
    })           
  }

// minus
const sub=()=>{
    return(
setData1((e)=>{
  return e-1;
})

    )
  }


//reset

const reset=()=>{
  return(
 setData1(()=>{
  return 0;
 })

  )
}
  
  return(

    <div className="container">
    <h1>{data1}</h1>
    
   
<button onClick={sub}>remove</button>
<button onClick={reset}>reset</button>
<button onClick={run}> add</button>


     </div>
  )
}

export default App;