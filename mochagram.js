var solution = [
    [1,0,0],
	[0,1,0],
	[0,0,1]
];

var state = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

$("th").on("click", function(){
	//make the square black or white
	$(this).toggleClass("filled");

	//get the id of the square
	//and pass it to makeStateChange()
	makeStateChange($(this).attr('id'));
});

function makeStateChange(squareId) {
	var rowId;
	var colId;
	//make sure you're getting the right value
	if(squareId.length === 2){
		//get the int value of row of the square
		rowId = parseInt(squareId.charAt(0), 10);
		//get the int value of column of the square
		colId = parseInt(squareId.charAt(1), 10);
		console.log(colId); 
	};
	var currentState = state[rowId][colId];
	state[rowId][colId] = (currentState + 1) % 2;
	compareSolState();
};

function compareSolState() {
	if(JSON.stringify(state) === JSON.stringify(solution)){
		printWin();
	};
};

function printWin() {
	$("#youWin").text("You Win!");
};

function reset() {};

//if(person.commentsRead === true) {
// person = good;
//};