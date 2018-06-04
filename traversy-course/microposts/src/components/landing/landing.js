import { http } from '../../http.js';

const getPosts = () => {
  http
    .get('http://localhost:3000/posts')
    .then(data => console.log(data))
    .cathc(err => {
      console.log(err);
    });
};

document.addEventListener('DOMContentLoaded', getPosts);
