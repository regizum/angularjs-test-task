"use strict";

angular.module("file").component("fileDrop", {
  template: require("./file-drop.template.html"),
  bindings: {
    files: "=",
  },
  controller: [
    "$scope",
    function FileController($scope) {
      const ctrl = this;
      const fileDrop = document.getElementById("file-drop");

      const init = () => {
        ctrl.isHTML5 = !!(File && FormData);
        ctrl.files = ctrl.files || [];
      };

      const handleDragEnterEvent = (event) => {
        event.stopPropagation();
        event.preventDefault();
        ctrl.isOver = true;
      };

      const handleDragLeaveEvent = (event) => {
        event.stopPropagation();
        event.preventDefault();

        $scope.$apply(() => {
          ctrl.isOver = false;
        });
      };

      const handleDragOverEvent = (event) => {
        event.stopPropagation();
        event.preventDefault();

        $scope.$apply(() => {
          ctrl.isOver = true;
        });
      };

      const handleDropEvent = (event) => {
        event.stopPropagation();
        event.preventDefault();

        $scope.$apply(() => {
          ctrl.isOver = false;
        });

        setFiles(event.dataTransfer.files);
      };

      const setFiles = (files) => {
        var textFile = /text.*/;
        if (files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            if (files[i].type.match(textFile)) {
              readText(files[i]);
            } else {
              showError("It doesn't seem to be a text file!");
            }
          }
        }
      };

      const readText = (file) => {
        const reader = new FileReader();
        const fileItem = {
          name: file.name,
          datetime: new Date(),
          size: file.size,
        };

        reader.readAsText(file); // fires onload when done.

        reader.onload = (event) => {
          fileItem.text = event.target.result;
          $scope.$apply(() => {
            ctrl.files.push(fileItem);
          });

          localStorage["files"] = JSON.stringify(ctrl.files);
        };
      };

      const showError = (errorMessage) => {
        console.log(errorMessage);
      };

      init();

      $scope.handleInputChangeEvent = (event) => {
        setFiles(event.target.files);
      };

      ctrl.browseFiles = () => {
        const elem = document.getElementById("file-select");
        if (elem && document.createEvent) {
          const event = document.createEvent("MouseEvents");
          event.initEvent("click", true, false);
          elem.dispatchEvent(event);
        }
      };

      if (fileDrop) {
        fileDrop.addEventListener("dragenter", handleDragEnterEvent, false);
        fileDrop.addEventListener("dragleave", handleDragLeaveEvent, false);
        fileDrop.addEventListener("dragover", handleDragOverEvent, false);
        fileDrop.addEventListener("drop", handleDropEvent, false);
      }
    },
  ],
});
