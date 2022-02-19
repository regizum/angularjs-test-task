"use strict";

angular.module("file").controller("fileListItemModal", [
  "$scope",
  "$uibModalInstance",
  "file",
  function ($scope, $uibModalInstance, file) {
    $scope.file = file;

    $scope.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };
  },
]);
