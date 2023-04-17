# 基础镜像
FROM node:latest

# 安装pnpm
RUN npm i -g pnpm

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json 到容器中
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 将本地文件都拷贝到容器中
COPY . .

# 构建生产环境代码
RUN pnpm run build

# nginx 配置
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



