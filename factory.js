/* This getCommitteeList is of method type get where on success will return the data to your controller */
angular.module('aiam-app').factory('userfactory', ['$http',
    function ($http) {
        return {
           // get committee members
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
