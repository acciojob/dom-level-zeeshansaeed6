//your JS code here. If required.
const targetElement=document.getElementId("level")
let level=0;
let current=targetElement;
while(current){
	level++;
	current=current.parentElement;
}
alert(`The level of the element is: ${level}`);