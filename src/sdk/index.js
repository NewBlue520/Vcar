export default {
  isApp: navigator.userAgent.indexOf('vue_apicloud') > 0,
  isAndroid: /android/gi.test(navigator.appVersion.toLocaleLowerCase())
}
