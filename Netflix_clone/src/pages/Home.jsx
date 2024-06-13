

import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import request from '../request.js'

const Home = () => {
  let i = 0
  return (
    <div>
      <Main/>
      <Row RowId = {i++} title="Up Comming" fetchURL={request.UpcomingMovies}/>
      <Row RowId = {i++} title="PopularMovies" fetchURL={request.PopularMovies}/>
      <Row RowId = {i++} title="TopRatedMovies" fetchURL={request.TopRatedMovies}/>
      <Row RowId = {i++} title="NowPlayingMovies" fetchURL={request.NowPlayingMovies}/>
      <Row RowId = {i++} title="AnimatedMovies" fetchURL={request.AnimatedMovies}/>
      <Row RowId = {i++} title="ComedyMovies" fetchURL={request.ComedyMovies}/>
      <Row RowId = {i++} title="ActionMovies" fetchURL={request.ActionMovies}/>
      <Row RowId = {i++} title="ScienceAndFiction" fetchURL={request.ScienceAndFiction}/>
      <Row RowId = {i++} title="AdventuresMovies" fetchURL={request.AdventuresMovies}/>
      <Row RowId = {i++} title="CrimeMovies" fetchURL={request.CrimeMovies}/>
      <Row RowId = {i++} title="DocumentaryMovies" fetchURL={request.DocumentaryMovies}/>
      <Row RowId = {i++} title="DramaMovies" fetchURL={request.DramaMovies}/>
      <Row RowId = {i++} title="FantasyMovies" fetchURL={request.FantasyMovies}/>
      <Row RowId = {i++} title="HorrorMovies" fetchURL={request.HorrorMovies}/>
      <Row RowId = {i++} title="RomanceMovies" fetchURL={request.RomanceMovies}/>
      <Row RowId = {i++} title="ThrilledMovies" fetchURL={request.ThrilledMovies}/>
      <Row RowId = {i++} title="WarMovies" fetchURL={request.WarMovies}/>
    </div>
  )
}

export default Home
