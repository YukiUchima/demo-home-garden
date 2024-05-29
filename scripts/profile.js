"use strict";

import users from "../data/users.js";

document.addEventListener("DOMContentLoaded", () => {
  let uid = sessionStorage.getItem("userID");

  const logoutBtn = document.querySelector(".logout-btn");

  logoutBtn.addEventListener("click", () => {
    if (sessionStorage.getItem("loggedIn")) {
      sessionStorage.setItem("loggedIn", false);
      sessionStorage.setItem("userID", "");
    }
    window.location.href = "index";
  });

  if (uid) {
    setProfile(uid);
  }
});

function setProfile(uid) {
  users.forEach((user) => {
    if (user.id == uid) {
      setAvatar(user.avatar);
    }
  });
}

function setAvatar(imgFile) {
  const avatar = document.querySelector(".profile-aside-left > img");
  avatar.src = imgFile;
}
