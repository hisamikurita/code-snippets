export default class Tab {
  constructor() {
    this.init();
    this.onClick();
  }
  init(){
    this.btn = document.querySelectorAll('.service-faq__dl');
    this.content = document.querySelectorAll('.service-faq__dd');
    this.duration = 0.4;
  }
  onClick(){
    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i].addEventListener('click', () => {
        if (this.btn[i].classList.contains('is-active')) {
          this.btn[i].classList.remove('is-active');
          gsap.to(this.content[i], {
            duration: this.duration,
            height: 0,
          });
        }
        else {
          this.btn[i].classList.add('is-active');
          gsap.to(this.content[i], {
            duration: this.duration,
            height: 'auto',
          });
        }
      });
    }
  }
}