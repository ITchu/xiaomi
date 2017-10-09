window.onload=function(){
		 //参数说明   
	 //classname  类名
	 //target  范围
	  function getClass(classname,target){ 
	   target=target? target:document; 
	  	if(document.getElementsByClassName){ //判断是否兼容 
	  	  return target.getElementsByClassName(classname); 
	  	}  
	  	else{   
	  	 var newarr=[];   
	  	  var all=target.getElementsByTagName('*');  
	  	    for(var i=0;i<all.length;i++){     
	  	     if(checkClass(all[i].className,classname)){    
	  	         newarr.push(all[i]);      
	  	        }    
	  	    }    
	  	    return newarr;   
	  	}
	  }
	function checkClass(className,classname){ 
	  	  var arr=className.split(' ');  
	  	  for(var i=0;i<arr.length;i++){  
	  	       if(arr[i]==classname){ 
	  	  	          return true;        
	  	       }   
	  	  }      
	  	return false;
	}
	//获取指定元素   $(select)
	//$('.box') 类名  $('#box') id名   $('div') 标签
	//参数说明
	//select 字符串 选择器
	//target  范围
	//1 . className
	//2 # Id
	//3   标签  以字符开头 
	function $(select,target){
		target=target?target:document;
		var first=select.charAt([0]);//首字符
		if(first=='.'){
			return getClass(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}/.test(select)){
		//正则表达式 
		return target.getElementsByTagName(select);
		}
	}
//logo 图
   let nav=document.querySelectorAll('.nav-js>li>a');
   let navdowm=document.querySelectorAll('div.nav-down');
   for(let i=0;i<nav.length-2;i++){
   	nav[i].onmouseover=function(){
   		navdowm[i].style.display='block';
   	}
   	nav[i].onmouseout=function(){
   		navdowm[i].style.display='none';
   	}
   }
	// //banner图侧栏
	let lis=document.querySelectorAll('.zuo>li');
	let blj=$('.banner-left-js');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			blj[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			blj[i].style.display='none';
		}
	}
	//banner点击
	let datu=$('.datu')[0];
	let d_lis=$('li',datu);
	let btn_list=$('.btn-list')[0];
	let l_lis=$('li',btn_list);
	let banner=$('.banner')[0];
	//now  表示当前窗口显示的图片
	//next 下一张
	let now=0;
	let next=0;
	let t=setInterval(move,2000);
	let tu_zuo=$('.tu-zuo')[0];
	let tu_you=$('.tu-you')[0];
	//变化的宽度
	let w=parseInt(getComputedStyle(datu,null).width);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
//点击
   for(let i=0;i<l_lis.length;i++){
     l_lis[i].onclick=function(){
     	if(now==i){
     		return;
     	}
     	l_lis[now].style.background='#17171c';
     	l_lis[i].style.background='#7c7c81';
     	d_lis[i].style.left=`${w}px`;
     	animate(d_lis[now],{left:-w});
     	animate(d_lis[i],{left:0}); 
     	now=next=i;
     }
    
 }

//箭头控制
    let flag=true;
	tu_zuo.onclick=function(){
		if(!flag){
			return;
		}
		movel();
		flag=false;
	}
    tu_you.onclick=function(){
    	if(!flag){
			return;
		}
		move();
		flag=false;
    }
//轮播
	function move(){
		next++;
		if(next==d_lis.length){
			next=0;
		}
		d_lis[next].style.left=`${w}px`;
		animate(d_lis[now],{left:-w});
		l_lis[now].style.background='#17171c';
		animate(d_lis[next],{left:0},function(){
			flag=true;
		});
		now=next;
		l_lis[next].style.background='#7c7c81';
	}
