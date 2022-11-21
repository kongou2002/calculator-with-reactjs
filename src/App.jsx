import styled from '@emotion/styled'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [result, setResult] = useState(0)
  const [number, setNumber] = useState(0)
  const [dot, setDot] = useState(0);

  const [operation, setOperation] = useState(0);
  //0 equal; 1 add; 2 subtract; 3 multiply; 4 divide
  const handleDotChange = (event) => {
    if (dot === 0) {
      setNumber(number + '.');
    }
    setDot(1);
  }
  const handlenumber = (event) => {
    setNumber(number + event.target.value)
    console.log(event.target.value)
  }
  const handleArgument = (event) => {
    if (number !== 0) {
      if (operation === 1) {
        setResult(result + parseFloat(number));
      } else
        if (operation === 2) {
          setResult(result - parseFloat(number));
        } else
          if (operation === 3) {
            setResult(result * parseFloat(number));
          } else
            if (operation === 4) {
              setResult(result / parseFloat(number));
            } else {
              setResult(parseFloat(number));
            }
    }

    switch (event.target.value) {
      case "add":
        setOperation(1);
        break;
      case "sub":
        setOperation(2);
        break;
      case "mul":
        setOperation(3);
        break;
      case "div":
        setOperation(4);
        break;
    }
    setNumber(0);
    setDot(0);
  }

  const handleEqual = () => {
    if (operation === 1) {
      setResult(result + parseFloat(number));
    } else
      if (operation === 2) {
        setResult(result - parseFloat(number));
      } else
        if (operation === 3) {
          setResult(result * parseFloat(number));
        } else
          if (operation === 4) {
            setResult(result / parseFloat(number));
          } else {
            setResult(parseFloat(number));
          }
    setOperation(0);
    setNumber(0);
    setDot(0);
  }
  const handleRenderOperation = (operation) => {
    if (operation === 1) {
      return '+';
    } else
      if (operation === 2) {
        return '-';
      } else
        if (operation === 3) {
          return '*';
        } else
          if (operation === 4) {
            return '/';
          } else {
            return '';
          }
  }
  const handleClear = () => {
    setResult(0);
    setNumber(0);
    setOperation(0);
    setDot(0);
  }
  // loop to render numbers 0-9
  const createNumberButtons = () => {
    const numberButtons = []
    for (let i = 1; i < 10; i++) {
      numberButtons.push(
        <Button key={i}
          value={i}
          onClick={handlenumber}
          sx={{ width: '30%', height: '100%' }}
        >
          {i}
        </Button>
      )
    }
    return numberButtons
  }
  return (
    <Container
      width={'100%'}
      maxWidth={'400px'}
      sx={{ border: '1px solid black', maxWidth: '400px', width: '100%', borderRadius: '20px', bgcolor: 'black' }}>
      <Box className="display" sx={{ textAlign: 'right' }}>
        <Paper elevation={3} sx={{ borderRadius: '10px', bgcolor: 'black', color: 'white' }}>
          <Typography variant='h4'>{result} {handleRenderOperation(operation)}</Typography>
          <Typography variant='h3'>{parseFloat(number)}</Typography>
        </Paper>
      </Box>
      <Box className="operators" sx={{ textAlign: 'center', bgcolor: '#d81e5b' }}>
        <Button onClick={handleArgument} value={"add"}>+</Button>
        <Button onClick={handleArgument} value={"sub"}>-</Button>
        <Button onClick={handleArgument} value={"mul"}>*</Button>
        <Button onClick={handleArgument} value={"div"}>/</Button>
        <Button onClick={handleClear}>C</Button>
      </Box>
      <Box className='number' sx={{ width: '100%', textAlign: 'center' }}>
        {createNumberButtons()}
      </Box>
      <Box className="function" sx={{ textAlign: 'center' }} >
        <Button onClick={handleDotChange} sx={{ width: '30%', height: '100%' }}>.</Button>
        <Button onClick={handlenumber} value={0} sx={{ width: '30%', height: '100%' }}>0</Button>
        <Button onClick={handleEqual} sx={{ width: '30%', height: '100%' }}>=</Button>
      </Box>
    </Container>
  )
}

export default App
