const app = getApp();import common from 'common.js';const url = "wxapp/order/notify"; const ygurl = "wxapp/order/ygnotify"; function notify() { var urlData = {}; urlData['code'] =200; urlData['message'] = '成功'; urlData['data'] = [{ 'url': app.globalData.apimain + url, 'title': '学习平台' }, { 'url': app.globalData.apimain + ygurl, 'title': '腰果' }]; return urlData } module.exports = { notify }