var PieceIDs = [0, 2, 4, 8, 12, 16, 17];

var ColorTable = ["#CF0000", "#00CF00", "#0000CF", "#FFCF00", "#007FFF", "#CF00CF", "#EFEFEF"];

var PieceData = [
	//Z1 0
	[
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 1, 1, 0]
	],
	//Z2 2
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 0, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 1]
	], 
	//J 4
	[
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 1]
	],
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	//L 8
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 1, 0, 0]
	],
	//T 12
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0]
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0]
	],
	//O 16
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	], 
	//I 17
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	], 
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0]
	], 
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	]
];

var PieceData = [
	//I
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],
	//J
	[
		[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0]
	], 
	//L
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0]
	],[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],
	//O
	[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	//S
	[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0]
	],[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],
	//T
	[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],
	//Z
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
	],[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0]
	], [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0]
	]
];

var PieceData = [
	//S
	[
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 1]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 1, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0]
	],
	//Z
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 0, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 1]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 0, 0]
	],
    //J
	[
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 1]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0]
	],
    //L
	[
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 1, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	],
    //T
	[
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0]
	],
    //O
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	], [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
    //I
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	], [
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0]
	], [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	], [
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0]
	],
];

//Empty
var BlockTable = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

//Spin test
var BlockTable = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
];