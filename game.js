window.onload= ()=>{
	let pointer_x=500;
	let pointer_y=150;
	const win_condition=true;
	const score =0;
	document.getElementById("start").onmousemove =  function(event) {myFunction(event)};

	function myFunction(e) {
	  	pointer_x = e.clientX;
	  	pointer_y = e.clientY;
	  	let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
	  	console.log(coor);
	  	
	}
	
	
	const boundaries=document.getElementsByClassName("boundary");
	
	boundaries[0].onmousemove = function(event) {func (event)}
	boundaries[1].onmousemove = function(event) {func (event)}
	boundaries[2].onmousemove = function(event) {func (event)}
	boundaries[3].onmousemove = function(event) {func (event)}
	boundaries[4].onmousemove = function(event) {func (event)}
	
	
	function func(even){
		document.getElementById("status").innerText="you lose";
		boundaries[0].style.backgroundColor="red";
		boundaries[1].style.backgroundColor="red";
		boundaries[2].style.backgroundColor="red";
		boundaries[3].style.backgroundColor="red";
		boundaries[4].style.backgroundColor="red";
		
	}
	
} 