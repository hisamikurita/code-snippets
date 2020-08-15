export default class SmoothScroll {
  constructor(clickElm) {
    this.clickElm = clickElm;
    this.targetId = null;
    this.targetElm = null;
    this.rectTop = 0;
    this.offsetTop = 0;
    this.top = 0;
    //固定ヘッダーの高さ
    this.buffer = 138;
  }
  init() {
    [...this.clickElm].forEach((target) => {
      target.addEventListener('click', (e) => {

        //デフォルトのイベントを無効にする
        e.preventDefault();

        //ターゲットのID・要素を取得
        this.targetId = target.hash;
        this.targetElm = document.querySelector(this.targetId);

        // 画面上部から要素までの距離
        this.rectTop = this.targetElm.getBoundingClientRect().top;

        // 現在のスクロール距離
        this.offsetTop = window.pageYOffset;

        this.top = this.rectTop + this.offsetTop - this.buffer;

        window.scrollTo({
          top: this.top,
          behavior: "smooth"
        });
      });
    });
  }
}