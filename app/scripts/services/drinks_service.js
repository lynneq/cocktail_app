'use strict';

angular.module('cocktailNinjaApp')
  .factory('DrinksService', function ($http, halClient) {

    return {
      'load': function() {
          //return halClient.$get('http://cocktail-ninja.herokuapp.com');
          return halClient.$get('http://localhost:9292');
      }
    };

  });
