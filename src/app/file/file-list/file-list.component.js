"use strict";

angular.module("file").component("fileList", {
  template: require("./file-list.template.html"),
  bindings: {
    files: "=",
  },
  controller: [
    function FileListController() {
      const ctrl = this;

      ctrl.delete = (index) => {
        ctrl.files.splice(index, 1);
        localStorage["files"] = JSON.stringify(ctrl.files);
      };
    },
  ],
});
