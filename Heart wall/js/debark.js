$(function () {
    //App下载鼠标 显示二维码
    $('.first').mouseenter(function () {
        $(this).children('img').stop().slideDown();
    });
    $('.first').mouseleave(function () {
        $(this).children('img').stop().slideUp();
    });
    //设置slider的背景图
    var $lisSli = $('.slider  li');
    for (var i = 0; i < $lisSli.length; i++) {
        $($lisSli[i]).css({
            backgroundImage: 'url(./images/' + (i + 1) + '.jpg)',
            height: 480,
        });
    }
    //地区选择 
    $('.area-choose').mouseover(function () {
        $(this).find('ul').stop().slideDown();
    })
    $('.area-choose').mouseout(function () {
        $(this).find('ul').stop().slideUp();
    });
    //area-choose的替换 
    // var $lis1 = $('.area-choose li');
    // console.log($lis1)
    // $lis1.each(function(i,ele){
    //     ele.click(function(){
    //         console.log('aaa')
    //          $('.area-choose span').text($(this).children().text());
    //     })
    // })
    var location = $('.area-choose span'), lis = $('.area-choose li');
    $('.area-choose ul').on('click', 'li', function () {
        location.text($(this).children().text());
    });
    //账号部分
    $(".identification").focus(function () {
        if ($(this).val() == "请输入您的手机号") {
            $(this).val("");
        }
    });
    $(".identification").blur(function () {
        if ($(this).val() == "") {
            $(this).val("请输入您的手机号");
        }
    });
    // 密码部分
    $('#login_showPwd').focus(function () {
        var text_value = $(this).val();
        if (text_value == this.defaultValue) {
            $('#login_showPwd').hide();
            $('#login_password').show().focus();
        }
    });
    $('#login_password').blur(function () {
        var text_value = $(this).val();
        if (text_value == "") {
            $('#login_showPwd').show();
            $('#login_password').hide();
        }
    });
});

window.onload = function () {
    var weibo = document.getElementsByClassName('weibo');
    var wechat = document.getElementsByClassName('wechat');
    var app = document.getElementsByClassName('app');
    var firstLi = document.getElementsByClassName('first-li'); // 头部top的app下载元素
    var picWe = document.getElementById('pic-we');
    var picWx = document.getElementById('pic-wx');
    var picApp = document.getElementById('pic-app');
    var dowloadApp = document.getElementById('dowload-app'); //头部app下载的悬停出现的图片
    var idValue = document.getElementsByClassName('identification');//获取账号输入元素
    var debark = document.getElementsByClassName('debark');//获取登陆元素
    var pwd = document.getElementById('login_password'); //隐藏密码框
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
    };
    debark[0].onclick = function () {
        if (idValue[0].value.length !== 11 || idValue[0].value == '请输入您的手机号') {
            alert('请输入您正确的手机号');
        } else if (pwd.value.length < 6 || pwd.value.length > 16) {
            alert('请输入您正确的密码');
        }else if (/^1[29]\d{9}$/.test(idValue[0].value)) {
            alert('请输入正确的手机号')
        }else {
            var reg = /^1[345678]\d{9}$/;
            var regPwd = /\S/;
            if (reg.test(idValue[0].value) && regPwd.test(pwd.value)) {
                alert('登陆成功');
            }
        }
        return false;
    }
}

