define(function(){
	return {
		/**
		 * [生成某一范围内的随机数字]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T11:53:53+0800
		 * @param         {number}                 min [最小值]
		 * @param         {number}                 max [最大值]
		 * @return        {[number]}                   [在min与max范围内的随机数字]
		 */
		randomNum:function(min,max){
			// 生成一个在min,到max之间的随机数
			var res = parseInt(Math.random()*(max+1-min))+min;
			return res;

		},

		/**
		 * [生成一个随机的颜色]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T11:51:58+0800
		 * @return        {[number]}          [rgb(随机数字，随机数字，随机数字)]
		 */
		randomColor:function(){
			var r = this.randomNum(0,255);
			var g = this.randomNum(0,255);
			var b = this.randomNum(0,255);
			var res = 'rgb('+r+','+g+','+b+')';
			return res;
		},


		/*
			
		*/
		/**
		 * [传出数据的最大值]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T11:51:10+0800
		 * @return        {[Number]}             [最大数值]
		 */
		max:function(){
			var maxs = arguments[0];
			for(var i=1;i<arguments.length;i++){
				if(maxs < arguments[i]){
					maxs = arguments[i];
				}
			}
			return maxs;
		},


		/**
		 * [传出数据的最小值]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T11:49:55+0800
		 * @return        {[nunber]}             [最小值]
		 */
		min:function(){
			var mins = arguments[0];
			for(var i=1;i<arguments.length;i++){
				if(mins > arguments[i]){
					mins = arguments[i];
				}
			}
			return mins;
		},



		/**
		 * [删除非元素节点]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T11:56:26+0800
		 * @return        {[arry]}                 [元素节点]
		 */
		getElement:function(nodes){
			var arr = [];
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].nodeType === 1){
					arr.push(nodes[i]);
				}
			}
			return arr;
			
		},
		//getElement(nodes)输入一个元素,若是元素节点则输出,nodes一个类数组

		/**
		 * [兼容各种浏览器获取css的样式]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T12:12:28+0800
		 * @param         {[string]}                 ele  [要获取样式的元素]
		 * @param         {[string]}                 arrt [要获取css样式的属性]
		 * @return        {[string]}                      [最终的样式]
		 */
		getStyle:function(ele,arrt){
			//保存最终样式
			var res;
			//判断window是否含有该属性方法
			if(window.getComputedStyle){
				res=getComputedStyle(ele)[arrt];
			}else if(ele.currentStyle){
				res=ele.currentStyle[arrt];
			}else{
				res=ele.style[arrt];
			}
			return res
			
		},
		//getStyle(ele,arrt);兼容ie8以下输入某个元素的样式属性，获取css的style则判断该浏览器


		//cookie的增删查改
		/**
		 * [cookie的增加与修改]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T13:43:30+0800
		 * @param         {[string]}                 name    [cookie名]
		 * @param         {[string]}                 value   [cookie值]
		 * @param         {[Date]}                 expries   [有效期]
		 * @param         {[string]}                 path    [路劲]
		 */
		setCookie:function(name,val,expires,path){
			var str_cookie = name + '=' + val;
			// 如果存在有效期
			if(expires){
				str_cookie += ';expires=' + expires
			}
			// 如果存在路径设置
			if(path){
				str_cookie += ';path=' + path
			}
			document.cookie = str_cookie;
		},
		// steCookie(name,value,expries,path);


		 /**
		  * [cookie的删除]
		  * @Author:Rotary
		  * @DateTime      2017-05-11T13:48:02+0800
		  * @param         {[string]}                 name [需要删除的cookie名]
		  */
		removeCookie:function(name){
			var now = new Date();
			now.steDate(now.getDate()-10)
			now = now.toUTCString;
			this.steCookie(name,null,now)
		},
		// removeCookie(name);

		/**
		 * [cookie的获取]
		 * @Author:Rotary
		 * @DateTime      2017-05-11T13:59:39+0800
		 * @param         {[string]}                 name [需要被获取的cookie名]
		 * @return        {[string]}                      [cookie 的值]
		 */
		getCookie:function(name){
			var cookies = document.cookie;
			var res = '';
			if(!cookies){
				return '';
			}
			var arr =cookies.split('; ');
			arr.forEach(function(item){
				var temp = item.split('=');
				if(temp[0] === name){
					res = temp[1];
				}
			})
			return res;
		},
		// getCookie(name);

		/**
		 * [animate description]
		 * @Author:Rotary
		 * @DateTime      2017-05-17T12:08:55+0800
		 * @param         {[type]}                 ele      [description]
		 * @param         {[type]}                 opt      [description]
		 * @param         {Function}               callback [description]
		 * @return        {[type]}                          [description]
		 */
		animate:function(ele,opt,callback){
			//创建一个判断多个函数的数量
			var timeLen = 0;
			//遍历对象
			for(var attr in opt){
				//当前执行函数
				timeLen++;
				cartoon(attr);
				
			}
			function cartoon(attr){
				var target = opt[attr];
				//每个定时器对应的名字
				var timeName = attr + 'name';

				clearInterval(ele[timeName]);

				ele[timeName] = setInterval(function(){
					//获取当前current要改变的属性值,获取单位
					var current = this.getStyle(ele,attr);
					var unit = current.match(/[a-z]+$/i);
					//判断是否存在单位,存在则输出，不存在则为空
					unit = unit? unit[0] : '';

					current = parseFloat(current);

					//目标值减去当前值，求速度
					var speed = (target-current)/8;
					//考虑透明度的特殊情况
					if(attr === 'opacity'){
						speed = speed>0? 0.1 : -0.1;
					}else{
						speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
					}
					if(speed === 0 || current === target){
						clearInterval(ele[timeName]);
						current = target - speed;
						//判断是否存在链式动画
						timeLen--;
						if(typeof callback === 'function' && timeLen===0){
							callback();
						}
					}

					ele.style[attr] = current + speed + unit;
					
				},30)
			}
		},
		//animate(ele,opt,callback)  ele元素 opt对象  callback函数    cartoon动画函数
		//
		//
		/**
		 * [匀速运动]
		 * @Author:Rotary
		 * @DateTime      2017-05-17T17:53:26+0800
		 * @param         {[type]}                 ele      [description]
		 * @param         {[type]}                 opt      [description]
		 * @param         {[type]}                 num      [description]
		 * @param         {Function}               callback [description]
		 * @return        {[type]}                          [description]
		 */
		constant:function(ele,opt,num,callback){
			var timeLen = 0;
			for(var attr in opt){
				timeLen++;
				cartoon(attr);
			}
			function cartoon(attr){
				var target = opt[attr];
				var timeName = attr + 'name'; 
				ele[timeName] = setInterval(function(){
					var speed = num;
					//获取当前位置
					var curren = parseFloat(getStyle(ele,attr));
					//获取当前的单位
					var unit = this.getStyle(ele,attr).match(/[a-z]+$/i);
					// 判断单位是否存在
					unit = unit ? unit[0] : '';
					if(Math.abs(curren)>=Math.abs(target)){
						clearInterval(ele[timeName]);
						curren = target - speed;
						timeLen--;
						if(typeof callback === 'function' && timeLen===0){
							callback();
						}
					}
					//匀速的速度
					ele.style[attr] = curren + speed + unit;
				},30)
				
			}
		},

		/**
		 * [加速运动]
		 * @Author:Rotary
		 * @DateTime      2017-05-17T17:54:23+0800
		 * @param         {[type]}                 ele      [description]
		 * @param         {[type]}                 opt      [description]
		 * @param         {[type]}                 num      [description]
		 * @param         {Function}               callback [description]
		 * @return        {[type]}                          [description]
		 */
		accelerate:function(ele,opt,num,callback){
			var timeLen = 0;
			for(var attr in opt){
				timeLen++;
				cartoon(attr);
			}
			function cartoon(attr){
				var target = opt[attr];
				var timeName = attr + 'name'; 
				ele[timeName] = setInterval(function(){
					//获取当前位置
					var speed = num;
					var curren = parseFloat(getStyle(ele,attr));
					//获取当前的单位
					var unit = this.getStyle(ele,attr).match(/[a-z]+$/i);
					// 判断单位是否存在
					unit = unit ? unit[0] : '';
					if(Math.abs(curren)>=Math.abs(target)){
						clearInterval(ele[timeName]);
						curren = target - speed;
						timeLen--;
						if(typeof callback === 'function' && timeLen===0){
							callback();
						}
					}
					//匀速的速度
					
					ele.style[attr] = curren + speed + unit;
				},30)
				
			}
		}
	}
});
		