项目名称
仿站电商项目
该项目是一个基于Web的前端应用，使用了Swiper库来创建滑动视图，以及Axios库进行HTTP请求。项目包含了用户登录、商品浏览、商品详情查看、个人中心等功能。

## 项目结构
├── axios.min.js               # Axios库的压缩版本
├── http.js                     # Axios实例配置
├── index.html                  # 首页HTML文件
├── login.html                  # 登录页面HTML文件
├── product-detail.html         # 商品详情页面HTML文件
├── products.html               # 商品列表页面HTML文件
├── pwd.html                    # 修改密码页面HTML文件
├── register.html               # 注册页面HTML文件
├── self.html                   # 个人中心页面HTML文件
├── swiper-bundle.min.js        # Swiper库的压缩版本
└── swiper-bundle.min.css       # Swiper库的样式文件


## 功能描述

1. **首页（index.html）**：展示轮播图和用户登录状态，未登录用户显示登录链接，已登录用户显示用户名和退出登录按钮。
2. **登录（login.html）**：用户可以输入用户名和密码进行登录。
3. **商品浏览（products.html）**：展示商品列表，用户可以浏览商品并点击查看详情。
4. **商品详情（product-detail.html）**：展示商品的详细信息，包括图片、价格、库存等。
5. **个人中心（self.html）**：用户可以查看和修改个人信息，如年龄、性别、昵称等。
6. **修改密码（pwd.html）**：用户可以修改账户密码。
7. **注册（register.html）**：新用户可以注册账户。

## 技术栈

- **HTML/CSS**：用于构建页面结构和样式。
- **JavaScript**：用于实现页面交互逻辑。
- **Axios**：用于发起HTTP请求。
- **Swiper**：用于创建响应式的滑动视图。

## 特点

- **响应式设计**：使用Swiper库，确保滑动视图在不同设备上都能良好展示。
- **用户认证**：通过localStorage管理用户登录状态。
- **动态内容加载**：使用Axios发起异步请求，动态加载用户信息和商品数据。

## 注意事项

- 项目中的Axios实例配置了请求拦截器，自动添加token到请求头，需要后端服务支持验证。
- Swiper库的使用需要确保图片资源路径正确，否则轮播图无法显示。
- 项目中的CSS样式可能需要根据实际项目需求进行调整。