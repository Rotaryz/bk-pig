



;(function($){
	$.fn.zxCarousel = function(option){
		//设定默认值,默认垂直轮播
		var defaultd = {
			index:0,
			width:810,
			height:320,
			autoPlay:true,
			duration:3000,
			type:'fade'//vertial,horizontal,fade,show
			//.....
		};
		var opt = $.extend({},defaultd,option);
		var timer;
		this.each(function(){
			//建立图片
			$(this).addClass('carouesel');
			var ul = $('<ul/>');
			ul.html($.map(opt.img,function(item,idx){
				return `<li><img src="${item}"></li>`
			}).join(''))
			$(this).append(ul);
			//复制第一张图片,实现无缝
			var cloneLi = ul.children().eq(0).clone();

			ul.append(cloneLi);
			//建立页码
			var page = $('<div/>').addClass('page');
			page.html($.map(opt.img,function(item,idx){
				if(idx===0){
					return `<img src="img/b${idx+1}.jpg" class="active">`;
				}else{
					return `<img src="img/b${idx+1}.jpg">`;
				}
				
			}).join(''));
			$(this).append(page);
			page.children('img').css({width:146,height:40})

			showPic();

			

			if(opt.autoPlay === true){
				timer = setInterval(autoPlay,opt.duration)
			}
			
			function autoPlay(){
				opt.index++;

				showPic();
			}


			//点击页码时切换
			page.on('click','img',function(){
				//更改索引值再调用函数
				opt.index = $(this).index();
				showPic();
			})

			//鼠标移入时停止，移出时开始
			$(this).on('mouseover',function(){
				clearInterval(timer);
			}).on('mouseout',function(){
				timer = setInterval(autoPlay,opt.duration);
			});

			//生成轮播图的函数
			function showPic(){
	
				if(opt.type === 'vertial'){
					if(opt.index>=opt.img.length+1){
						ul.css({top:0});

						opt.index = 0;
						return;
					}
					ul.animate({top:-opt.height*opt.index})
				}else if(opt.type === 'horizontal'){
					if(opt.index>=opt.img.length+1){
						ul.css({left:0});

						opt.index = 0;
						return;
					}
					ul.children().css({float:'left'});
					ul.css({width:opt.width*(opt.img.length+1)})
					ul.animate({left:-opt.width*opt.index})
				}else if(opt.type === 'fade'){
					if(opt.index>=opt.img.length){
						opt.index=-1;
						return;
					}
					ul.children().css({position:'absolute',top:0,left:0});
					ul.css({position:'relative',height:opt.height});
					ul.children().eq(opt.index).fadeIn(1000).siblings().fadeOut(1000);
				}
				
				if(opt.index>=opt.img.length){
					page.children().eq(0).addClass('active').siblings().removeClass('active');
				}else{
					page.children().eq(opt.index).addClass('active').siblings().removeClass('active');
				}
				
			}




		})
	}

})(jQuery);