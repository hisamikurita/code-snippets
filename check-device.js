class checkDevice {
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

  isSp() {
    if (this.sp) {
      return true;
    }
    else {
      return false;
    }
  }

  isTab() {
    if (this.tab) {
      return true;
    }
    else {
      return false;
    }
  }

  isTouch() {
    if (this.touch) {
      return true;
    }
    else {
      return false;
    }
  }

  isMSIE() {
    if (this.msie) {
      return true;
    }
    else {
      return false;
    }
  }

  isEdge() {
    if (this.edge) {
      return true;
    }
    else {
      return false;
    }
  }

  isSafari() {
    if (this.safari) {
      return true;
    }
    else {
      return false;
    }
  }

  isAndroid() {
    if (this.android) {
      return true;
    }
    else {
      return false;
    }
  }
}

const CheckDevice = new checkDevice();
export default CheckDevice;