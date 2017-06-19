require(['config'],function(){
	require(['jquery','common','base'],function($,c,b){
		$(function(){
			var btnsub = $('#submit');
			btnsub.on('click',function(){
				$.ajax({
					url:'../api/signIn.php',
					data:{
						uesname:$('#name').val(),
						psw:$('#password').val()
					},
					success:function(str){
						if(str === 'yes'){
							location.href = '../index.html';
						}else if(str === 'no'){
							alert('密码不正确');
						}
					}
				})
			})
				
		})
	})
});