import { http } from '../../http.js';

class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postInput = document.querySelector('.post-submit');
    this.forState = 'add';
  }
  showPosts = posts => {
    let output = '';

    posts.forEach(post => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
      `;
    });
    this.post.innerHTML = output;
  };
}

const ui = new UI();

const getPosts = () => {
  http
    .get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => {
      console.log(err);
    });
};

document.addEventListener('DOMContentLoaded', getPosts);
