import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import logo from './imagenes/logo.jpg';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const listenKeyboard = val => {
    setInput()
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('ingresa valores para realizar los calculos')
    }
  }


  return (
    <div className="App">
    {/* logo */}
      <header className="logo-container">
        <img
          src={logo}
          className="img-logo"
          alt='logo personal'
        />
      </header>

      {/* calculadora */}
      <section className="contenedor-calculadora">
        <Pantalla
          input={input}/>
        
        <div className="fila">
          <Boton manejarclic={agregarInput}>1</Boton>
          <Boton manejarclic={agregarInput}>2</Boton>
          <Boton manejarclic={agregarInput}>3</Boton>
          <Boton manejarclic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarclic={agregarInput}>4</Boton>
          <Boton manejarclic={agregarInput}>5</Boton>
          <Boton manejarclic={agregarInput}>6</Boton>
          <Boton manejarclic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarclic={agregarInput}>7</Boton>
          <Boton manejarclic={agregarInput}>8</Boton>
          <Boton manejarclic={agregarInput}>9</Boton>
          <Boton manejarclic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarclic={calcularResultado}>=</Boton>
          <Boton manejarclic={agregarInput}>0</Boton>
          <Boton manejarclic={agregarInput}>.</Boton>
          <Boton manejarclic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear 
            manejarClear={() => setInput('')}>
              Clear
          </BotonClear>
        </div>
      </section>
    </div>
  );
}

export default App;
