import { http } from '../../http.js';

class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
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
  showAlert = (msg, className) => {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.posts-container');
    const posts = document.querySelector('#posts');
    container.insertBefore(div, posts);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  };
  clearAlert = () => {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  };
  clearFields = () => {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  };
  fillForm = data => {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
    this.changeFormState('edit');
  };
  clearIdInput = () => {
    this.idInput.value = '';
  };
  changeFormState = type => {
    const button = document.createElement('button');
    const cardForm = document.querySelector('.card-form');
    const formEnd = document.querySelector('.form-end');
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-block btn-warning';
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post it!';
      this.postSubmit.className = 'post-submit btn btn-block btn-primary';
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      this.clearIdInput();
      this.clearFields();
    }
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
  const id = document.querySelector('#id').value;
  const post = {
    title,
    body
  };
  if (post.title === '' || post.body === '') {
    ui.showAlert('All fields must be filled!', 'alert alert-danger');
  } else {
    id === ''
      ? http
          .post('http://localhost:3000/posts', post)
          .then(() => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
          })
          .catch(err => console.log(err))
      : http
          .put(`http://localhost:3000/posts/${id}`, post)
          .then(() => {
            ui.showAlert('Post updated', 'alert alert-success');
            ui.changeFormState('add');
            getPosts();
          })
          .catch(err => console.log(err));
  }
};

const enableEdit = e => {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const data = { id, title, body };

    ui.fillForm(data);
  }
};

const cancelEdit = e => {
  e.preventDefault();
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
};

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', enableEdit);
document.querySelector('.card-form').addEventListener('click', cancelEdit);
