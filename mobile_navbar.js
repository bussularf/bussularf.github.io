class MobileNavbar {
  constructor(mobileMenu, menu, menuIten) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.menu = document.querySelector(menu);
    this.menuIten = document.querySelectorAll(menuIten);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.menu.forEach((link, index) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = 'menuFade 0.5s ease forrwards ${index /7 + 0.3}s');
    });
  }

  handleClick() {
    this.menu.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks
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

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".menu",
  ".menu-iten a"
);
mobileNavbar.init();