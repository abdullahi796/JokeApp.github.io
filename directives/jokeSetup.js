   angular.module('jokeApp')
  .directive('jokeSetup',function(){
    return{
      restrict: 'E',
      templateUrl: 'directives/joke-setup.html'
    };
  });