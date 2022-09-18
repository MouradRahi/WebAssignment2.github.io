window.onload = () => {
	let pointer_x = 500;
	let pointer_y = 150;
	let game_state = false;
	const start = document.getElementById("start");
	const end =document.getElementById("end");
	const boundaries = document.getElementsByClassName("boundary");

	start.addEventListener("mousemove", () => {
		document.getElementById("status").innerText = "Game started your current score is: ";
		game_state = true;

		end.addEventListener("mousemove", () =>{
			score = score + 5;
			document.getElementById("status").innerText = "You win your current score is: ";
			pointer_x = e.clientX;
			pointer_y = e.clientY;
			game_state=false;
			//let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
			//console.log(coor);
		});

		for (let i=0; i<boundaries.length; i++){
			boundaries[i].addEventListener("mousemove", () =>{
				document.getElementById("status").innerText = "You lose your current score is: ";
			boundaries[0].style.backgroundColor = "red";
			boundaries[1].style.backgroundColor = "red";
			boundaries[2].style.backgroundColor = "red";
			boundaries[3].style.backgroundColor = "red";
			boundaries[4].style.backgroundColor = "red";
			game_state=false;
			});
		}


	});


} 