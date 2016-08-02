function findWinner(parenArray) {
	var stack=[];
	var prevParen="";
	var currWinner="";
	parenArray.forEach(function(currParen,index) {
		if(index===0){
			stack.push(currParen);
			prevParen = currParen;
			currWinner=currParen;
		} else if (prevParen==="(" && currParen === ")"){
			stack.pop();
			prevParen = stack[stack.length-1];
			if(stack.length===0) {
				currWinner="";
			}
		} else {
			stack.push(currParen);
			prevParen = currParen;
			if(stack.length===1){
				currWinner=currParen;
			}
		}
	console.log("index: "+index+" stack is "+stack+" prevParen is "+prevParen+" currWinner is "+currWinner);
	});
	if(currWinner==="(") {
		return "left wins";
	} else if (currWinner===")") {
		return "right wins";
	} else {
		return "tie";
	}
}


findWinner(['(','(',')','(',')','(','(']); //left wins
findWinner(['(',')',')','(']); //right wins
findWinner(['(',')','(',')','(','(',')',')']);  //tie