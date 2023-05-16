
			var names = ["Ben", "Joel", "Judy", "Anne"];
			var scores = [88, 98, 77, 88];
	
			var $ = function (id) { return document.getElementById(id); };
	
			window.onload = function () {
				$("name").focus(); 
				$("display_results").onclick = displayResults;
				$("display_scores").onclick = displayScores;
				$("add").onclick = addScore;
			};
	
			function displayResults() {
				var average = avg();
				var highest = high();
	
				var reslut = document.getElementById("results");
				reslut.innerHTML = "<h2>Results</h2><br />" +
					"Average score is " + average.toFixed(2) + "<br />" +
					"Highest score is " + highest + "<br /><br />";
			}
	
			function avg() {
				var total = 0;
				for (var i = 0; i < scores.length; i++) {
					total += scores[i];	}

				return total / scores.length;
			}
	
			function high() {
				var highest = scores[0];
				for (var i = 1; i < scores.length; i++) {
					if (scores[i] > highest) {
							highest = scores[i];
					}
				}
				return highest;
			}
	
			function displayScores() {
				var table = $("scores_table");
				table.innerHTML = ""; 
	
				for (var i = 0; i < names.length; i++) {
					var rows = table.insertRow(i);
					var name_ = rows.insertCell(0);
					var score_ = rows.insertCell(1);
	
					name_.innerHTML = names[i];
					score_.innerHTML = scores[i];
				}
			}
	
			function addScore() {
				var n_input = $("name");
				var s_input = $("score");
	
				var name = n_input.value.trim();
				var score = parseFloat(s_input.value);
	
				if (name === "" || isNaN(score) || score < 0 || score > 100) {
					alert("You must enter a name and a valid score.");
					return;
				}
	
				names.push(name);
				scores.push(score);
	
				n_input.value = ""; 
				s_input.value = "";
				n_input.focus(); 
	
				displayScores(); 
			}
