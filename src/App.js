import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react'
import './App.css';

function App() { 
  
  // Trabalhando com os Selects
  const temperaturas = [
    { 
      value: '1',
      label: 'ºC para F',
    },
    {
      value: '2',
      label: 'ºC para K',
    },
    {
      value: '3',
      label: 'F para K',
    },
    {
      value: '4',
      label: 'F para ºC',
    },
    {
      value: '5',
      label: 'K para ºC',
    },
    {
      value: '6',
      label: 'K para F',
    }
  ];
  
  const [option, setOption] = useState('1');
  
  const handleChangeOption = (event) => {
    setOption(event.target.value);
  };
  // /Trabalhando com os Selects

  var resultado = 0

  function converter() {

    // Pegando os Dados dos campos
    const vlrDigitado = document.getElementById('input').value;
    const vlrSelect = option;
    // //Pegando os Dados dos campos

    // função separada para cada caso
    function celsiusParaFahrenheit(){
      resultado = (vlrDigitado * 9) / 5 + 32; 
      return document.getElementById('resultado').value = resultado
    }

    function celsiusParaKelvin(){
      resultado = vlrDigitado * 1 + 273.15
      return document.getElementById('resultado').value = resultado;
    }
    
    function fahrenheitParaKelvin(){
      resultado = (vlrDigitado - 32) * 5/9 + 273.15
      return document.getElementById('resultado').value = resultado;
    }

    function fahrenheitParaCelsius(){
      resultado = (vlrDigitado - 32) * 5/9
      return document.getElementById('resultado').value = resultado;
    }

    function kelvinParaCelsius(){
      resultado = vlrDigitado - 273.15 
      return document.getElementById('resultado').value = resultado;
    }

    function kelvinParaFahrenheit(){
      resultado = (vlrDigitado - 273.15) * 9/5 + 32
      return document.getElementById('resultado').value = resultado;
    }
    // /função separada para cada caso
    
    switch (vlrSelect) {
      case '1':
        celsiusParaFahrenheit();
        break;
        
      case '2':
        celsiusParaKelvin();
        break;

      case '3':
        fahrenheitParaKelvin();
        break;
        
      case '4':
        fahrenheitParaCelsius();
        break;

      case '5':
        kelvinParaCelsius();
        break;

      case '6':
        kelvinParaFahrenheit();
        break;

      default:
    }
  }
  // //Trabalhando com os Selects

  return (
    <div className="App">
      <header> <h1> Conversor de Temperaturas </h1> </header>

      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
        <div>
          <TextField id="input" label="Digite a temperatura" type="number" />

          <TextField id="select" select label="Selecione a temperatura" 
            value={ option }
            onChange={ handleChangeOption}
          >
            {temperaturas.map((option) => (
              <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
            ))}
          </TextField>
        </div>
        
        <div>
          <h1>Para</h1>
          <TextField id="resultado" disabled value={ resultado }/> 
        </div>

        <div>
          <Button variant="outlined" size="large" 
              onClick={(e) => {
                e.preventDefault();
                converter();
              }}
            >
            Converter
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default App;