function PhoneListCtrl($scope) {
	$scope.phones = [
		{name: 'Nexus S', snippet: "fast just got faster with"},
		{name: 'Iphone', snippet: "from apple"}
	];
	$scope.reset = function(input) {
		if (input) {
			input.text('');
		}
	}
}