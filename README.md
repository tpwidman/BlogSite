### Instructions

The objective of this project is build a blog site with angular using parse.com as a database.

Signing up for a FREE! [parse.com](https://parse.com/) account will be necessary to complete this project.
#### Further Reading
Angular [docs](https://docs.angularjs.org/api/ng)
Angular usage [examples](https://github.com/curran/screencasts/tree/gh-pages/introToAngular)

[Angular - what goes where](http://demisx.github.io/angularjs/2014/09/14/angular-what-goes-where.html)

[Parse docs for using REST API](https://parse.com/docs/rest/guide)

### Basic Req's
Utilize Angular's built in functionality to simplify your client side code. Consult the angular [docs](https://docs.angularjs.org/guide/introduction)
Note: During this project, always choose to code using angular templating instead of using plain javascript and html. Review Dependency Injection, '$location','$scope', $resource', 'ngResource', 'ngRoute', '$routeProvider', '$http', '$rootScope' as they may be needed

##### client

* factory(shared for both controllers/views):
		-Create a service to make posts and get requests to parse.com
		-Request headers will need to be submitted with each request to parse
		-Hint: [ngResource](https://docs.angularjs.org/api/ngResource) enables api calls from client side and will be useful
* createpost:
	html:
		-enable user to switch between views (submitting post should back out to listposts)
		-form to submit new post should bind title, content, author to $scope
		-submit should navigate back to main page
	controller:
		-enable user to switch between views (submitting post should back out to listposts)
		-send a post request to parse.com with factory service created
* listposts:
	html:
		-enable user to switch between views (clicking a create post button should go to createpost)
		-display a list of all posts made by user with most recent at the top.
		hint: (ng-repeat)[https://docs.angularjs.org/api/ng/directive/ngRepeat]
	controller:
		-enable user to switch between views (clicking a create post button should go to createpost)
		-using factory service make a query to retrieve all posts .then (see what i did there (: ) set the posts on the $scope property for display

##### server
* server.js - server side code with [nodejs](https://nodejs.org/en/docs/)
	* Create a basic server to handle resource requests from front end.
    * Your server code will just now just be responsible for serving files (such as .html, .css, .js, etc).
      * When a file is not found, you should return a 404 not found error
      * Your server code will no longer respond to /messages GET and POST requests. Nor do you need the data.json or messages.txt files.
      * Your blog posts will be stored in the Parse.com database, and you will use the Parse.com REST API on your client side (within your factory) to GET and POST data from/into Parse.
	Note: Server side code will look similar to the code AngularTweets project.

### Extra Credit
* Use browserify to modularize front end code and bundle dependencies

### Extra Extra Credit
* Beautify and personalize blog site.