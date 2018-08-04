$(function () {


    // var m = ['毕业后,日薪过千', '努力让自己过的更好', '变成自己喜欢的样子', '赶紧毕业迎娶白富美', '2018新年愿望、好好锻炼 把自己练的棒棒的 身体健康 吃嘛嘛香。',
    //     '2018年我的新年愿望是、这一年你可以单身，这样我就可以追你了。希望可以实现。', '人生最大的愿望就是；吃一碗广告里的泡面。', '2018年最后一个月最后一个愿望：用我身上的十斤肉换个男朋友。',
    //     '2018新年愿望、 我希望能找个女朋友……鹅，算了。还是希望世界和平吧。'
    // ]



    var data = [
        {id:1, 'bm':'n', xysj: "2018-7-19 22:27:2",   xy: "变成自己喜欢的样子！",   name:"帅死狗",    jssj:1553105211082},
        {id:2, 'bm':'n', xysj: "2018-7-19 22:29:5",   xy: "希望明天死情敌！",     name:"死了都要爱",  jssj:1533511211082},
        {id:3, 'bm':'n', xysj: "2016-02-17 01:01:01", xy: "努力让自己过的更好", name: "mahu",       jssj:1539155211082},
        {id:4, 'bm':'n', xysj: "2018-7-20 20:42:25",  xy: "希望能找到工作",       name: "梦游西天",   jssj:1543103211082},
        {id:5, 'bm':'n', xysj: "2018-7-20 20:45:19",  xy: "找个女汉子似的萌妹子做老婆", name: "钱眼子",      jssj:1534100211082}
                ];
    var $tip1 = $('.tip1');
    var $cont = $('#content');
    var ZIndex = 1;
    var $mm = $('.title > #prow');
    
    // 保密数组
    var bmxysz = [];

    // 密码和保密数组的对应关系对象
    var mjson = {};
    
    // 密码
    var prow = '';

    // 这是输入密码时遮罩层的初始层级
    var mIndex = 3;
    var $so = $('.sosu');
    
    // 创建新信息时用的id；因为data中用5条数据
    var number =  5;

    // 删除元素之前先克隆一份放在这个数组里等回复时用
    var kl = [];
    // -----------------------------------------------
    cjfun(data);
    
    // 添加心愿按钮
    $('#btn').click(function () {
        if ($(this).html() === '添加心愿') {
            $('#jxy').stop().fadeIn(400);
            $(this).stop().html('取消添加');
        } else {
            $('#jxy').stop().fadeOut(400);
            $(this).stop().html('添加心愿');
        }
    });

    // 愿望实现时间判断------------
    $('.time').keyup(function () {
        if (/\D/.test($(this).val()) === true) {
            $(this).val('');
            alert('请输入0-9之间的阿拉伯数字');
        }

    });

    // 设置是否保密类名切换
    $('.privary>input').click(function () {

        $(this).stop().toggleClass("clor").siblings().removeClass('clor');

        // 判断是否需要保密心愿
        if ($(this).attr('tada-n') === 'y' && $(this).attr('class') === 'check clor') {
            fsose(false);
        }
    });

    // ------------------------------------------------
    function fsose(sf){
        $mm.val('');
        
        // $('body').css();//浮层出现时窗口不能滚动设置
        $('html').css('overflow','hidden')
            
        // 设置保密密码；
        $('.mask').show().css({
                'zIndex': mIndex,
                height: $('#content')[0].offsetHeight+300,
        })
            
        //输入密码时的逻辑 
        .find('.prow').keyup(function () {
            var str = $('.prow').val();
            if (str === ' ') {
                alert('密码不能是空格');
                $('.prow').val('');
                return;
            }
            for (k in str) {
                $('.hide').text(str.charAt(str.length - 1));
                break;
            }

        //输入密码时定时器调用函数校对密码 

        clearTimeout(hidTimer);
        var hidTimer = setTimeout(hidspan, 150);
        }).parent('.title').children('.Ximg').click(function () {
            $mm.val('');
            $('.mask').hide();
            $('.privary').children('input').removeClass('clor');
            $('html').css('overflow','auto');
        }).parent('.title').children('.shuell').click(function () {

            // 当保密心愿展开时 如果sf为true时执行搜索功能，否则执行赋值功能
            if(sf){
                sf = false;
                $('.mask').hide();
                var json = bmxysz[mjson[$mm.val()]];
                if(mjson[$mm.val()] === undefined){
                    alert('您输入的密码不正确！');
                    return;
                }
                var id = json.id;
                var $remov = $('#content').children('.tip1');
                $.each($remov,function(i,ele){
                    if($(ele).attr('data-c') == id){
                        kl[kl.length] = $(ele).clone(true);
                        $(ele).remove();
                        return false;
                    }
                });
                if(json.bm === 'y'){
                    var $sj = json.jssj;
                    json.bm = 'n';
                
                    // 把保密心愿以普通心愿的形式展现出来
                    // 参数 1、要创建心愿卡的数据 
                    // 参数 2、是否保密bool值 根据他来确定是否添加红心锁图片
                    // 参数 3、倒计时毫秒值                    
                    // 回复页面的滚动效果
                    $('html').css('overflow','auto');
                    heartk(json,false,$sj);
                }
            }else{
                $('.mask').hide();
                prow = $mm.val();
                
                // 回复页面的滚动效果
                $('html').css('overflow','auto');
            }
            
        });
        // ------------------------------------
        
        // 动态显示密码 1秒隐藏
        function hidspan() {
            var str = $('.prow').val();
            var sttr = $('.hide');
            sttr.text('')
            .css({
                position: 'absolute',
                left: 115 + 5.7 * str.length,
                top: 124,
            });
        }
    }
    // ------------------------------------------------

    // 点击许愿按钮时执行的代码
    $('#xytj').click(function () {
        $('.box').css('zIndex', mIndex - 1);
        var sxsjy = $('#year').val();
        var sxsjm = $('#month').val();
        var sxsjd = $('#day').val();
        var text = $('#text1').val();
        //------------------------------
        
        //结束的时间：年，月，日，分，秒（月的索引是0~11）
        //当内容为空时获取的是一个-1个月的值
        sxsjm = +sxsjm == 0 ? 0 : +sxsjm - 1;
        var endx = new Date(sxsjy, sxsjm, sxsjd).getTime();
        var bjendx = new Date(0, 0, 0).getTime();
        var time = new Date().getTime();

        //获取content下的子元素的倒数第二个；倒数第一个是模板隐藏元素 
        var str = $('#content').children('.tip1').eq($('#content')
        .children('.tip1').length-2).find('.num').html();
        str = str.substr(2,1);

        // 判断是否设置实现愿望的时间
        // 还应该判断最长愿望时间可以不写，但不能无限长（没写）；
        if (+endx !== bjendx) {

            // 判断结束时间是否大于当前时间；
            // 按自然天数一天之内的判断无法判断为否，因为不能输入：时分秒（没有完善）
            if (endx < time) {
                alert('请输入正确的时间');
                $('#year').val('');
                $('#month').val('');
                $('#day').val('');
                return;
            }
        } 

        // 判断许愿内容不能为空
        if (text !== '') {
            var priv = $('.privary .clor').attr('tada-n');
            var name = $('.names').val();
            var arr = [];
            var json = {};
            number++;
            if (priv === 'y') {
                json  = {'id': number, 'bm':priv, 'name':name};
                bmxysz[bmxysz.length] = {
                    'id': number,
                    'bm':priv,
                    'xysj': fn(),
                    'xy': text,
                    'name': name,
                    'jssj': endx
                };
                mjson[prow] = bmxysz.length-1;
            } else {
                json = {};
                json = {
                    'id': number,
                    'bm':priv,
                    'xysj': fn(),
                    'xy': text,
                    'name': name,
                    'jssj': endx
                };
            }
            data[data.length] = json;
            arr[arr.length] = json;
            cjfun(arr,str);

        }else{
            alert('请输入心愿内容！');
        }
        
        // 清空心愿卡上的数据
        $('.privary').children('input').removeClass('clor');
        $('.names').val('');
        $mm.val('');
        $('#year').val('');
        $('#month').val('');
        $('#day').val('');
        $('#text1').val(''); 

        // 隐藏模板
        $tip1.hide();
    });
    // ----------------------------------------
    
    // 保密心愿被点击是执行的代码
    $('span').on('dblclick',function(){
        if($(this).attr('class') === 'lock'){
            fsose(true);
        }
    });

    // ----------------------------------------

    // 关闭保密心愿信息时让心愿卡继续保密展示
    function sc(qq){
        if(bmxysz.length === 0){

            // 将删除的数据重新添加到保密数组
            bmxysz[bmxysz.length] = qq;
        }else{
            bmxysz[bmxysz.length] = qq;
            px(bmxysz);
        }
        var co = {'id': qq.id, 'bm':qq.bm, 'name':qq.name};
        px(data);
        function px(paixu){
            paixu.sort(function fun(a,b){
                return a.id-b.id;
            });
        }
        dd(co);
    }
    // 鼠标移入放大镜搜索框动态增长 自动获取光标
    $('#bzd').mouseenter(function(){
        $so.stop().animate({width:208},800)
        .focus();
    })
    .click(function(){
        var str = $('#content').children('.tip1').find('.name');
        
        // 执行搜索心愿卡事件；
        $(str).each(function(i,ele){
            if($(ele).html() === $so.val()){
                $(ele).parent().parent().stop().animate({
                    'zIndex':ZIndex++,
                    top:64,
                    left:738
                },1000);
                $so.val('');
            }
        });
    })
    .mouseleave(function(){
        $so.stop().animate({width:22},800);
    });
    // ----------------------------------------

    // 根据data数组里的每一项创建心愿卡
    function cjfun(arr,tr){
        tr = tr > 0 ? tr : 0;
        $.each(arr,function(i,ele){
            if(ele.id > tr){
                dd(ele);
            }
        });
    }
    function dd(ff){

         // 开闭原则bool赋值给元素加类名
        var bool = false;
        var ends = ff.jssj;

        //判断许愿时间是否为空 
        if(ff.xysj === undefined){
            ff.xysj = '';
        }
        if(ff.bm === 'y'){
            ff.xy = '';
            bool = true;
            ends = fn();
        }
        heartk(ff , bool , ends);
    }
    // 创建心愿卡---------------------------------------

    // 参数 1、要创建心愿卡的数据 
    // 参数 2、是否保密bool值 
    // 参数 3、倒计时毫秒值
    function heartk(ele , bool , ends){
        $tip1.clone(true).insertBefore($tip1)
            .find('.num').html('第[' + ele.id + ']条' + ele.xysj)
            .parents('.tip1').find('.tip_c').children('span')
            .attr('class',bool == true?'lock':'ddd').html(ele.xy)
            .parents('.tip1').find('.name').text(ele.name)
            .parents('.tip1').css({
                left: $tip1[0].offsetLeft + Math.random() * ($cont[0].offsetWidth -
                    $tip1[0].offsetWidth - $tip1[0].offsetLeft),
                top: Math.random() * 400
            }).show().attr('data-c',ele.id)

            // on()：jquery事件监听器
            .parents('#content').on('mousedown', '.tip1', function (e) {
                e = e || document.event;
                $(this).css('zIndex', ZIndex);

                // mIndex设置遮罩层的层级
                mIndex = 2 + ZIndex++;
                var x = e.clientX - this.offsetLeft;
                var y = e.clientY - this.offsetTop;
                $(this).bind('mousemove', function (e) {
                    e = e || document.event;
                    var xx = e.clientX - x;
                    var yy = e.clientY - y;
                    var num = content.offsetWidth - this.offsetWidth;
                    xx = xx > 0 ? xx : 0;
                    xx = xx < num + 5 ? xx : num + 5;
                    yy = yy > 0 ? yy : 0;
                    yy = yy < content.offsetHeight - this.offsetHeight ?
                        yy : content.offsetHeight - this.offsetHeight;
                    $(this).css({
                        left: xx,
                        top: yy
                    });
                    return false;
                })
                .bind('mouseup', function () {
                    $(this).unbind('mousemove');
                    return false;
                });
            });
        ffsl(ends,ele.id);
    }
    //删除心愿------------------------------------------
    
    var jjjj = $cont.find('.tip_h');
        $(jjjj).on('dblclick',function () {
            var str = $(this).find('.num').html();

            // 截取字符串
            str = str.substr(2,1);
            var str1 = data[data.length-1].id;
            for(k in data){
                if(data[k].id === +str){
                    data.splice(k,1);
                    cjfun(data,str1);
                }
            }
            $.each(bmxysz,function(i,ele){
                if(ele.id === +str){
                    var kk = bmxysz.splice(0,1);
                    if(ele.bm == 'n'){
                        ele.bm = 'y';
                        sc(kk[0]);
                    }
                }
            })
            $(this).parent().remove();
        });
    // 心愿定时器启动------------------------------------
    
    function ffsl(end,id){
        var $str = $('#content').children('.tip1');
        $str.each(function(i,ele){
            var data_c = ele.getAttribute('data-c');
            if(+data_c === id){
                clearInterval(ele.timer);
                ele.timer = setInterval(function () {
                    $(ele).find('.dtime').html(fndjs(end));
                }, 1000);
            }
        });
    }
    //封装倒计时算法-------------------------------------
  
    function fndjs(n) {
        
            /*两个时间相减,得到的是毫秒ms,变成秒*/
            var result = n - new Date().getTime();
            if (result > 1) {
                var second = parseInt(result / 1000 % 60); // 计算秒 ，取余  
                
                var minite = parseInt(result / 1000 / 60 % 60); //计算分 ，换算有多少分，取余，余出多少秒
                
                var hour = parseInt(result / 1000 / 3600 % 24); //计算小时，换算有多少小时，取余，24小时制除以24，余出多少小时
                
                var day = parseInt(result / 1000 / 3600 / 24); //计算天 ，换算有多少天
                
                var fdjs = '倒计时还有：' + day + "天" + hour + "小时" + minite + "分" + second + "秒";
                
                return fdjs;
            } else {
                return;
            }
        }
    // 获取当前时间并返回--------------------------------
    function fn() {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var hour = time.getHours();
        var min = time.getMinutes();
        var sin = time.getSeconds();
        return str = year + '-' + month +
            '-' + day + ' ' + hour +
            ':' + min + ':' + sin;
    }

    // 将克隆源隐藏
    $cont.children().eq($cont.children().length-1).hide();
});