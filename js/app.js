
angular.module('jokeApp', [])
  .controller('jokeController', function($scope, data , setupData , user) {

    $scope.jokes = [];
    $scope.num = 0;
    
    (function(){
      setupData.getSetup($scope.jokes,$scope,$scope.num);
    })(); 
    
    if(user.checkStatus() === false){
     window.location.href= '/logIn/login.html' ;
    }
    else{
      Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
      var currentUser = Parse.User.current();
      console.log(currentUser.Email);
    }
    this.voteUp = function(punchline) {
      if(punchline.voted === "n/a"){
        punchline.voted = 'up';
        punchline.likes +=1;
        punchline.colorUp='green'
      }
      else if(punchline.voted === 'down'){
        punchline.voted = 'n/a';
        punchline.likes +=1;
        punchline.colorDown='na'
      }
      else if(punchline.voted === 'up'){
        punchline.voted = 'n/a';
        punchline.likes -=1;
        punchline.colorUp='na'
      }
    };
    
    this.logOut = function() {
      alert("Logged Out");
      Parse.initialize("eVYWdZhzLDkA4L18ZkD8B4h12RB8E4dAuMIQ69UE", "LWExGfepSIrWMkppZJObvktVR2WDyET9IIgwTg8L");
      Parse.User.logOut();
      window.location.href= '/logIn/login.html';
    }
    this.voteDown = function(punchline) {
      $scope.$apply();
      if(punchline.voted === "n/a"){
        punchline.voted = 'down';
        punchline.likes -=1;
        punchline.colorDown='red'
      }
      else if(punchline.voted === 'up'){
        punchline.voted = 'n/a';
        punchline.likes -=1;
        punchline.colorUp='na'
      }
      else if(punchline.voted === 'down'){
        punchline.voted = 'n/a';
        punchline.likes +=1;
        punchline.colorDown='na'
      }
    };
    
    
  });

