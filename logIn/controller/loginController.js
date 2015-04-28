angular.module('userApp',[])
.controller('loginController',function(log) {
    this.username;
    this.password;
    
    this.addUser = function() {
        console.log(this.username)
        console.log(this.password)
        log.logIn(this.username,this.password)
    }
});