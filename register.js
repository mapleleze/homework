const form = document.querySelector('form');
const name = document.querySelector('.name');
const pwd = document.querySelector('.pwd');
const rpwd = document.querySelector('.rpwd');
const nickname = document.querySelector('.nickname');
const span = document.querySelector('span');

form.addEventListener('submit', async function (e) {
  // 阻止表单默认提交
  e.preventDefault();
  if (name.value === '' || pwd.value === '' || rpwd.value === '' || nickname.value === '') {
    alert('请填写完整信息');
    return;
  }
  if (pwd.value !== rpwd.value) {
    alert('两次密码输入不一致');
    return;
  }
  // 发送请求
  let res = await http.post('/users/register', { username: name.value, password: pwd.value, rpassword: rpwd.value, nickname: nickname.value });
  if (res.data.code != 1) {
    alert('注册失败');
  } else {
    alert("注册成功");
    location.href = './login.html';
  }
});