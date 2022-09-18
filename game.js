window.onload = () => {
	let score = 0;
	let game_state = false;
	const start = document.getElementById("start");
	const end = document.getElementById("end");
	const boundaries = document.getElementsByClassName("boundary");
	const game = document.getElementById("game");

	start.addEventListener("mousemove", () => {
		boundaries[0].style.backgroundColor = "#eeeeee";
		boundaries[1].style.backgroundColor = "#eeeeee";
		boundaries[2].style.backgroundColor = "#eeeeee";
		boundaries[3].style.backgroundColor = "#eeeeee";
		boundaries[4].style.backgroundColor = "#eeeeee";
		document.getElementById("status").innerText = "Game started your current score is: " + score;
		game_state = true;

		end.addEventListener("mousemove", () => {
			if (game_state) {
				score = score + 5;
				document.getElementById("status").innerText = "You win your current score is: " + score;

				game_state = false;
			}
			//let coor = "Coordinates: (" + pointer_x + "," + pointer_y + ")";
			//console.log(coor);
		});

		for (let i = 0; i < boundaries.length; i++) {
			boundaries[i].addEventListener("mousemove", () => {
				if (game_state) {
					score = score - 10;
					document.getElementById("status").innerText = "You lose your current score is: " + score;
					boundaries[0].style.backgroundColor = "red";
					boundaries[1].style.backgroundColor = "red";
					boundaries[2].style.backgroundColor = "red";
					boundaries[3].style.backgroundColor = "red";
					boundaries[4].style.backgroundColor = "red";
					game_state = false;
				}
			});

		}
		game.addEventListener("mouseleave", () => {
			if (game_state) {
				score = score - 10;
				document.getElementById("status").innerText = "You lose your current score is: " + score;
				boundaries[0].style.backgroundColor = "red";
				boundaries[1].style.backgroundColor = "red";
				boundaries[2].style.backgroundColor = "red";
				boundaries[3].style.backgroundColor = "red";
				boundaries[4].style.backgroundColor = "red";
				game_state = false;
			}
		});


	});


} 