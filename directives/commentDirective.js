
angular.module('jokeApp')
  .directive('comment',function(){
    return{
      restrict: 'E',
      templateUrl: 'directives/comment.html'
    };
  });