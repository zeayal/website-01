# 基础镜像
FROM nginx:alpine

# 将本地 Vite 项目的 dist 目录下的文件复制到容器中的 /usr/share/nginx/html 目录下
COPY dist/ /usr/share/nginx/html/

# 复制自定义的 nginx 配置文件到容器中的 /etc/nginx/conf.d/default.conf 路径下
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx 服务
CMD ["nginx", "-g", "daemon off;"]
