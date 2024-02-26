import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)
  console.log(count);
  return (
    <div className='first'> 
     <div><h1>Helloworld</h1></div>

     <Header />
    </div>
  )
}

export default App
