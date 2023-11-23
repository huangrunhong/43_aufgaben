import { useState } from 'react'

import Nav from './assets/components/Nav'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Nav/>
  <Header/>
  <Main/>
  <Footer/>
    </>
  )
}

export default App
