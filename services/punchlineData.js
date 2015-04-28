angular.module('jokeApp')
.factory('punchlineData',function dataFactory() {
    var punchlineArr = [];
    return {
        getPunchline : function(jokes,$scope) {
            Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
            var punchline = Parse.Object.extend("Punchline");
            var query = new Parse.Query(punchline);     
            query.find({
              success: function(results) {
 
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) { 
                    var object = results[i];
                    var tempPunchline = {
                        text: object.get('text'),
                        author: object.get('author'),
                        likes: object.get('likes'),
                        voted: object.get('voted'),
                        colorUp: object.get('colorUp'),
                        colorDown: object.get('colorDown'),
                        parentId: object.get('parent')                            
                    }
                    punchlineArr.push(tempPunchline);
                    $scope.$apply();                    
                  }
                for (var i = 0; i < results.length; i++) { 
                    for(var c=0; c<jokes.length;c++){
                        if(jokes[c].setup.objectId === punchlineArr[i].parentId){
                            jokes[c].punchline.push(punchlineArr[i]);
                            $scope.$apply();
                        }
                    }
                  } 
                for(var c=0; c<jokes.length;c++){
                        jokes[c].punchline.shift();
                        $scope.$apply();
                }                  
                },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              });
        }
    };
});
