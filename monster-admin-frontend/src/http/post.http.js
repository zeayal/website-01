import http from "./index";

const apiGetPostList = () => {
  return http.get("/posts");
};

const apiCreatePost = (body) => {
  return http.post("/posts", body);
};

const apiGetPostDetail = (id) => {
  return http.get(`/posts/${id}`);
};

const apiUpdatePostDetail = (body) => {
  return http.put(`/posts/${body.id}`, body);
};

const apiDeletePost = (id) => {
  return http.delete(`/posts/${id}`);
};

export {
  apiGetPostList,
  apiCreatePost,
  apiGetPostDetail,
  apiUpdatePostDetail,
  apiDeletePost,
};
