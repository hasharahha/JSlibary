
function $(selector, value){
var call = selector;
var self ={};
var self.selecter = selector;


var self.element = document.createElement(selector);
self.element[value];
document.body.appendChild(self.element);
}
