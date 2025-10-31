import { useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'
import Home from './components/home'
import PokeAPI from './components/pokeAPI'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Home />
  )
}

export default App
