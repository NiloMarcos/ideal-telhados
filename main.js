/* Funtion for header
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/hamburguer.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/closeIcon.svg";
  }
}*/
/* Funtion for header  */

class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animatedLinks() {
    this.navLinks.forEach((link) => {
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animatedLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavBar.init();



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