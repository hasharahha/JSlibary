
function $(selector){
var self ={};
var self.selecter = selector;
var self.element = document.querySelector(self.selector);
var self.setAttribute = function(name, value){
    self.element.setAttribute(name, value);
}
var self.alert = function(msg){
  alert(msg);
}

}
