# 容器化部署前端应用


访问地址：http://123.60.166.230/monster-admin-front


要在 Docker 中部署前端应用程序，并访问后端容器的端口，你可以将前端和后端容器连接在同一个网络中，并使用网络别名来访问后端服务。以下是一个基本的示例：

创建一个 Docker 网络：docker network create my-network
运行后端服务容器（假设运行在 3000 端口）并加入网络：docker run --name backend-service --network my-network -d my-backend-image
运行前端应用程序容器，并将其连接到相同的网络：docker run --name frontend-app --network my-network -p 80:80 -d my-frontend-image

其中，my-backend-image 和 my-frontend-image 分别为后端和前端镜像所对应的名称。

在前端应用程序中使用后端服务的地址时，可以使用容器的别名作为主机名。例如，在前端应用程序中可以使用 http://backend-service:3000 来代表后端服务的地址。
请注意，这里的 3000 是容器内部的端口号。在容器外部访问后端服务时需要使用映射的端口，例如，如果在步骤 2 中映射了容器端口到主机端口 4000，则可以使用 http://backend-service:4000 访问后端服务。

通过这种方式，你可以将多个 Docker 容器连接起来，并在容器间进行通信，同时使用容器别名来实现简单的服务发现和访问。