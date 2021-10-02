import {useState} from 'react';
import './App.css';


function App() {

  const [linea1, setLinea1] = useState ('');
  const [linea2, setLinea2] = useState ('');

 const onChangeline1 = function (valor) {
   debugger;
   alert (valor)
   
 }
 
  return (
    <div className="App">
     
     
      <select>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
      </select> <br/>

      <input onChange={onChangeline1}  type="Text" placeholder="linea1"/><br/>
      <input type="Text" placeholder="linea2"/><br/>
      <button>exportar</button>
      
      
      <div>
        <span>{linea1}</span> <br/>
        <span>{linea2}</span> 
        <img src=""></img>
      </div>
    
  
    </div>
  );
} 

export default App;
