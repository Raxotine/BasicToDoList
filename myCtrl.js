app.controller('myCtrl', function($scope) {
	$scope.names = ["Eat breakfast", "Brush teeth", "Shower"];
	$scope.tasks = [false, false];
	$scope.firstvar = "Add tasks";
	$scope.class = "undone";
	$scope.vari = "";
	$scope.adding = function () {
		$scope.errortext = "";
		if (!$scope.newTask) {return;}
		if ($scope.names.indexOf($scope.newTask) == -1) {
			$scope.names.push($scope.newTask);
			$scope.newTask = "";
		} else {

			$scope.errortext = "You already have that task on the list.";
		}
	}
	$scope.delete = function (x) {
		$scope.names.splice(x, 1);
		$scope.tasks.splice(x, 1);
	}

});
