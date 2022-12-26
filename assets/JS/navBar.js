const checkMenu = document.getElementById("menu-burguer");
const menu = document.querySelector(".menu-option");

checkMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
