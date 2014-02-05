function randomPriority(){
	"use strict";
	return Math.floor((Math.random()*100)+1);
}

var app = angular.module("app")
	.directive("red",[function(){
		"use strict";
		return {
			restrict:"A",
			priority: randomPriority(),
			link: function(scope, element, attrs, ctrl, transclude){
				element.css("color", "red");
			}
		};
	}])
	.directive("blue",[function(){
		"use strict";
		return {
			restrict:"A",
			priority: randomPriority(),
			link: function(scope, element, attrs, ctrl, transclude){
				element.css("color", "blue");
			}
		};
	}])
	.directive("green",[function(){
		"use strict";
		return {
			restrict:"A",
			priority: randomPriority(),
			link: function(scope, element, attrs, ctrl, transclude){
				element.css("color", "green");
			}
		};
	}]);
var BLUE_OVERRIDE = randomPriority() >= 75;
if(window.BLUE_OVERRIDE !== undefined && BLUE_OVERRIDE){
	app.config(["$provide", function($provide){
		"use strict";
		$provide.decorator("blueDirective", ["$delegate", function($delegate){
			var directive = $delegate[0];

			directive.compile = function(element, attrs){
				return function(scope, element, attrs){
					element.css("color", "cyan");
				};
			};
			return $delegate;
		}]);
	}]);
}