//$(element, attr, value, id)
function $create(element, attr, value){
  var Elem = document.createElement(element);
  Elem[attr] = value;
  document.body.appendChild(Elem);
}
function $editprop(id, attr, value){
  var Cache = id;
var edit = document.getElementById(id)
edit[attr] = value;
}
