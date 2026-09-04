import React from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import Header from './pages/CreatePost'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App=()=> {
  return (

  <Router>
<Routes>
<Route path='/create-post' element={<CreatePost/>}/>
<Route path='/feed' element={<Feed/>}/>


</Routes>
  </Router>
  )
}

export default App
