angular.module("app", ["ui.router"])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		"use strict";

		$stateProvider.state("home",{
			url: "/home",
			templateUrl: "javascripts/app/index/index.html",
			controller: ["$scope", function($scope){
				$scope.message = "Hello from the index controller";
			}]
		});

		$urlRouterProvider.otherwise("/home");
	}]);