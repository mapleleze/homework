let form = document.querySelector('form');
let nameInp = document.querySelector('.username');
let ageInp = document.querySelector('.age');
let nickInp = document.querySelector('.nickname');
let genderSel = document.querySelector('select');

async function updateUserInfo() {
  // 用户是否登录
  let { status, info, id } = await checkUserLogin();

  if (status != 1) {
    location.href = './login.html';
    return;
  };

  // 将用户信息渲染到页面中
  console.log(status, info);

  nameInp.value = info.username;
  ageInp.value = info.age;
  genderSel.value = info.gender;
  nickInp.value = info.nickname;

  console.log(nameInp.value, ageInp.value, genderSel.value, nickInp.value);

  // 绑定表单提交事件
  form.addEventListener('submit', async e => {
    e.preventDefault(); //阻止默认提交事件
    
    let data = { id };
    if (ageInp.value) { data.age = ageInp.value; };
    if (genderSel.value) { data.gender = genderSel.value; };
    if (nickInp.value) { data.nickname = nickInp.value; };
    console.log(nameInp.value, ageInp.value, genderSel.value, nickInp.value);

    let r = await http.post('/users/update', data);
    console.log(r.data);
    if (r.data.code != 1) { return alert('修改失败'); }

    alert('修改成功');
    location.href = './index.html';
  })
}

updateUserInfo();