window.onload= ()=>{
	let pointer_x=-1;
	let pointer_y=-1;
	document.getElementById("start").onmousemove =  function(event) {myFunction(event)};

	function myFunction(e) {
	  pointer_x = e.clientX;
	  pointer_y = e.clientY;
	  let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
	  console.log(coor);
	  if((pointer_x>740 || pointer_x <240) && (pointer_y>426 || pointer_y < 126)){
		console.log("lose");
	}
	}
	
	const boundaries=document.getElementsByClassName("boundary");
	console.log(boundaries[0].pageX);
	if ((pointer_x==boundaries[0].pageX && pointer_y==boundaries[0].pageY)){
		console.log("lose");
	}
} 