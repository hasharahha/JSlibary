
function $(element, attr, value){
  var Elem = document.createElement(element);
  Elem[attr] = value;
  document.body.appendChild(Elem);
}
