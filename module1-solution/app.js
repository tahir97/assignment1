(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.itemsList = "";
  $scope.itemsCount = "";
  $scope.message = "";

  $scope.checkLunchItems = function () {
     $scope.itemsCount = getItemsCount($scope.itemsList);
     $scope.message = getMessage ($scope.itemsCount);
   };
}

function getItemsCount (itemsList) {
  if(itemsList == ""){
    return 0;
  } else {
    var itemsArray = itemsList.split(',');
    return itemsArray.length;
  }
}
function getMessage (itemsCount) {
   if(itemsCount == 0){
     return "Please enter data first";
   } else if(itemsCount <= 3) {
     return "Enjoy!";
   } else {
     return "Too much!";
   }
 }

})();
