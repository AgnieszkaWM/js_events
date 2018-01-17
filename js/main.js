var list = document.getElementById ('list');
var add = document.getElementById('addElem');
var listTag = document.getElementsByTagName('li');
var listLength = 1;

add.addEventListener('click', function (addItem) {
		var element=document.createElement ('li');
		element.innerHTML='item '+ listLength;
		listLength++;
		list=list.appendChild(element);
	});

//Second version:

/*var itemCounter = 1;
var list = document.getElementById ('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function (addItem) {
	list.innerHTML += '<li>Item ' + itemCounter + '</li>';
	itemCounter++;
});*/


