##  后端接口项目结构参考

https://github.com/geshan/expressjs-structure

## Day1


增删改给管理后台使用 monster-admin-frontend  （使用antd或者mui快速搭建）
查主要提供给前台使用 monster-frontend （使用next.js 搭建）

### ERD 设计

post_catogory 文章分类表

- id: (int) 主键
- name: (VARCHAR) 分类名称

post 文章表

- id: (int) 主键
- category_id: (int) 分类id 外键关联 post_catogory.id
- title: (VARCHAR) 文章标题
- content: (TEXT) 文章内容
- author: (VARCHAR) 作者
- is_deleted: (int) 是否删除
- is_draft: (int) 是否是草稿
- is_public: (int) 是否公开
- created_at: (DATETIME) 创建时间
- updated_at: (DATETIME) 更新时间
- photo_thumb: (VARCHAR, 255) 图片缩略图

## DAY2 

### 在mysql中创建表

```sql

-- 创建文章分类表
CREATE TABLE `post_category` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

-- 填充数据
INSERT INTO `post_category` VALUES (1, '技术'), (2, '生活'), (3, '随笔');


-- 创建文章表
CREATE 	TABLE `post` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `category_id` INT(11) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `is_deleted` INT(1) NOT NULL DEFAULT 0,
    `is_draft` INT(1) NOT NULL DEFAULT 0,
    `is_public` INT(1) NOT NULL DEFAULT 1,
    `created_at` DATETIME NOT NULL DEFAULT(CURRENT_TIMESTAMP),
    `update_at` DATETIME NOT NULL DEFAULT(CURRENT_TIMESTAMP) ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `category_id` (`category_id`), -- 这里不能使用 UNIQUE KEY，因为有多个文章可以属于同一个分类
    CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `post_category` (`id`)
);

-- 填充数据
INSERT INTO `post` VALUES (1, 1, 'nodejs', 'nodejs是一个基于Chrome V8引擎的JavaScript运行时', 'geshan', 0, 0, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00')
```

### 在 monster-backend 里链接mysql数据库，创建对应的models 和接口，对数据库进行增删改查

1.连接 mysql 数据库 报错

  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true

解决方法如下：
```js
    通过命令行进入解压的mysql根目录下。
    登陆数据库 
    mysql -uroot -p
    输入root的密码 
    Enter password: ******
    更改加密方式（原样拷贝到命令窗中） 
    mysql> ALTER USER 'root'@'%' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
    更改密码：该例子中 123456为新密码 
    mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
    刷新： 
    mysql> FLUSH PRIVILEGES;
 ```


 ### 理解 restful api 规范

 增删改查对应的 http 请求方法

 /posts
 /posts/:id

 ## 尝试使用 mysql2 代替 mysql 包

 连不上mysql居然是因为我把 .env 文件给删除了。一般不要把.env文件提交到git仓库里，因为里面有敏感信息

 ### 第三节接着学接口逻辑

| 请求方法 | 请求路径      | 作用                           |
| -------- | ------------- | ------------------------------ |
| post     | /api/v1/posts | 创建一个接口，用来新增一篇文章 |
| get      | /api/v1/posts | 获取所有文章                   |
| put      | /api/v1/posts | 更新一篇文章                   |
| delete   | /api/v1/posts | 删除一篇文章                   |

已完成以上接口，curl 测试成功


### 创建用户表

1.完成用户登陆接口

2.完成验证用户是否登陆中间件

3.已登录的用户可以查询用户列表