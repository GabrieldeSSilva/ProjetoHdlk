export default class Menu {
  constructor(links) {
    this.links = document.querySelectorAll(links);
  }

  activeLink(index) {
    this.links.forEach(link => link.classList.remove('active'));
    this.links[index].classList.add('active');
  }

  addEventLink() {
    this.links.forEach((link, index) => {
      link.addEventListener('click', () => this.activeLink(index));
    });
  }

  init() {
    if (this.links) {
      this.addEventLink();
    }
  }
}
