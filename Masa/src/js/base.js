require(['config'],function(){
	require(['jquery','common'],function($,c){
		$(function(){
			//右边导航条
			var aside = $('#asided');
			var goods = $('#goods');
			var carbox = $('#carbox');
			var htmls = '';
			aside.on('mouseover','div',function(){
				$(this).addClass('active').siblings().removeClass('active');
				$(this).find('span').addClass('sactive');
			}).on('mouseout','div',function(){
				$(this).removeClass('active');
				$(this).find('span').removeClass('sactive');
			})
			//回到顶部动画
			.on('click','.top',function(){
				$('body').animate({scrollTop:0},400);
			}).on('mouseenter','div',function(){
				$(this).find('pre').show();
				$(this).siblings().find('pre').hide();
			}).on('mouseleave','div',function(){
				$(this).find('pre').hide();
			})

			//二级菜单
			var color = '#242424'
			var menu = $('.menu');
			var semenu = $('.menu .se_menu');
			var fimenu =$('.menu .fi_menu')
			menu.on('mouseover',function(){
				$(this).css('background',color);
				fimenu.find('a').css('color','#fff');
				var left = fimenu.offset().left;
				semenu.show();
				semenu.css({'left':left,top:24});
			}).on('mouseout',function(){
				$(this).css('background','rgba(255,255,255,0)');
				fimenu.find('a').css('color',color);;
				semenu.hide();
			});




			var goods_res = c.getCookie('goods');
			goods_res = goods_res ? JSON.parse(goods_res) : [];
			//生成页面购物车数据
			if(goods_res.length>0){
				htmls = goods_res.map(function(item){
							return `<li class="clearfix" data-id="${item.id}">
								<img src="${item.img}">
								<a href="#">${item.title}</a>
								<span>￥${item.price}*${item.qty}</span>
								<span class="delete">&times;</span>
							</li>`
						}).join('');
				var ul = carbox.children('ul');
				ul.html(htmls);
				carbox.on('click','.delete',function(){
					$(this).closest('li').remove();
					var id = $(this).closest('li').attr('data-id');
					//cookie中也要把当前数据删除
					for(var i=0;i<goods_res.length;i++){
						if(goods_res[i].id === id){
							goods_res.splice(i,1);
							c.setCookie('goods',JSON.stringify(goods_res));

							break;
						}
					}
					
				});

			};
			carbox.on('click','button',function(){
				location.href = 'car.html';
			});
			//获取cookie值，并生成数据
			aside.on('click','.acar',function(){
				//获取cookie
			
				//生成购物车商品
				setTimeout(function(){
	
					carbox.toggle(500);

				},500);
				//改变按钮
				
				if(goods_res.length>0){
					carbox.children('button').html('去购物车结算')
					
				}else{
					carbox.children('button').html('您没有添加任何商品')
				}
			});
		})
	})
})