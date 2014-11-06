'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      var empty = $scope.todo == null || $.trim($scope.todo) == "";
      var found = $.inArray($scope.todo, $scope.todos) > -1;
      if (!empty && !found) {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
      else
      {
        if (empty) { alert("Can't add an empty task!"); }
        if (found) { alert("Task already in todo list!"); }
      }
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
