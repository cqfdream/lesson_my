- sqlserver mysql 关系型数据库
- mongodb NOSQL 存储JSON文档 杂乱无章

- blog 
    用户表
        登录 鉴权+role 分配
        id(自增 int 11)  username（varchar 255)    password(varchar
        不能存明文，hash 加盐)
        索引  Primary KEY(`id`) 查询更快

- create datebase blog;   新建blog 项目对应的数据库
    MySQL  3306端口  启动的数据服务
    Java/node/go 3000 http服务 sql请求
