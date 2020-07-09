
 
!function(ng) {
    ng.module("my.module", [])
    .component("myComponent", require("./component.js"));
}(require("angular"));