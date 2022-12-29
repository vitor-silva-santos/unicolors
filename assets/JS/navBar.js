const checkMenu = document.getElementById("menu-burguer");
const menu = document.querySelector(".menu-option");
const main = document.querySelector(".main");

checkMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

main.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    checkMenu.checked = false;
  }
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
  checkMenu.checked = false;
});
