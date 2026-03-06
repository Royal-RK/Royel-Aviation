const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

let open = true;

menuBtn.addEventListener("click", () => {
  if (open == true) {
    menuBtn.classList.remove("show");
    navMenu.style.right = "-100%";
    document.body.classList.remove("no-scroll");
    open = false;
  } else {
    menuBtn.classList.add("show");
    navMenu.style.right = "0";
    document.body.classList.add("no-scroll");
    open = true;
  }
});
