let form = document.querySelector('form');
let errBox = document.querySelector('.error');
let nameInp = document.querySelector('.username');
let pwdInp = document.querySelector('.pwd');

form.addEventListener('submit', async event => {
  event.preventDefault();
  let username = nameInp.value;
  let password = pwdInp.value;
  if (!username || !password) return alert('请完整填写表单')
  let res = await http.post('/users/login', { username: username, password: password });
  console.log(res.data);
  if (res.data.code != 1) {
    errBox.style.display = 'block';
    return;
  }
  errBox.style.display = 'none';
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('uid', res.data.user.id);
  console.log(status)
  alert('登录成功');
  location.href = './index.html'
});