import logo from './logo.svg';
import './App.css';
import Button from './componentes/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ingresa el numero para obtener su tabla:</h1>
      <input id="numero" placeholder="Ejemplo 9"/>
      <button class="button default" onClick={generarTabla}>Hola</button>
      <div id="resultado">

        
      </div>
      </header>
    </div>
  );
}

function generarTabla(){
  var j= document.getElementById('numero').value;

	//i++ significa i=i+1;

	for(var i = 1;i<=10;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}


export default App;
