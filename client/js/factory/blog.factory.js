//The action to call the parse service should be here.



app.factory('ParseData', ['$http','$resource', function($http, $resource) {
    var headers = {
            'X-Parse-Application-Id':'kgnd8L0Nm30iE2OdkhszW0X2cIZFm8Jwai3jDSR3',
            'X-Parse-REST-API-Key':'EMWrOg5dvex2s5uLhXELX0JBUVqITqOih3tnLBuv',
            "Content-Type": "application/json"
        }
    
    var ParseFactory = $resource('https://api.parse.com/1/classes/BlogPosts/:id',{},
     {
        'query': {
            headers: headers
            
        },
        'save': {
            method: 'POST',
            headers: headers
        }
        
    })
    return ParseFactory;
}]);
