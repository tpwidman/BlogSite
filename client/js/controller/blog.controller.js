app.controller('blog.controller.js', ['$scope','$location','ParseData', function ($scope, $location, ParseData) {
	$scope.posts = [];
	$scope.greeting = 'Hey there!';
	$scope.newPost = function (view) { 
		$location.path(view)
	}
	
	ParseData.query().$promise.then(function (data){
		$scope.posts = data.results;
		 
	 })
	 $scope.viewPost = function (view) {
		 $location.path(view);
	 }
	 
	/*ParseData.query().then(function(data) {
		for (var i = 0; i < data.results.length; i++) {
			var post = {
				author: data.results[i].author,
				content: data.results[i].content,
				title: data.results[i].title
			}
			$scope.posts.push(post)
			
		}
		}).catch(function() {
			alert('error');
		});*/
	
	
	}]);