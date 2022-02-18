"use strict";

angular.module("file").component("fileListItem", {
  template: require("./file-list-item.template.html"),
  bindings: {
    file: "=",
    onDelete: "=",
  },
  controller: [
    "$uibModal",
    function FileListItemController($uibModal) {
      const ctrl = this;
      ctrl.isHTML5 = !!(File && FormData);

      ctrl.open = () => {
        $uibModal.open({
          animation: true,
          template: require("../file-list-item-modal/file-list-item-modal.template.html"),
          controller: "fileListItemModal",
          resolve: {
            file: function () {
              return ctrl.file;
            },
          },
        });
      };
    },
  ],
});
