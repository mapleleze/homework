let pEles = document.querySelectorAll('p');

// 校验用户是否登录
async function checkLoginStatus() {
  let { status, info, id } = await checkUserLogin();

  // 未登录
  console.log(status);

  if (status != 1) {
    pEles[0].classList.add('active');
    pEles[1].classList.remove('active');
    return;
  }
  // 已登录
  pEles[0].classList.remove('active');
  pEles[1].classList.add('active');

  pEles[1].children[0].innerHTML = info.nickname;

  pEles[1].addEventListener('click', ({ target }) => {
    console.log(target);
    if (target.className == 'self') {
      location.href = './self.html';
    }

    if (target.className == 'logout') {
      if (!confirm('确定退出登录吗?')) return;

      // 本地存储id移除
      localStorage.removeItem('uid');
      localStorage.removeItem('token');

      http.get('/users/logout', { params: { id } })

      pEles[0].classList.add('active');
      pEles[1].classList.remove('active');
    }
  });
}
checkLoginStatus();