import CheckDevice from '../../utiity/check-device';

export default class EquolHeight {
  constructor() {
    if (CheckDevice.isSp()) {
      return;
    }
    this.init();
    this.onResize();
  }
  init() {
    this.target = document.querySelectorAll('.js-equol-height');
    this.targetHeightList = [];
    for (let i = 0; i < this.target.length; i++) {
      const height = this.target[i].clientHeight;
      this.targetHeightList.push(height);
    }
    const maxHeight = Math.max.apply(null, this.targetHeightList);
    for (let i = 0; i < this.target.length; i++) {
      this.target[i].style.height = maxHeight + 'px';
    }
  }
  onResize() {
    window.addEventListener('resize', () => {
      for (let i = 0; i < this.target.length; i++) {
        this.target[i].removeAttribute('style');
      }
      this.init();
    });
  }
}