//$(element, attr, value, id)
function $create(element, attr, value, id){
  var stat ='id';
  var Elem = document.createElement(element);
  Elem[attr] = value;
  document.body.appendChild(Elem);
  Elem['stat'] = id;
}
function $editprop(id, attr,  value){
  var Cache = id;
var edit = document.getElementById(Cache)
edit[attr] = value;
}
