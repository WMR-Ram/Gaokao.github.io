window.onload = function(){
var weibo = document.getElementsByClassName('weibo');
var wechat = document.getElementsByClassName('wechat');
var app = document.getElementsByClassName('app');
var firstLi = document.getElementsByClassName('first-li'); // 头部top的app下载元素
var picWe = document.getElementById('pic-we');
var picWx = document.getElementById('pic-wx');
var picApp = document.getElementById('pic-app');
var dowloadApp = document.getElementById('dowload-app'); //头部app下载的悬停出现的图片
var idValue = document.getElementsByClassName('identification');//获取账号输入元素
var register = document.getElementsByClassName('register');//获取登陆元素
var pwd = document.getElementById('login_password'); //隐藏密码框
var pwd2 = document.getElementById('login_password2');//
var strong = document.getElementById('str');
weibo[0].onmouseover = function () {
    picWe.style.display = 'block';
};
weibo[0].onmouseout = function () {
    picWe.style.display = 'none';
}
wechat[0].onmouseover = function () {
    picWx.style.display = 'block';
};
wechat[0].onmouseout = function () {
    picWx.style.display = 'none';
}
app[0].onmouseover = function () {
    picApp.style.display = 'block';
};
app[0].onmouseout = function () {
    picApp.style.display = 'none';
}
register[0].onclick = function() {
    if(idValue[0].value.length !== 11 || idValue[0].value == '请输入您的手机号') {
        alert('请输入您正确的手机号');
    }else if (pwd.value.length < 6 || pwd.value.length > 16) {
        alert('请输入您正确的密码');
    }else if (pwd2.value !== pwd.value) {
        console.log(regPwd, regPwd2);
        alert('二次输入密码错误');

    }else if (/^1[29]\d{9}$/.test(idValue[0].value)) {
        alert('不是正确的手机号');
    }
    else {
        var reg = /^1[345678]\d{9}$/;
        var regPwd = /\S/;
        var regPwd2 = pwd2.value;
        if(reg.test(idValue[0].value) && regPwd.test(pwd.value) && regPwd2 === pwd.value) {
            alert('注册成功');
        }
    }
    return false;
}
pwd.onkeyup = function () {
    var count = 0;
    if (/\d/.test(this.value)) {
        count++;
    }
    if (/[a-z]/.test(this.value)) {
        count++;
    }
    if (/[A-Z]/.test(this.value)) {
        count++;
    }
    if (/\W/.test(this.value)) {
        count++;
    }
    strong.className = 'strong' + count;
}
}