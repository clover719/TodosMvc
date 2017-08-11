(function (angular) {
	'use strict';
	// Your starting point. Enjoy the ride!

	// 1.创建模块
	var app = angular.module('todosApp', ['service'])

	// 2.创建控制器
	app.controller('todosController', [
		'$scope',
		'$location',
		'$log',
		'MyService'
		, function($scope,$location,$log,MyService){
			//console.log(MyService.name)
			// $location.url()可以得到url中锚点值#后的部分
			// console.log($location.url())
			// hashchange
			// $scope.$watch

			// 功能1.任务的展示(ng-repeat)
			// 假设已经得到数据，

			$scope.todos = MyService.get()

			// 功能2.添加任务
			$scope.newTodo=''  // ng-model
			$scope.add = function(){
				// 判断newTodo是否为空，为空则不添加任务
				if(!$scope.newTodo){
					return
				}

				// 标记
				MyService.add($scope.newTodo)

				//
				// 置空
				$scope.newTodo=''
			}
		}])

})(angular);
