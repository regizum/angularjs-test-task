"use strict";

angular
  .module("file")
  .controller("fileListItemModal", function ($scope, $uibModalInstance, file) {
    $scope.file = file;

    $scope.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };
  });
