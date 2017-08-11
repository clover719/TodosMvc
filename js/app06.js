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
			console.log(MyService)
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


			// 功能3.删除任务
			$scope.remove = function(id){
				// 根据id到数组$scope.todos中查找相应元素，并删除
				MyService.remove(id)
			}

			// 功能4：修改任务内容
			$scope.isEditingId = -1
			$scope.edit = function(id){
				$scope.isEditingId = id
			}

			// 只是改变也文本框的编辑状态
			$scope.save = function(){
				$scope.isEditingId = -1
				MyService.save()
			}

			// 功能5.修改任务状态
			$scope.statusChange = function(){
				this.save()
			}

			// 功能6.批量切换任务状态
			$scope.selectAll = false
			$scope.toggleAll = function(){
				// 让$scope.todos中所有数据的completed值等于$scope.selectAll
				MyService.toggleAll($scope.selectAll)
			}

		}])

})(angular);
