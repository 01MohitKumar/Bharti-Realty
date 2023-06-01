const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn img");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.src = isOpen ? "./images/close.png" : "./images/menu.png";
};
