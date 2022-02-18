"use strict";

angular.module("app").config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", { templateUrl: "index.html" })
      .otherwise({ redirectTo: "/" });
  },
]);
