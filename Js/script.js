const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

let open = true;

menuBtn.addEventListener("click", () => {
  if (open == true) {
    menuBtn.classList.remove("show");
    navMenu.style.right = "-100%";
    open = false;
  } else {
    menuBtn.classList.add("show");
    navMenu.style.right = "0";
    open = true;
  }
});