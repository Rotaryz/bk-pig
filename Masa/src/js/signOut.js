require(['config'],function(){
	require(['jquery','common','base','bootstrap'],function($,c,ba,bo){
		$(function(){
			/*
				设定正则
				查询数据库
				写入数据库
			 */
			
		
			var btnlogin = $('.btn');
			var uesname = $('#exampleInputEmail1');
			var psw = $('#exampleInputPassword1');
			var psw2 = $('#exampleInputPassword2');
			var check =$('#check');
			var span = $('#login .ve');
					
			psw.on('input',function(){
				passColor();
			});
			psw.on('change',function(){
				passColor();
			});
			function passColor(){
				if(/^[\d]{6,}$/.test(psw.val())){
					span.eq(0).css('background','red');
					return false;
				}else if(!/^[\d]{6,}$/.test(psw.value)){
					span.eq(0).css('background','#ccc');
					
				}
				if(/^[\da-z]{6,}$/i.test(psw.val())){
					span.eq(0).css('background','red');
					span.eq(1).css('background','yellow');
					return false;
				}else if(!/^[\da-z]{6,}$/i.test(psw.val())){
					span.eq(1).css('background','#ccc');
				}

				if(/^[^\u2E80-\u9FFF\s]{6,}$/i.test(psw.val())){
					span.eq(0).css('background','red')
					span.eq(1).css('background','yellow');
					span.eq(2).css('background','green');
				}else if(!/^[^\u2E80-\u9FFF\s]{6,}$/i.test(psw.val())){
					span.eq(2).css('background','#ccc');
				}
			}

			btnlogin.on('click',function(){
				//用户名不能为空
				if(uesname.val() === '' ){
					alert('请输入email');
				};

				//密码正则
				if(!/^[^\u2E80-\u9FFF\s]{6,}$/i.test(psw.val())){
				 	alert('密码格式不正确');
				 	return false;
				 };
				 if(psw2.val() != psw.val()){
				 	alert('两次输入的密码不一致');
				 	return false;
				 }
				 if(!check.is(':checked')){
				 	alert('请阅读协议，并接受');
				 	return false;
				 };
				$.ajax({
					url:'../api/signOut.php',
					data:{
						uesname:uesname.val(),
						psw:psw.val()
					},
					success:function(str){
						console.log(str);
						if(str === 'ok'){
							location.href = '../html/signIn.html';
						}else if(str === 'no'){
							alert('哎呀呀，该用户已存在！')
						}
				
					}
				});
			});
	
			
		})
	})
})