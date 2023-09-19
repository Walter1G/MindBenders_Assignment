// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.  Round 2: [m, s] Use his middle snail against Steve's slowest.Round 3: [f, m] Use his fastest snail against Steve's middle.  // Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.


  function mauriceWins(mrSnails, stSnails) {
	let win = 0;
	mrSnails.sort((a,b)=> a-b);
	stSnails.sort((a,b)=>a-b);
	
	if(mrSnails[0]> stSnails[2]){
		win+=1;
	}
	if(mrSnails[1]> stSnails[0]){
		win+=1;
	}
	if(mrSnails[2]> stSnails[1]){
		win+=1;
	}
	console.log(win);
	return win>1;
	
}

console.log(mauriceWins([3, 5, 10], [4, 7, 11]));


console.log(mauriceWins([6, 8, 9], [7, 12, 14]));


console.log(mauriceWins([1, 8, 20], [2, 9, 100]));


  