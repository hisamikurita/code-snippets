import CheckDevice from '../utility/check-device';

export default class Parallax {
  constructor(target) {
    if (target instanceof Node) {
      this.target = target;
    } else {
      this.target = document.querySelector(target);
    }

    const speed = this.target.dataset.speed;
    const ratio = CheckDevice.isSp() ? speed * 0.5 : speed;

    const onScroll = () => {
      gsap.to(this.target, {
        duration: 0.5,
        ease: 'power2.out',
        y: this.target.getBoundingClientRect().top * ratio
      });
    };

    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { capture: false, passive: true });
        } else {
          window.removeEventListener('scroll', onScroll, { capture: false, passive: true });
        }
      });
    }, {
      rootMargin: '0px'
    }).observe(this.target);
  }
}