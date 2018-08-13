


$(function () {
    //App下载鼠标 显示二维码
    $('.first').mouseenter(function () {
        $(this).children('img').stop().slideDown();
    })
    $('.first').mouseleave(function () {
        $(this).children('img').stop().slideUp();
    })
    //设置slider的背景图
    var $lisSli = $('.slider  li');
    for (var i = 0; i < $lisSli.length; i++) {
        $($lisSli[i]).css({
            backgroundImage: 'url(./images/' + (i + 1) + '.jpg)',
            height: 480,
        })
    }
    //地区选择 
    $('.area-choose').mouseover(function () {
        $(this).find('ul').stop().slideDown();
    })
    $('.area-choose').mouseout(function () {
        $(this).find('ul').stop().slideUp();
    })
    //area-choose的替换 
    // var $lis1 = $('.area-choose li');
    // console.log($lis1)
    // $lis1.each(function(i,ele){
    //     ele.click(function(){
    //         console.log('aaa')
    //          $('.area-choose span').text($(this).children().text());
    //     })
    // })
    var location=$('.area-choose span'),lis=$('.area-choose li');
    $('.area-choose ul').on('click','li',function(){
        location.text($(this).children().text());
    })
    $('.register').on('click', function() {
        return false;
    })
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
     // 密码部分
     $('#login_showPwd2').focus(function () {
        var text_value = $(this).val();
        if (text_value == this.defaultValue) {
            $('#login_showPwd2').hide();
            $('#login_password2').show().focus();
        }
    });
    $('#login_password2').blur(function () {
        var text_value = $(this).val();
        if (text_value == "") {
            $('#login_showPwd2').show();
            $('#login_password2').hide();
        }
    });
})
//生日选择下拉框
function YYYYMMDDstart() {
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //先给年下拉框赋内容   
    var y = new Date().getFullYear();
    for (var i = (y - 30); i < (y + 30); i++) //以今年为准，前30年，后30年   
        document.reg_testdate.YYYY.options.add(new Option(" " + i + " 年", i));

    //赋月份的下拉框   
    for (var i = 1; i < 13; i++)
        document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));

    document.reg_testdate.YYYY.value = y;
    document.reg_testdate.MM.value = new Date().getMonth() + 1;
    var n = MonHead[new Date().getMonth()];
    if (new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
    writeDay(n); //赋日期下拉框Author:meizz   
    document.reg_testdate.DD.value = new Date().getDate();
}
if (document.attachEvent)
    window.attachEvent("onload", YYYYMMDDstart);
else
    window.addEventListener('load', YYYYMMDDstart, false);
function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
{
    var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
    if (MMvalue == "") { var e = document.reg_testdate.DD; optionsClear(e); return; }
    var n = MonHead[MMvalue - 1];
    if (MMvalue == 2 && IsPinYear(str)) n++;
    writeDay(n)
}
function MMDD(str)   //月发生变化时日期联动   
{
    var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
    if (YYYYvalue == "") { var e = document.reg_testdate.DD; optionsClear(e); return; }
    var n = MonHead[str - 1];
    if (str == 2 && IsPinYear(YYYYvalue)) n++;
    writeDay(n)
}
function writeDay(n)   //据条件写日期的下拉框   
{
    var e = document.reg_testdate.DD; optionsClear(e);
    for (var i = 1; i < (n + 1); i++)
        e.options.add(new Option(" " + i + " 日", i));
}
function IsPinYear(year)//判断是否闰平年   
{ return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0)); }
function optionsClear(e) {
    e.options.length = 1;
}  



