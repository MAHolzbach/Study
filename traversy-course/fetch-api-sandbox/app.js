document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getExternal);

//Get text file
function getText() {
  let output = document.getElementById("output");
  fetch("test.txt")
    .then(res => {
      return res.text();
    })
    .then(data => {
      output.innerHTML = data;
    })
    .catch(err => {
      console.log(err);
    });
}
//Get JSON data
function getJSON() {
  let outputDiv = document.getElementById("output");
  fetch("posts.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      let output = "";
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      outputDiv.innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}
//Get external data
function getExternal() {
  let outputDiv = document.getElementById("output");
  fetch("https://api.github.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => {
      let output = "";
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      outputDiv.innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}
