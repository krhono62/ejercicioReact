import React, {Fragment} from 'react';

const TablaMultiplicar = () =>{
    const generarTabla = ()=>{
        var j = document.getElementById('numero').value;
        var resulted='<h1>La tabla de multiplicar es la siguiente:</h1><br>';
	    for(var i = 1;i<=10;i++){
            resulted+=j + "x " + i + "= " + j * i + "<br>"
	    }
        document.getElementById('result').innerHTML = resulted;
    }
    return(
        <Fragment >
      <h1>Ingresa el numero para obtener su tabla:</h1>
      <input 
        id="numero" 
        placeholder="Ejemplo 9"
        name="numero"
      />
      <br/>
      <button className="btn btn-primary" onClick={generarTabla}>Generar tabla</button>
      <div id="result" >
          
      </div>
        </Fragment>
    );
}

export default TablaMultiplicar;