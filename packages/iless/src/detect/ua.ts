import detect from '@ali/anima-detect';

export default  {
  isAfwealth: function() {
    let ua = window.navigator.userAgent
    return /AFWealth/i.test(ua)
  },

  isQQ: function() {
    let ua = window.navigator.userAgent.toLowerCase()
    return /qq/i.test(ua)
  },

  isWeiXin: function() {
    let ua = window.navigator.userAgent
    return /MicroMessenger/i.test(ua)
  },

  isWeibo: function() {
    let ua = window.navigator.userAgent.toLowerCase()
    return /weibo/i.test(ua)
  },

  isAlipay: function() {
    let ua = window.navigator.userAgent
    return /AlipayClient/i.test(ua)
  },

  isAndroid: function() {
    let ua = window.navigator.userAgent
    return /Android|Linux/i.test(ua)
  },

  isIOS: function() {
    let ua = window.navigator.userAgent
    return /iPhone|iPod|iPad/i.test(ua)
  },

  isUC: function() {
    let ua = window.navigator.userAgent
    return /UCBrowser|UCBS|UCWEB/i.test(ua)
  },
  /**
   * 获取容器版本
   * @return {string} 版本号
   */
  appVersion: function() {
    let version = '';

    if (detect.app && detect.app.version) {
      version = detect.app.version;
    }

    return version;
  },
  /**
   * [compareVersion description] 比较版本号大小
   * @param  {[type]} versionA 目标版本A
   * @param  {[type]} versionB    版本B
   * @return {[type]} [description]
   */
  // versionB > versionA  => 1
  // versionB < versionA => -1
  // versionA === versionB => 0
  compareVersion: function (versionA, versionB) {
    const versionAarr = versionA.split('.');
    const versionBarr = versionB.split('.');

    for (let i = 0, n1, n2; i < versionBarr.length; i++) {
      n1 = parseInt(versionAarr[i], 10) || 0;
      n2 = parseInt(versionBarr[i], 10) || 0;

      if (n1 > n2) return -1;
      if (n1 < n2) return 1;
    }

    return 0;
  }
}
