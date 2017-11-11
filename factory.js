/* This getCommitteeList is of method type get where on success will return the data to your controller */
angular.module('app').factory('userfactory', ['$http',
    function ($http) {
        return {
           // get committee members
            getCommitteeList: function () {
                var promise = $http.get('committeeList').then(function (response) {
                    return response;
                }, function (error) {
                    return false;
                })
                return promise;
            }
         }
]);
