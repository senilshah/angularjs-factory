# angularjs-factory
To call an API from your JS file using factory call

Factory constructs a new service using a function with zero or more arguments (these are dependencies on other services). The return value of this function is the service instance created by this factory.

In JS file, where you define the controller, initialize a factory call there by below code (if you are creating controllers in customangular.js file itself) :

     angular.module('app').controller('HomeController', ['$http', 'userfactory', '$scope','$timeout', '$rootScope', '$filter', function($http, userfactory, $scope, $timeout, $rootScope, $filter) {
      console.log('home controller loaded');
      $('.main-menu').find('li').removeClass('active');
      $('#menu-home').addClass('active');

      userfactory.getCommitteeList().then(function(response){
                if(response.data.success)
                {
                    $scope.committee = response.data.data;
                    $scope.messageUser = response.data.message;
                }
            });
            }]);
            
Createing a factory.js

    angular.module('app').factory('userfactory', ['$http',
        function ($http) {
            getCommitteeList: function () {
                    $('.spinner-loader').show();
                    var promise = $http.get('committeeList').then(function (response) {
                        return response;
                    }, function (error) {
                        return false;
                    })
                    return promise;
                }
    }
    ]);
    
define the method in routes file

    Route::get('committeeList', 'UserController@committeeList');

