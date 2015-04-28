 angular.module('userApp')
.factory('log',function dataFactory() {
    return {
        logIn: function(username,password) {
            Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
            
            Parse.User.logIn(username, password, {
              success: function(user) {
                // Do stuff after successful login.
                window.location.href= '/index.html';
              },
              error: function(user, error) {
                // The login failed. Check error to see why.
                alert(error.code);
              }
            });
        },
    };
});