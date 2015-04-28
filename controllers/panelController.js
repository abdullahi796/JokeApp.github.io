angular.module('jokeApp')
  .controller('panelController',function() {
        this.tab = 1;
   
        this.isPanel = function(check) {
            return this.tab === check;
        };
        
        this.panelClick = function(newValue) {
            this.tab = newValue;
        };
  });