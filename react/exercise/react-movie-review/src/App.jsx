import { useState } from 'react'
import ControlBar from './component/ControlBar'
import AddMovieForm from './component/AddMovieForm'
import MovieCard from './component/MovieCard'
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1>Movie Watchlist</h1>
      <ControlBar />
      <AddMovieForm />
      <h4 className='my-3'>Movies</h4>
      <MovieCard />
    </div>
  )
}

export default App
