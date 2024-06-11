

import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import request from '../request.js'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row title="Up Comming" fetchURL={request.UpcomingMovies}/>
    </div>
  )
}

export default Home
