import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <a href="https://vitejs.dev" target="_blank">
        <img src={logo} className="logo" alt="Vite logo" />
      </a>
    </div>
  )
}

export default App
