import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import CreatePost from './pages/CreatePost'
import ReadPosts from './pages/ReadPosts'
import EditPost from './pages/EditPost'
import Detail from './pages/Detail'
import { supabase } from './client'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  // Filter posts based on search query
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

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
    },
    {
      path: '/detail/:id',
      element: <Detail data={posts}/>
    }
  ]);

  return (
    <div className='App'>
      <div className='header'>
          <h1> Welcome to HobbyHub! </h1>
          <input type="text" id="search" placeholder="Search" name="search" value={search} onChange={(event) => setSearch(event.target.value)} />
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
