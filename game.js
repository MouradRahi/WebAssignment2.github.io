let pointer_x=-1;
let pointer_y=-1;
document.onmousemove = function(event) {
	pointer_x = event.pageX;
	pointer_y = event.pageY;
}
if (pointer_x!=1){
    console.log("movement");
}