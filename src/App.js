import {useState} from 'react';
import './App.css';


function App() {

  const [linea1, setLinea1] = useState ('');
  const [linea2, setLinea2] = useState ('');
  const [imagen, setimagen] = useState ('');

 const onChangeline1 = function (evento) {
   setLinea1 (evento.target.value);
 }

 const onChangeline2 = function (evento) {
  setLinea2 (evento.target.value);
}
const onChangeimagen = function (evento) {
  setimagen (evento.target.value);
}
const onClikcexportar = function (evento) {
  alert("export");
  html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
}

 
  return (
    <div className="App">
     
     
      <select onChange={onChangeimagen}>
         <option value="batman">batman</option>
         <option value="button">button</option>
         <option value="chico">chico</option>
         <option value="chocolatero">chocolatero</option>
         <option value="mr been">mr been</option>
         <option value="nene">nene</option>
      </select> <br/>

      <input onChange={onChangeline1}  type="Text" placeholder="linea1"/><br/>
      <input onChange={onChangeline2} type="Text" placeholder="linea2"/><br/>
      <button onClick={onClikcexportar}>exportar</button>
      
      
      <div className="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span> 
        <img src={"/Img/" + imagen + ".jpg"}></img>
      </div>
    
  
    </div>
  );
} 

export default App;
