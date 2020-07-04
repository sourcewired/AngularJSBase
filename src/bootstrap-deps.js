
 
!function() {
    var angular = require("angular");
    angular.module("my.module", []).component("myComponent", require("./component.js"));
}();