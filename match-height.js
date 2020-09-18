export default class MatchHeight {
    /**
     * @classdesc 横並び要素の高さを揃える機能
     */
    constructor() {
        this.init();
        this.onResize();
    }
    /**
     * @descroption 要素の取得とスタイルの付与
     */
    init() {
        this.target = document.querySelectorAll('.js-match-height');
        this.targetHeightList = [];
        for (let i = 0; i < this.target.length; i++) {
            const height = this.target[i].clientHeight;
            this.targetHeightList.push(height);
        }
        //配列を引数に展開して最大値を求める
        const maxHeight = Math.max.apply(null, this.targetHeightList);
        for (let i = 0; i < this.target.length; i++) {
            this.target[i].style.height = maxHeight + 'px';
        }
    }
    /**
     * @descroption リサイズイベント
     */
    onResize() {
        window.addEventListener('resize', () => {
            for (let i = 0; i < this.target.length; i++) {
                this.target[i].removeAttribute('style');
            }
            this.init();
        });
    }
}
