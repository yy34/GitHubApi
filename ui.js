class addUI {
  constructor() {
    this.profileDiv = document.getElementById("profile");
    this.repoTable = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.trElement = document.getElementById("tRepos");
    this.cardBody = document.querySelector(".card-body");
  }

  clearInput() {
    this.inputField.value = "";
  }
  show;

  showUserInfo(user) {
    this.profileDiv.innerHTML = `
       <div class="d-flex p-2 bd-highlight justify-content-center">
        <div class="row justify-content-center">
        <div class="col-md-8">
        <div id="fullName" class="text-center"><strong>${user.name}</strong></div>
        <div id="bio" class="text-center">${user.bio}</div>
          <a href="${user.html_url}" target = "_blank">
           <img class="rounded mx-auto d-block w-75 p-3" src="${user.avatar_url}"> </a>
           
           
          
          </div>
        <div class="col-md-8">
                  <p class="btn btn-light">
                  Takipçi  <span class="badge badge-light">${user.followers}</span>
            </p>
                  <p class="btn btn-light">
                  Takip Edilen  <span class="badge badge-light">${user.following}</span>
               </p> 
                  <p class="btn btn-light">
                  Repolar  <span class="badge badge-light">${user.public_repos}</span>
              </p>
                      
                  
              </div>   
              
        </div>
  </div> 
      `;
  }

  showError(message) {
    const div = document.createElement("div");
    div.className = "alert alert-light";
    div.textContent = message;
    this.cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 2000);
  }

  showRepoInfo(repos) {
    this.trElement.innerHTML = "";
    repos.forEach((repo) => {
      this.trElement.innerHTML += `
                  <tr>
                    <td>${repo.name}</td>
                  <td> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></td>
                    <td>${repo.stargazers_count}</td>
                    <td>${repo.forks_count}</td>
                </tr>
              
          `;
    });
  }
}
