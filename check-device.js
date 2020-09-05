class checkDevice {
  /**
   * @classdesc ブラウザ・デバイス判定機能
   */
  constructor() {
    const ua = navigator.userAgent.toLowerCase();

    this.sp = ua.indexOf('iphone') !== -1 || ua.indexOf('android') !== -1 && ua.indexOf('mobile') !== -1;

    this.tab = !this.sp && (this.ipad || ua.indexOf('android') !== -1);

    this.ipad = ua.indexOf('ipad') !== -1 || (ua.indexOf('Macintosh') !== -1 && 'ontouchend' in document);

    this.touch = ('ontouchend' in document);

    this.msie = ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1;
    
    this.edge = ua.indexOf('edge') !== -1;

    this.safari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;

    this.android = ua.indexOf('android') !== -1;
  }

  /**
   * @description SPデバイスだったときは true を返す
   */
  isSp() {
    if (this.sp) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Androidデバイスだったときは true を返す
   */
  isAndroid() {
    if (this.android) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description タブレットデバイスだったときは true を返す
   */
  isTab() {
    if (this.tab) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description タッチイベントが可能だったときは true を返す
   */
  isTouch() {
    if (this.touch) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description IEブラウザだったときは true を返す
   */
  isMSIE() {
    if (this.msie) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Edgeブラウザだったときは true を返す
   */
  isEdge() {
    if (this.edge) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Safariブラウザだったときは true を返す
   */
  isSafari() {
    if (this.safari) {
      return true;
    }
    else {
      return false;
    }
  }
}

const CheckDevice = new checkDevice();
export default CheckDevice;