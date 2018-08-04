var small = document.getElementById('small');
var ul = small.children[0];
var simgs = ul.getElementsByTagName('img');
var big = document.getElementById('big');
var bimg = big.children[0];
var mask = document.getElementById('mask');
var pic = document.body.children[1];
var fdj = pic.children[2];
var fimg = fdj.children[0];
for(var i=0; i<simgs.length; i++){
	var img = simgs[i];
	img.onclick = function(){
		bimg.src = 'images/middle_2024_'+this.alt+'.jpg';
		fimg.src = 'images/big_2024_'+this.alt+'.jpg';
	}
}
big.onmouseover = function(){
	mask.style.display = 'block';
	fdj.style.display = 'block';
}
big.onmouseout =function(){
	mask.style.display = 'none';
	fdj.style.display = 'none';
}
// 设置mask的居中跟随效果
big.onmousemove = function(e){
	var x = e.clientX - pic.offsetLeft - big.offsetLeft - mask.offsetWidth/2;
	var y = e.pageY - pic.offsetTop - mask.offsetHeight/2;
	// 给x,y设置运动边界
	x = x < 0 ? 0 : x
	y = y < 0 ? 0 : y
	var maxLeft = big.offsetWidth-mask.offsetWidth;
	var maxTop = big.offsetHeight - mask.offsetHeight;
	x = x > maxLeft ? maxLeft : x
	y = y > maxTop ? maxTop : y
	mask.style.left = x + 'px';
	mask.style.top = y + 'px';
	var biliX = mask.offsetWidth/fdj.offsetWidth;
	// var biliY = mask.offsetHeight/fdj.offsetHeight;
	fimg.style.left = -x/biliX + 'px';
	fimg.style.top = -y/biliX + 'px';
}
var des = document.getElementById('describe');
var isone = des.getElementsByTagName('i');
var sone = des.children[5];
var eone = des.children[6];
var att = document.getElementById('attitude');
var istwo = att.getElementsByTagName('i');
var stwo = att.children[5];
var etwo = att.children[6];
var qua = document.getElementById('quali');
var isthree = qua.getElementsByTagName('i');
var sthree = qua.children[5];
var ethree = qua.children[6];
for(var i=0; i<isone.length; i++){
	var ion = isone[i];
	if(i<2){
		ion.onclick = function(){
			$(this).prevAll().css('backgroundImage','url(images/zp.png)');
			this.style.backgroundImage = 'url(images/zp.png)';
			$(this).nextAll().css('backgroundImage','url(images/cp.png)');
			eone.innerText = '口味一般，没有卖家描述的那么好';
			sone.innerText = $(this).index() + 1 + '分';
		}
	}else{
		ion.onclick = function(){
		$(this).prevAll().css('backgroundImage','url(images/hp.png)');
		this.style.backgroundImage = 'url(images/hp.png)';
		$(this).nextAll().css('backgroundImage','url(images/cp.png)');
		eone.innerText = '口感非常好，跟卖家描述的一样';
		sone.innerText = $(this).index() + 1 + '分';
		}
	}
}
for(var i=0; i<istwo.length; i++){
	var ion = istwo[i];
	if(i<2){
		ion.onclick = function(){
			$(this).prevAll().css('backgroundImage','url(images/zp.png)');
			this.style.backgroundImage = 'url(images/zp.png)';
			$(this).nextAll().css('backgroundImage','url(images/cp.png)');
			etwo.innerText = '卖家服务态度太差';
			stwo.innerText = $(this).index() + 1 + '分';
		}
	}else{
		ion.onclick = function(){
		$(this).prevAll().css('backgroundImage','url(images/hp.png)');
		this.style.backgroundImage = 'url(images/hp.png)';
		$(this).nextAll().css('backgroundImage','url(images/cp.png)');
		etwo.innerText = '卖家非常热情';
		stwo.innerText = $(this).index() + 1 + '分';
		}
	}
}
for(var i=0; i<isthree.length; i++){
	var ion = isthree[i];
	if(i<2){
		ion.onclick = function(){
			$(this).prevAll().css('backgroundImage','url(images/zp.png)');
			this.style.backgroundImage = 'url(images/zp.png)';
			$(this).nextAll().css('backgroundImage','url(images/cp.png)');
			ethree.innerText = '物流像蜗牛一样慢';
			sthree.innerText = $(this).index() + 1 + '分';
		}
	}else{
		ion.onclick = function(){
		$(this).prevAll().css('backgroundImage','url(images/hp.png)');
		this.style.backgroundImage = 'url(images/hp.png)';
		$(this).nextAll().css('backgroundImage','url(images/cp.png)');
		ethree.innerText = '物流速度很快，包装也很好';
		sthree.innerText = $(this).index() + 1 + '分';
		}
	}
}
