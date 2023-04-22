
-- 创建用户表
CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `is_admin` TINYINT(1) NOT NULL DEFAULT '0',
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `user` (username, `password`, is_admin) VALUES ('admin', '123455', 1);

-- 创建文章分类表
CREATE TABLE `post_category` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 填充数据
INSERT INTO `post` VALUES (1, 1, 'nodejs', 'nodejs是一个基于Chrome V8引擎的JavaScript运行时', 'geshan', 0, 0, 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00')