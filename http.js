// 创建axios实例
const http = axios.create({
    baseURL: 'http://localhost:8888',
});

http.interceptors.request.use(function (config) {

    if (localStorage.getItem('token')) {
        config.headers['authorization'] = localStorage.getItem('token');
    }
    return config;
}, function (error) {

    return Promise.reject(error);
});

async function checkUserLogin() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('uid');
    if (!token || !id) return { status: 0, msg: '用户未登录' }
    let { data: { code, info } } = await http.get('/users/info', { params: { id } })
    if (code != 1) return { status: 0, msg: '用户未登录' };
    return {status: 1,msg: '用户已登录',token, id, info}
}