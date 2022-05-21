/* Funtion for header  */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/hamburguer.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/closeIcon.svg";
  }
}
/* Funtion for header  */


/*  Funtion for form (input)  */
document.querySelectorAll(".text-input").forEach((element) => {
  element.addEventListener("blur", (event) => {
    if (event.target.value != "") {
      event.target.nextElementSibling.classList.add("filled");
    } else {
      event.target.nextElementSibling.classList.remove("filled");
    }
  });
});
/*  Funtion for form (input)  */