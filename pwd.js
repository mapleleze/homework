const form = document.querySelector('form');
const oldPassword = document.querySelector('.oldPassword');
const newPassword = document.querySelector('.newPassword');
const rNewPassword = document.querySelector('.rNewPassword');

// 封装一个函数来用提交修改密码的发送请求
async function updatePassword() {
  if (oldPassword.value === '' || newPassword.value === '' || rNewPassword.value === '') {
    alert('请填写完整信息');
    return;
  }
  if (newPassword.value !== rNewPassword.value) {
    alert('两次密码不一致');
    return;
  }
  let id = localStorage.getItem('uid');
  let res = await http.post('/users/rpwd', { id: id, oldPassword: oldPassword.value, newPassword: newPassword.value, rNewPassword: rNewPassword.value });
  console.log(res.data.code);
  if (res.data.code == 1) {
    alert(res.data.message);
    location.href = './login.html';
  } else {
    alert(res.data.message);
  }
}
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  await updatePassword();
});