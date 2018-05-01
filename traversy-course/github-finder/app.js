const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  let userText = e.target.value;

  if (userText !== '') {
    console.log(userText);
  }
});
