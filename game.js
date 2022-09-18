window.onload= ()=>{
	let pointer_x=500;
	let pointer_y=150;
	const win_condition=true;
	let score =0;
	document.getElementById("start").onmousemove =  function(event) {myFunction(event)};

	function myFunction(e) {
		document.getElementById("status").innerText="Game started your current score is: "+score;
	  	pointer_x = e.clientX;
	  	pointer_y = e.clientY;
	  	let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
	  	console.log(coor);
	  	
	}

	if (document.getElementById("status").textContent=="You lose your current score is: "+score){

		document.getElementById("end").onmousemove =  function(event) {myFunction(event)};

		function myFunction(e) {
			score=score+5;
			document.getElementById("status").innerText="You win your current score is: "+score;
	  		pointer_x = e.clientX;
	  		pointer_y = e.clientY;
	  	//let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
	  	//console.log(coor);
	  	
		}
	}
	
	
	const boundaries=document.getElementsByClassName("boundary");
	
	boundaries[0].onmousemove = function(event) {func (event)}
	boundaries[1].onmousemove = function(event) {func (event)}
	boundaries[2].onmousemove = function(event) {func (event)}
	boundaries[3].onmousemove = function(event) {func (event)}
	boundaries[4].onmousemove = function(event) {func (event)}
	
	
	function func(even){
		score=score-10;
		//console.log(score);
		document.getElementById("status").innerText="You lose your current score is: "+score;
		boundaries[0].style.backgroundColor="red";
		boundaries[1].style.backgroundColor="red";
		boundaries[2].style.backgroundColor="red";
		boundaries[3].style.backgroundColor="red";
		boundaries[4].style.backgroundColor="red";
		
	}
	
} 