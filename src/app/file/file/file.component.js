"use strict";

angular.module("file").component("file", {
  template: require("./file.template.html"),
  controller: [
    function FileController() {
      const ctrl = this;
      ctrl.isHTML5 = !!(File && FormData);

      ctrl.files = retrieveFiles();

      function retrieveFiles() {
        return localStorage["files"] ? JSON.parse(localStorage["files"]) : [];
      }
    },
  ],
});
