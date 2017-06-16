require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'bootstrap':'../lib/bootstrap/js/bootstrap',
		'zxCarousel':'../lib/jquery-zxCarousel/jquery.zxCarousel',
		'zxZoom':'../lib/jquery-zxZoom/jquery.zxZoom'
	},
	shim:{
		'bootstrap':['jquery'],
		'zxCarousel':['jquery'],
		'zxZoom':['jquery']
	}
})