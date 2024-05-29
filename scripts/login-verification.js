import users from "../data/users.js";
import { toggleModal } from "./show-forms.js";

document.addEventListener("DOMContentLoaded", () => {
  let loggedInState = sessionStorage.getItem("loggedIn");
  const loginSubmitBtn = document.querySelector("#login-submit-button");
  const form = document.querySelector("#user-login-form > form");

  const userSignedIn = document.querySelector("#user-signed-in");
  const logoutBtn = document.querySelector(".logout-btn");
  const userSignedOut = document.querySelector("#user-signed-out");

  const failedLoginMsg = document.querySelector("#invalid-message");

  checkUserState(loggedInState);

  loginSubmitBtn.addEventListener("click", () => {
    // users database
    const loginData = new FormData(form);
    const data = Object.fromEntries(loginData);

    const usernameInput = data.username;
    const passwordInput = data.password;

    validateLogin(usernameInput, passwordInput);
  });

  function checkUserState(currentState) {
    if (sessionStorage.getItem("loggedIn") === "false") {
      userSignedIn.classList.add("hidden");
      userSignedOut.classList.remove("hidden");
    } else {
      userSignedIn.classList.remove("hidden");
      userSignedOut.classList.add("hidden");
    }
  }

  function validateLogin(username, password) {
    let foundUser = users.find((user) => user.userName === username);
    if (foundUser && foundUser.password === password) {
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("userID", foundUser.id);
      toggleModal();
      checkUserState(sessionStorage.getItem("loggedIn"));
      toggleError(failedLoginMsg, "off");
    } else {
      toggleError(failedLoginMsg, "on");
    }
  }

  logoutBtn.addEventListener("click", () => {
    if (sessionStorage.getItem("loggedIn")) {
      sessionStorage.setItem("loggedIn", false);
      sessionStorage.setItem("userID", "");
    }
    window.location.href = "index";
  });
});

export function toggleError(targetMsg, stateOfforOn) {
  if (stateOfforOn == "on") {
    targetMsg.classList.remove("hide");
  } else {
    targetMsg.classList.add("hide");
  }
}
