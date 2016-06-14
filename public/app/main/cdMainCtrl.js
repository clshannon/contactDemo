angular.module('app').controller('cdMainCtrl', function($scope) {
	$scope.notes = [
		{name: 'Note 1', featured: true, published: "when1"},
		{name: 'Note 2', featured: true, published: "when2"},
		{name: 'Note 3', featured: true, published: "when3"}
	]
});