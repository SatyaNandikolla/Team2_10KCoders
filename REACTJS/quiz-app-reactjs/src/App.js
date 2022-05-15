import React,{useState} from 'react';
import Questions from './Questions.json';
import Display from './Display';
import Model from './Model';
import "./App.css"

const App = () => {
  const [marks,setMarks] = useState([]);
  let tempMarks = [];
  const handleChange = (index,mark) =>{
    tempMarks = marks
    tempMarks[index] = mark;
    setMarks([...tempMarks]);
   // alert(tempMarks);
  }

  return (
    <div>
      <center>
        <h1>Quiz Application</h1> 
        {Questions.map((qa,index) => <Display question={qa} handleChange={handleChange} index={index} />)}
        <Model marks={marks}/>
      </center>
    </div>
  )
}

export default App
