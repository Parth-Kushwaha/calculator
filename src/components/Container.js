import { useState } from 'react'
import './Container.css'
function Container() {

  const [result, setResult]=useState('')

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name))
  }
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className="previous-operand">123</div>
        <div className="current-operand">{result}</div>
      </div>
        <button onClick={handleClick} className='span-two'>AC</button>
        <button onClick={handleClick}>DEL</button>
        <button onClick={handleClick}>&divide;</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>&times;</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>&ndash;</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick} className='span-two'>=</button>
    </div>
  )
}

export default Container
