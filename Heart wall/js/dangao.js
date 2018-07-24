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
		bimg.src = 'img/middle_2024_'+this.alt+'.jpg';
		fimg.src = 'img/big_2024_'+this.alt+'.jpg';
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
