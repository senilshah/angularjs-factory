angular.module('app').controller('HomeController', ['$http', 'userfactory', '$scope','$timeout', '$rootScope', '$filter', function($http, userfactory, $scope, $timeout, $rootScope, $filter) {	
 	userfactory.getCommitteeList().then(function(response){
            if(response.data.success)
            {
                $scope.committee = response.data.data;
                $scope.messageUser = response.data.message;
            }
        });
}]);
