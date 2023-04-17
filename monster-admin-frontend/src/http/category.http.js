import http from "./index";

const apiGetAllCategories = () => {
  return http.get("/categories");
};

const apiCreateCategory = (name) => {
  return http.post("/categories", { name });
};

const apiUpdateCategory = ({ id, name }) => {
  return http.put(`/categories/${id}`, { name });
};

const apiDeleteCategory = (id) => {
  return http.delete(`/categories/${id}`);
};


export { apiGetAllCategories, apiCreateCategory, apiUpdateCategory, apiDeleteCategory };
