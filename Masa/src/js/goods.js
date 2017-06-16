require(['config'],function(){
	require(['jquery','common','base','zxZoom'],function($,c,b,zm){
		//判断id并从数据库中获取相应的ID的内容
		$(function(){
			var id = location.search.slice(4);
			var goods = $('#goods');
			var goods_zoom = goods.find('.goods_zoom');
			var gzoom = goods_zoom.children('.zoom');
			var gmin = $('.gmin');
			var htmls ='';
			var carbox = $('#carbox');

			//有效期
			var data = new Date();
			data.setDate(data.getDate()+7);
			//存放cookie
			// var arr = c.getCookie('goods');//每次得到上一次的cookie
			// arr = arr ? JSON.parse(arr) : [];
			var goods_res = c.getCookie('goods');
			goods_res = goods_res ? JSON.parse(goods_res) : [];

			var smallImg;
			$.ajax({
				url: 'http://localhost/masa/src/api/goods.php?c='+Math.random(1),
				data:{id:id},
				dataType:'json',
				success:function(str){
					// 生成大图
					var res = str[0];
					var dataBig =res.dimg.replace(/[\[\]\'\']+/g,'').split(','); 
					smallImg =res.simg.replace(/[\[\]\'\']+/g,'').split(','); 
					var midImg = res.mimg.replace(/[\[\]\'\']+/g,'').split(','); 
					var bimg = $('<img/>').attr({src:res.bimg,'data-big':dataBig[0]});
					gzoom.append(bimg);

					//主放大镜
					gzoom.zxZoom({
						width:500,
						height:500
					})
					//遍历图片
					gmin.html(smallImg.map(function(item,idx){
						return `<img src="${item}" data-big="${dataBig[idx]}" data-min="${midImg[idx]}">`
					}).join(''));

					gmin.on('click','img',function(){
						gzoom.children('img').attr({
							src:$(this).attr('data-min'),
							'data-big':$(this).attr('data-big')
						})
					})
				},
			})

			//添加点击加减按钮实现数量的修改
			var gnum = $('#gnum');
			var index = gnum.val();
			goods.on('click','.add',function(){
				index++;
				gnum.val(index);
			}).on('click','.nadd',function(){
				index--;
				gnum.val(index);
			})
			//点击购买添加入购物车，并且把数据存入
			.on('click','.car',function(){
				//传入id请求数据库
				$.ajax({
					url:'http://localhost/masa/src/api/goods.php?c='+Math.random(1),
					data:{
						id:id
					},
					dataType:'json',
					success:function(str){
						console.log(str);
						//设置cookie值
						//解决同商品数量叠加！利用id判断商品是否存在，存在的话数量加一
						for(var i=0;i<goods_res.length;i++){
							if (goods_res[i].id === id) {
								goods_res[i].qty++;
								break;
							}
						}
						
						if(i===goods_res.length){
							var obj = {
								id:str[0].id,
								title:str[0].name,
								img:smallImg[0],
								price:str[0].price,
								qty:str[0].qty
							};
							goods_res.push(obj);
						}

						c.setCookie(
							'goods',
							JSON.stringify(goods_res),
							data
						);
						//获取cookie值生成数据，公共
						
						
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
						//生成购物车商品
					
						
						setTimeout(function(){
							carbox.show(500);
						},500);
						//改变按钮
						if(goods_res.length>0){
							carbox.children('button').html('去购物车结算')
							
						}else{
							carbox.children('button').html('您没有添加任何商品')
						};

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
						
					}
				})
			});



			var gde = $('.g_de');
			var gshow = $('.g_show');
			var gsize = $('.g_size');
			//请求数据生成商品信息
			$.ajax({
				url:'../data/goods_show.json',
				dataType:'json',
				success:function(str){
					console.log(str);
					var index = id-1;
					var res = str[index];
					gde.html(res.describe.map(function(item){
						return `<img src="${item}">`
					}).join(''));
					gshow.html(res.show.map(function(item){
						return `<img src="${item}">`
					}).join(''));
					gsize.html(res.size.map(function(item){
						return `<img src="${item}">`
					}).join(''));
					// gde.html(str.)
				}
			})

			//

			return false;
		});
	})
})