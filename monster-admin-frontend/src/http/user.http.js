import http from "./index";

const apiUserLogin = ({ username, password }) => {
  return http.post("/login", {
    username,
    password,
  });
};

const apiUserInfo = () => {
  return http.get("/userInfo");
};

export { apiUserLogin, apiUserInfo };
