import React from 'react'

const Post = ({ posts, loading }) => {
    if (loading){
        return <h2>Loading...</h2>;
    }

  return (
    <ul className='list-group mb-4 list-group-flush'>
        {posts.map(post => (
            <>
            <li key={post.id} className='list-group-item fs-2 fw-bold'>
                {post.name}:
            </li>
            <li key={post.id} className='list-group-item fs-5'>
                Email: {post.email}
            </li>
            <li key={post.id} className='list-group-item fs-5'>
                Address: {post.address.street} {post.address.suite}, {post.address.city}, {post.address.zipcode}
            </li>
            <li key={post.id} className='list-group-item fs-5'>
                Phone Number: {post.phone}
            </li>
            <li key={post.id} className='list-group-item fs-5'>
                Website: {post.website}
            </li>
            </>
        ))}
    </ul>
  )
};

export default Post;