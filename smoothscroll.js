export default class SmoothScroll {
  /**
   * @classdesc 自作スムーススクロール機能
   */
  constructor() {
    this.init();
    this._getParam();
    this.onScroll();
    this.onResize();
  }
  /**
   * @descroption クラスメンバ変数の初期化
   */
  init() {
    this.clickElm = document.querySelectorAll('.js-smooth-scroll');
    this.targetId = null;
    this.targetElm = null;
    this.headerLength = 0;
    this.rectTop = 0;
    this.offsetTop = 0;
    this.top = 0;
    this.buffer = 0;
  }
  /**
   * @descroption パラメーターの取得
   */
  _getParam() {
    this.headerLength = document.querySelector('.header-pc').clientHeight;
    this.buffer = this.headerLength;
  }
  /**
   * @descroption ターゲットをクリックした時、スムーススクロールが発火する
   */
  onScroll() {
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

        // 画面上部から要素までの距離 + 現在のスクロール距離 - ヘッダーの高さ
        this.top = this.rectTop + this.offsetTop - this.buffer;

        window.scrollTo({
          top: this.top,
          behavior: "smooth"
        });
      });
    });
  }
  /**
   * @descroption リサイズイベント
   */
  onResize() {
    window.addEventListener('resize', () => {
      this._getParam();
    });
  }
}