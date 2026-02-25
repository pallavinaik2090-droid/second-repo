import { useState } from 'react'

import './App.css'
import Blog from './assets/component/Blog'
// import Map from './assets/component/map'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Blog/>
     {/* <Map/> */}
    </>
  )
}

export default App
