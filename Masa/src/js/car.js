require(['config'],function(){
	require(['jquery','common'],function($,c){
		$(function(){
			var htmls ;
			var goods_res = c.getCookie('goods');
			goods_res = goods_res ? JSON.parse(goods_res) : [];
			var car = $('#car');
			var table = $('#car table');
			var h3 = $('#car h3');
			var end = car.find('.endbuy');
			var cont = car.find('.continue');
			//生成购物车商品
			if(goods_res.length>0){
				htmls += goods_res.map(function(item){
					return `<tr data-id="${item.id}">
						<td>1</td>
						<td>
							<img src="${item.img}">
							<pre>${item.title}</pre>
						</td>
						<td>
							xxl
						</td>
						<td>￥400</td>
						<td class="price">￥${item.price}</td>
						<td>
							<span class="nadd">-</span>
							<input type="text" value="${item.qty}"></input>
							<span class="add">+</span>
						</td>
						<td>
							￥${item.price*item.qty}
						</td>
						<td>
							<button class="del">删除</button>
						</td>`
				})
				table.append(htmls).show();
				h3.hide();
				end.show();
				cont.show();
			}

			var cnum = car.find('input')
			var index = cnum.val();
			
			//绑定点击事件
			car.on('click','.add',function(){
				index++;
				cnum.val(index);
			}).on('click','.nadd',function(){
				index--;
				cnum.val(index);
			}).on('click','.del',function(){

					
				$(this).closest('tr').remove();
				var id = $(this).closest('tr').attr('data-id');
				for(var i=0;i<goods_res.length;i++){
					if(goods_res[i].id===id){
						goods_res.splice(i,1);
						c.setCookie('goods',JSON.stringify(goods_res));

						location.reload();
						break;

					}
				}
			})
		})
	})
})