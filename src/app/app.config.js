"use strict";

angular.module("app").config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    const path = process.env.URL_PATH ? process.env.URL_PATH : "/";
    $locationProvider.html5Mode(true);
    $routeProvider
      .when(path, {
        template: require("../index.html"),
      })
      .otherwise({
        redirectTo: path,
      });
  },
]);
