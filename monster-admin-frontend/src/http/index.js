import { message } from "antd";
import axios from "axios";

const http = axios.create({
  baseURL: "/api/v1",
  timeout: 6000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.response.use(
  (res) => {
    // status 200
    const { data } = res;
    if (data.code !== 0) {
      message.error(data.message);
    } else {
      // 200
      message.info(data.message)
    }
    return data;
  },
  (err) => {
    // status 401 500...
    const { status, data } = err.response || {};
    if (status === 401) {
      // 需要重定向到登陆页面
      window.location.href = "/monster-admin-frontend/login";
    } else {
      message.error("请求失败, 服务端错误");
    }
  }
);

export default http;
