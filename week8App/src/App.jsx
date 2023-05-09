import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Main, Navbar } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main>
        
      </Main>

      <Navbar/>
    </div>
  )
}

export default App
