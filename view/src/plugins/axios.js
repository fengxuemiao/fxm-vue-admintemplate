import axios from "axios";
import {
  Message
} from 'element-ui'
import {
  getCookie
} from "../unilts/index"
axios.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  if (config.url != "/user/login") {
    config.headers["sid"] = getCookie("sid");
    if (config.method == "post") {
      //  config.data = qs.stringify(config.data);
    }
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

axios.interceptors.response.use(function (res) {
  if (res.config.url == "/user/login") {
    return res.data;
  }
  if (res.config.url == "/user/logout") {
    return res.data;
  }
  if (res.data.state == 200) {
    return res.data;
  } else {
    Message.closeAll();
    Message({
      showClose: true,
      duration: 1500,
      message: res.data.message,
      type: 'error'
    });
    return false;
  }
}, function () {
  Message.closeAll();
  Message({
    showClose: true,
    duration: 1500,
    message: '网络出错！',
    type: 'error'
  });
})
export default axios;