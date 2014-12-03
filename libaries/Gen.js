
function $(selector){
var self ={};
var self.selecter = selector;
self.element = document.querySelector(self.selector);
self.setAttribute = function(name, value){
    self.element.setAttribute(name, value);
}
self.alert = function(msg){
  alert(msg);
}

}
