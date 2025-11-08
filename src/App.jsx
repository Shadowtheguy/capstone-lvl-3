import { useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'
import Home from './components/home'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <Home />
  )
}

export default App
