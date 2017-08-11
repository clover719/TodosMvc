(function(angular){

	// 1.创建服务模块
	var app = angular.module('service',[])

	// 2.创建服务
	// 第一个参数：服务的名字
	// 第二个参数里的function:
	//    angular会把这个function当作构建函数，angular会帮助我们new这个构建函数，然后得到一个对象。A,B
	app.service('MyService', [function(){
		 this.name = '小明'
	}])
})(angular)
