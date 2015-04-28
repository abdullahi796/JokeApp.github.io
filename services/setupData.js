
angular.module('jokeApp')
.factory('setupData',function dataFactory(punchlineData) {
    return {
        getSetup: function(jokes,$scope,num) {
            Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
            var setup = Parse.Object.extend("Setup");
            var query = new Parse.Query(setup);     
            query.find({
              success: function(results) {
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) { 
                  var object = results[i];
                  var tempJokes = 
                    {
                      setup:{
                        text: object.get('text'),
                        author: object.get('author'),
                        objectId: object.id
                        },
                      punchline: [
                        {
                          text: ' ',
                          author: ' ',
                          likes:0,
                          voted: 'n/a',
                          colorUp: 'na',
                          colorDown: 'na',
                          parentId: 'na'
                        }
                      ], 
                      num: i
                    };
                      jokes.push(tempJokes);  
                      $scope.$apply();
                    }
                    punchlineData.getPunchline($scope.jokes,$scope);
                  },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              });
                            
        }
        
    };
});
