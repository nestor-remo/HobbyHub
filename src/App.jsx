import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import CreatePost from './pages/CreatePost'
import ReadPosts from './pages/ReadPosts'
import EditPost from './pages/EditPost'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  let element = useRoutes([
    {
      path: '/',
      element: <ReadPosts data={posts} />
    },
    {
      path: '/new',
      element: <CreatePost />
    },
    {
      path: '/edit/:id',
      element: <EditPost data={posts}/>
    }
  ]);

  return (
    <div className='App'>
      <h1> Welcome to the Straw Hat Crew! </h1>
      <Link to='/'><button>See all Crewmates!</button> </Link>
      <Link to='/new'><button>Add a new Crewmate!</button> </Link>
      {element}

    </div>
  )
}

export default App
