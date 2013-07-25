function UnsubscribeNotificationController($scope, $http) {

	$scope.helpText = "Write your comments or complaints here., we will take care of this. We promise!";
	$scope.swapDiv = true;
	
	$scope.id = 123;
//    $scope.login.user = null;
    
    $scope.removeMe = function() {
    	
   	 var formData = {
			  'userId' : '123',
			  'irrelevant' : $scope.irrelevant,
		      'frequent' : $scope.frequent,
		      'other' : $scope.other,
			  'comments' : $scope.comments
		    };
			var jdata = 'mydata='+JSON.stringify(formData); // The data is to be string.
    	
    	$http({
            url: '/unsubscribe/removeMe',
            method: "POST",
            data: jdata,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            $scope.respMessage = "You have successfully unsubscribed from our mailing list, You can always enable notifications in users settings page.";
        	$scope.swapDiv = false;
        }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

    };
};