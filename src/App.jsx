import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  function getPosts() {
    axios
      .get('http://localhost:3000/posts') 
      .then((response) => {
        const postsContainer = document.querySelector('.postsContainer');
        postsContainer.innerHTML = '';
        console.log(response.data)
        response.data.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.className = 'post';
          postElement.innerHTML = `<h4 class="postTitle">${post.title}</h4><p class="postBody">${post.body}</p>`;
          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        const postsContainer = document.querySelector('.postsContainer');
        postsContainer.innerHTML = '<p>Error fetching posts. Please try again later.</p>';
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="wrap">
      <h3>JSONplaceholder posts:</h3>
      <div className="postsContainer"></div>
    </div>
  );
}

export default App;
