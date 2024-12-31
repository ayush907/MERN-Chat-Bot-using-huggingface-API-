import React from 'react'
import Botlayout from './pages/Botlayout'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <>
    <Botlayout/>
    <Toaster position='bottom-center'/>
    </>
  )
}

export default App