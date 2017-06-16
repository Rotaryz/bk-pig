

require(['config'],function(){
	require(['jquery','common','zxCarousel','base'],function($,c,z,b){
		$(function(){
			var idx = 0;
			//为什么事件失效，如何解决？
			$('#banner .banbox').zxCarousel({
				img:['img/b1.jpg','img/b2.jpg','img/b3.jpg'],
				type:'fade',
				height:'500',
			});

			
			//最新公告
			var notice = $('.notice');

			//手风琴
			var list = $('.ac li');
			$(list[0]).css('width','775');
			list.on('mouseenter',function(){
				//把上一个动作停止
				list.stop(true);
				//当前的宽度变大，其他的变小
				$(this).animate({'width':775},600);
				$(this).find('.des').hide();
				$(this).siblings().animate({'width':130},600);
				$(this).children('.text').animate({'bottom':30},600);
			}).on('mouseleave',function(){
				list.stop(true);
				$(this).animate({'width':130},600);
				$(this).find('.des').show();
				$(this).children('.text').animate({'bottom':0},600);
			});
			$('ul').mouseleave(function(){
				list.stop(true);
				list.children('.text').stop(true);
			});



			
			var cusell = $('.cu_sell');
			var clist = $('.content ul');

			//tag切换
			cusell.find('span').eq(idx).addClass('active');
			cusell.on('click','span',function(){
				$(this).addClass('active').siblings().removeClass('active');
				idx = $(this).index();
				clist.eq(idx).show().siblings().hide();
			});


			//活动主题的动画
			var g_big = $('.g_big');
			g_big.on('mouseover','img',function(){
				$(this).stop(true);
				var width = $(this).width();
				var height = $(this).height();
				$(this).animate({width:width+20,height:height+10},1500);
			}).on('mouseout','img',function(){
				var width = $(this).parent().width();
				var height = $(this).parent().height();
				$(this).stop(true);
				$(this).animate({width:width,height:height},1500);
			})



			return false;
		})
			
	})
})