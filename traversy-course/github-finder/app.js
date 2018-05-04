const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  let userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show error alert
        ui.showAlert('User not found.', 'alert alert-danger');
      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
