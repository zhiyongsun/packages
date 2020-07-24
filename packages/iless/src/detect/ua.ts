export default  {
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
}
