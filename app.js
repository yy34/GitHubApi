const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const UIClass = new ui();
eventListeners();
function eventListeners() {
  githubForm.addEventListener("submit", getdata);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getdata(e) {
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Enter a username");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        response.user.message === "Not Found"
          ? UIClass.showError("User Not Found...")
          : UIClass.showUserInfo(response.user);
        UIClass.showRepoInfo(response.repo);
      })

      .catch((error) => UIClass.showError(error));
  }
  UIClass.clearInput();
  e.preventDefault();
}
