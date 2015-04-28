angular.module('jokeApp')
.factory('data',function dataFactory() {
    return {
        updateForm: function(joke,userLine) {
         //alert('Updated Form');
          joke.punchline.push(userLine);
        },
        updateCloud: function(joke,userLine) {
          Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
          
          var Punchline = Parse.Object.extend("Punchline");
          var punchline = new Punchline();
          var user = Parse.User.current();
          
          punchline.set("text", userLine.text);
          punchline.set("author",user.get('username'));
          punchline.set("likes", userLine.likes);
          punchline.set('voted',userLine.voted);
          punchline.set('colorUp',userLine.colorUp);
          punchline.set('colorDown',userLine.colorDown);   
          punchline.set('parent',joke.setup.objectId)
           
          punchline.save(null, {
            success: function(punchline) {
              // Execute any logic that should take place after the object is saved.
              alert('New object created with objectId: ' + punchline.id);
            },
            error: function(punchline, error) {
              // Execute any logic that should take place if the save fails.
              // error is a Parse.Error with an error code and message.
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });     
        },
        
    };
});
