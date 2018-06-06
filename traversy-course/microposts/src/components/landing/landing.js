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
          <a href='#' class="edit card-link" data-id="${
            post.id
          }"><i class="fa fa-edit"></i></a>
          <a href='#' class="delete card-link" data-id="${
            post.id
          }"><i class="fa fa-trash-alt"></i></a>
        </div>
      </div>
      `;
    });
    this.post.innerHTML = output;
  };
  showAlert = (msg, styleClasses) => {
    let alertCard = '';
  };
  clearAlert = () => {};
  clearFields = () => {
    const title = document.querySelector('#title');
    const body = document.querySelector('#body');

    title.value = '';
    body.value = '';
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

const submitPost = () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const post = {
    title,
    body
  };
  http
    .post('http://localhost:3000/posts', post)
    .then(() => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
};

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
