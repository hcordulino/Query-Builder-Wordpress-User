var app = angular.module('queryBuilder', []);
app.controller('queryCtrl', function($scope, $http) {
	$scope.users = null;
	$http.get('js/usuarios.json').success(function(response) {
        $scope.users = response;
    });
});