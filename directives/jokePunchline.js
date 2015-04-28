  angular.module('jokeApp')
  .directive('jokePunchline',function(){
    return{
      restrict: 'E',
      templateUrl: 'directives/joke-punchline.html'
    };
  });
  