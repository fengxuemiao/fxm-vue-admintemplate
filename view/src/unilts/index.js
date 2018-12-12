const setCookie = function (key, value, exdays) {
  var exdate = new Date();//获取时间
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
  //字符串拼接cookie
  window.document.cookie = key + "=" + value + ";path=/;expires=" + exdate.toGMTString();
};
//读取cookie
const getCookie = function (name) {
  if (document.cookie.length > 0) {
    var arr = document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');//再次切割
      //判断查找相对应的值
      if (arr2[0] == name) {
        return arr2[1];//保存到保存数据的地方
      }
    }
  }
};
// //清除cookie
// function clearCookie() {
//   this.setCookie("", "", -1);//修改2值都为空，天数为负1天就好了
// };
export {
  setCookie,
  getCookie
}