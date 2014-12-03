
function $(selector){
var self ={};
var self.selecter = selector;
self.element = document.querySelector(self.selector);
self.setAttribute = function(name, value){
  if(name){
    self.element.setAttribute(name, value);
  }
}
}
