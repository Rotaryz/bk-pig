require(['config'],function(){
	require(['jquery','bootstrap','base'],function($,b,ba){
		
		$(function(){
			var goodslist = $('#goodslist .gds');
			var res = '';
			var index = 1;
			$.ajax({
				url:'http://localhost/masa/src/api/goodslist.php?c='+Math.random(1),
				dataType:'json',
				data:{
					page:index
				},
				success:function(str){
					/*
						懒加载，判断滚动条是否滚动到距离底部...px处，加载新的内容
					 */	
					showgoods(str);
					//绑定滚动事件滚动条滚动距离底部的距离
				},
			})
			//html().会把上一次的清空

			$(document).on('scroll',function(){
				//获取滚动条的高度=document的高度，减去可视区域的高度
				var whei =$(document).height()-$(window).height();
				var bscr = $('body').scrollTop();
				console.log(whei,bscr);


				//当条件成立时一直在加载，需处理！！！,当条件成立时应跳出判断
				if(whei-bscr <= 700){
					index++;
					console.log(index)
					$.ajax({
						url:'http://localhost/masa/src/api/goodslist.php?c='+Math.random(1),
						dataType:'json',
						data:{
							page:index
						},
						success:function(str){
							
							showgoods(str);
						
							
						}
					})
					
				}
				
				
			});

			function showgoods(str){
				res += str.map(function(item){
					return `<li data-id="${item.id}">
								<img src="${item.imgurl}">
								<p class="g_title">${item.name}</p>
								<p class="comment">
									已有${item.comment}条评论
								</p>
								<p class="size">
									${item.size}
								</p>
								<p class="price"><span>${item.price}</span>
								吊牌价:${item.oldprice}</p>

							</li>`
				}).join('');	
				goodslist.html(res);
			}


			//绑定点击事件，传递id
			goodslist.on('click','li',function(){
				location.href='goods.html?id='+$(this).attr('data-id');
			})
		})
	})
})