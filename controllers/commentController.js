  angular.module('jokeApp')
  .controller('commentController',function($scope,data) {

      $scope.currentUser = Parse.User.current();
      console.log('username');
      this.userLine = {};
      this.userLine.author = $scope.currentUser.get('username');
      this.userLine.likes = 0;       
      this.userLine.voted = "n/a";
      this.userLine.colorUp = 'na';
      this.userLine.colorDown = 'na';
      
      this.addPunchline = function (joke) {
        data.updateForm(joke,this.userLine);
        data.updateCloud(joke,this.userLine);
        /*
        joke.punchline.push(this.userLine);
        */
        this.userLine = {};
        this.userLine.author = $scope.currentUser.get('username');
        this.userLine.likes = 0;       
        this.userLine.voted = "n/a";
        this.userLine.colorUp = 'na';
        this.userLine.colorDown = 'na';    
      };
  });