function movel(){
		next--;
		if(next<0){
			next=d_lis.length-1;
		}
		d_lis[next].style.left=`${-w}px`;
		animate(d_lis[now],{left:w});
		l_lis[now].style.background='#17171c';
		animate(d_lis[next],{left:0},function(){
			flag=true;
		});
		now=next;
		l_lis[next].style.background='#7c7c81';
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
//小米单品
//参数说明 
//leftkzj  左键  rightkzj右键
//xiaoul  需要移动的内容  xiaoW 移动量
//xiaoI  几屏
let leftkzj=document.querySelector('.kzj-left');
let rightkzj=document.querySelector('.kzj-right');
let xiaoul=document.querySelector('.xiao-ul');
let xmdp=document.querySelector('.xmdp');
let xiao2=document.querySelector('.xiao-2');
let xiaoW=parseInt(getComputedStyle(xiao2,null).width);
let xiaoI=0;
let nextT=true;
    leftkzj.onclick=function(){
	    if(xiaoI==1){
		    return;
	    }
	    xiaoI++;
	    animate(xiaoul,{left:-(xiaoI*xiaoW)});
	    rightkzj.style.color='#757575';
	    leftkzj.style.color='#c8cac8';
    }    
    rightkzj.onclick=function(){
	    if(xiaoI==0){
		    return;
	    }    
	    xiaoI--;
	    animate(xiaoul,{left:-(xiaoI*xiaoW)});
	    leftkzj.style.color='#757575';
	    rightkzj.style.color='#c8cac8';
    }
    function xmove(){
    	if(nextT){
	        if(xiaoI==1){
		        return nextT=false;
	        }
	        xiaoI++;
	        animate(xiaoul,{left:-(xiaoI*xiaoW)},1000);
	    }else{
	        if(xiaoI==0){
		        return nextT=true;
	        }
	        xiaoI--;
	        animate(xiaoul,{left:-(xiaoI*xiaoW)},1000);
	    }
    }
    let xiaoT=setInterval(xmove, 3000);
    xmdp.onmouseover=function(){
    	clearInterval(xiaoT);
    }
    xmdp.onmouseout=function(){
    	xiaoT=setInterval(xmove,3000);
    }
//为你推荐
//参数说明
//wleftkzj  左键  wrightkzj右键
//weiul  需要移动的内容  weiW 移动量
//xiaoI  几屏
let wleftkzj=document.querySelector('.wkzj-left');
let wrightkzj=document.querySelector('.wkzj-right');
let weiul=document.querySelector('.wei-ul');
let wei2=document.querySelector('.wei-2');
let weiW=parseInt(getComputedStyle(wei2,null).width);
wleftkzj.onclick=function(){
	if(xiaoI==1){
		return;
	}
	xiaoI++;
	animate(weiul,{left:-(xiaoI*weiW)});
	wrightkzj.style.color='#757575';
	wleftkzj.style.color='#c8cac8';
}
wrightkzj.onclick=function(){
	if(xiaoI==0){
		return;
	}
	xiaoI--;
	animate(weiul,{left:-(xiaoI*weiW)});
	wleftkzj.style.color='#757575';
	wrightkzj.style.color='#c8cac8';
}
//搭配
let dp=document.querySelectorAll('.dp2');
let zi=document.querySelectorAll('.hot-zi>a');
for(let i=0;i<zi.length;i++){
	zi[i].onmouseover=function(){
		for(let j=1;j<zi.length;j++){
			dp[j].style.display='none';
		}
		dp[i].style.display='block';
		
	}
}
//内容
    let ajs=document.querySelectorAll('div.ajs');
    let nrleft=document.querySelectorAll('div.jiantou-left');
    let nrright=document.querySelectorAll('div.jiantou-right');
	let on=document.querySelectorAll('.focus_pointer');
	let nrjs=document.querySelector('.nei-js');
	let nrW=parseInt(getComputedStyle(nrjs,null).width)+32;
	let onli=on[0].querySelectorAll('li');
    let onli2=on[1].querySelectorAll('li');
    let onli3=on[2].querySelectorAll('li');
    let onli4=on[3].querySelectorAll('li');
    let pointers = [onli, onli2, onli3, onli4];
for(let i=0;i<ajs.length;i++){
	let nrnow=0;
		nrleft[i].onclick=function(){
		nrnow = nrLeft(ajs[i],nrnow, pointers[i]);
    	}
		nrright[i].onclick=function(){
		nrnow=nrRight(ajs[i],nrnow, pointers[i]);
    	} 	
}

function nrRight(ajs,nrnow, pointer){
	if(nrnow>=2){
		return nrnow;
	}
	nrnow++;
	animate(ajs,{left:-(nrnow*nrW)});
	pointer[nrnow].className='focus_on';
	pointer[nrnow-1].className='focus_off';
	return nrnow;
}
function nrLeft(ajs,nrnow, pointer){
	if(nrnow==0){
		return nrnow;
	}
	nrnow--;
	animate(ajs,{left:-(nrnow*nrW)});
	pointer[nrnow].className='focus_on';
	pointer[nrnow+1].className='focus_off';
	return nrnow;
}
    /*let ajs=document.querySelector('div.ajs');
    let nrLeft=document.querySelector('div.jiantou-left');
    let nrRight=document.querySelector('div.jiantou-right');
    let nrjs=ajs.querySelectorAll('.nei-js');
    let on=document.querySelector('.focus_pointer');
    let onli=on.querySelectorAll('li');
    let nrW=parseInt(getComputedStyle(nrjs[0],null).width)+32;
	let nrnow=0,nrnext=0,flage=true;
	for(let i=0;i<onli.length;i++){
		onli[i].onclick=function(){
			if(nrnow==i){
				return ;
			}
			nrjs[i].style.left=`${nrW}px`;
			animate(nrjs[now],{left:-nrW});
			animate(nrjs[i],{left:0});
			nrnow=i=nrnext;
		}
	}
	nrLeft.onclick=function(){
		if(!flage){
			return;
		}
		nrmovel();
		flage=false;
	}
	nrRight.onclick=function(){
		if(!flage){
			return;
		}
		nrmove();
		flage=false;
	}
	function nrmove(){
		nrnext++;
		if(nrnext==nrjs.length){
			nrnext=0;
		}
		nrjs[nrnext].style.left=`${nrW}px`;
		animate(nrjs[now],{left:-nrW});
		animate(nrjs[nrnext],{left:0},function(){
			flage=true;
		});
		nrnow=nrnext;
	}
	function nrmovel(){
		nrnext--;
		if(nrnext<0){
			nrnext=nrjs.length-1;
		}
		nrjs[nrnext].style.left=`${-nrW}px`;
		animate(nrjs[now],{left:nrW});
		animate(nrjs[nrnext],{left:0},function(){
			flage=true;
		});
		nrnow=nrnext;
	}*/
}



