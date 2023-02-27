import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Post from './components/Post.js';
import Pagination from './components/Pagination.js';
import './App.css';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  useEffect(() =>{
    const fetchPosts = async () => {
      setLoading(true);
      let url = 'https://jsonplaceholder.typicode.com/users';
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App mt-5">
      <h1 className='text-primary mb-3'>White Pages</h1>
      <header className="App-header">
        <Post posts={currentPosts} loading={loading} />
        <Pagination 
          postPerPage={postsPerPage} 
          totalPosts={posts.length} 
          paginate={paginate}
        />
      </header>

    </div>
  );
}

export default App;
