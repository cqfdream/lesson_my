# 营销h5页面特效开发
- 招商银行

1. <!DOCTYPE html>
    html5 版本的声明

2. rotateX（90deg）  屏幕就是水平面，Z轴就是垂直屏幕  deg相当于度单位 顺逆时针
    rotateY
    rotateZ
    perspctive  视点  眼睛离屏幕的距离 远近 大小
    transform-style:perseve-3d

3. html 怎么看到静态页面(用户体验 越快越好)
    html结构 + css(样式) js晚一点 (交互，js中可能有DOM编程，style)  css可以并行
    - 下载html 文档
    - link script image...
    - 启动下载 css herf不会阻塞html下载
        script src  放在最后 会阻塞
        image src

4. chrome 浏览器内核 webkit
    IE 浏览器 edge
    mozilla
    360 如果本地装了chrome  webkit
    否则ms
    