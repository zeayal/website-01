# 使用 Node 官方镜像作为基础镜像
FROM node:alpine

# 设置工作目录
WORKDIR /app

# 将应用代码复制到容器中
COPY . .

# 安装依赖
RUN npm install

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 8000

# 启动应用
CMD [ "npm", "start" ]
