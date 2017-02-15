(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menulist = "";
  $scope.sayMessage = "";

  $scope.checkLunchmenu = function () {
	 var qtylunch = 0;
	 if ($scope.menulist == "" || $scope.menulist == " ")  {
		$scope.sayMessage = "Please enter data first"; 
	 }else{
		 qtylunch = splitString($scope.menulist, ',');
		 //console.log('qtylunch: "' + qtylunch + '"');
		 if (qtylunch <= 3 ){
			 $scope.sayMessage = "Enjoy!"
		 }else{
			 $scope.sayMessage = "Too much!"
		 }
	 }
  };
  
  function splitString(stringToSplit, separator) {
	 var arrayOfStrings = stringToSplit.split(separator);

	//console.log('The original string is: "' + stringToSplit + '"');
	//console.log('The separator is: "' + separator + '"');
	//console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  
     return arrayOfStrings.length
  
  }
  
}

})();
