export default class SlideAccordion {
    /**
    * @classdesc GSAP3xJavaScript スライドアニメーション付きアコーディオン機能
    */
    constructor() {
        this.init();
        this.onClick();
    }
    /**
    * @descroption 要素の取得と設定
    */
    init() {
        this.target = document.querySelectorAll('');
        this.content = document.querySelectorAll('');
        this.duration = 0.4;
    }
    /**
    * @descroption ターゲットをクリックした時、スライドアニメーションが発火する
    */
    onClick() {
        for (let i = 0; i < this.target.length; i++) {
            this.target[i].addEventListener('click', () => {
                if (this.target[i].classList.contains('is-active')) {
                    this.target[i].classList.remove('is-active');
                    gsap.to(this.content[i], {
                        duration: this.duration,
                        height: 0,
                    });
                }
                else {
                    this.target[i].classList.add('is-active');
                    gsap.to(this.content[i], {
                        duration: this.duration,
                        height: 'auto',
                    });
                }
            });
        }
    }
}
