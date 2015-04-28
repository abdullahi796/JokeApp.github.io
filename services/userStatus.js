angular.module('jokeApp')
.factory('user',function dataFactory() {
    return {
        checkStatus: function() {
            Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
            var loggedInUser = Parse.User.current();
            if(!loggedInUser){
                return false;
            } else {
                return true;
            }   
        }
    };
});
