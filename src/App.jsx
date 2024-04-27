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
      <div className='header'>
          <h1> Welcome to MangaHub! </h1>
          <div>
            <Link to='/'><button>Home</button> </Link>
            <Link to='/new'><button>Create Post</button> </Link>
          </div>
      </div>
        {element}
    </div>
  );
}

export default App;
