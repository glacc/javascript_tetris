//Javascript Tetris Web Game
//Created at 2021-10-22 10:54 PM
//Glacc 2021-10-24

var Mode = 0;
var MenuSelection = 0;
var Level = 1;
var Score = 0;
var Lines = 0;
var Paused = 0;
var GameOver = 0;

var ModeOld = 0;

var Timer = 0;
var StepTime = 1000;

var HorzStartDelay = 7;
var HorzDelay = 3;
var VertDelay = 1.8;

var KeyTimerHS = 0;
var KeyTimerH = 0;
var KeyTimerV = 0;
var KeyDir = 0;

var StartPosX = 2;
var StartPosY = 1;
var PosX = StartPosX;
var PosY = StartPosY;
var PreviewX = PosX;
var PreviewY = PosY;
var CurrentColour = 0;
var CurrentPiece = 0;
var HoldCount = 0;
var HoldPiece = -1;

var KeyUp = 1;

var GameCanvas;
var Interval;

var BlockSpacing = 2;
var BlockWidth = (256 + BlockSpacing) / 10.0;
var BlockHeight = (512 + BlockSpacing) / 20.0;
var BlockWidthInternal = BlockWidth - BlockSpacing;
var BlockHeightInternal = BlockHeight - BlockSpacing;

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

var PieceDataSize = 5;

var PieceData = [
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
	], [
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
	], [
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
	], [
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
	],
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
];

var KickTestIDs = [0, 0, 0, 0, 0, 1, 2];

var KickTestVectors = [
	[
		[[ 0,  0], [ 0,  0], [ 0,  0], [ 0,  0], [ 0,  0]], 
		[[ 0,  0], [ 1,  0], [ 1, -1], [ 0,  2], [ 1,  2]], 
		[[ 0,  0], [ 0,  0], [ 0,  0], [ 0,  0], [ 0,  0]], 
		[[ 0,  0], [-1,  0], [-1, -1], [ 0,  2], [-1,  2]]
	], [
		[[ 0,  0], [-1,  0], [ 2,  0], [-1,  0], [ 2,  0]], 
		[[-1,  0], [ 0,  0], [ 0,  0], [ 0,  1], [ 0, -2]], 
		[[-1,  1], [ 1,  1], [-2,  1], [ 1,  0], [-2,  0]], 
		[[ 0,  1], [ 0,  1], [ 0,  1], [ 0, -1], [ 0,  2]]
	], [
		[[ 0,  0]], 
		[[ 0, -1]], 
		[[-1, -1]], 
		[[-1,  0]]
	], 
]

var ColorTable = ["#0000FF", "#FF9F00", "#00CF00", "#CF00CF", "#CF0000", "#009FFF", "#FFFF00"];

//Randomizer

var PieceQueueTop = 4;
var PieceQueue = [];

var CurrentPack = 0;
var CurPackCount = 0;
var RandomPacks = [[], [], []];

function NewPack(PackID)
{
	var MaxRetryCount = 10;

	var i = 0;
	while (i < 7)
	{
		var RandID = Math.floor(Math.random() * 7);

		var RetryCount = 0;
		while (RetryCount < MaxRetryCount)
		{
			var j = 0;
			while (j < i)
			{
				if (RandID == RandomPacks[PackID][j])
				{
					RandID = Math.floor(Math.random() * 7);
					break;
				}	

				j ++ ;
			}

			if (j == i)
				break;

			RetryCount ++ ;
		}
		if (RetryCount == MaxRetryCount)
		{
			RandID = 0;

			while (RandID < 6)
			{
				var j = 0;
				while (j < i)
				{
					if (RandID == RandomPacks[PackID][j])
						break;

					j ++ ;
				}
				
				if (j == i)
					break;

				RandID ++ ;
			}
		}
		
		RandomPacks[PackID][i++] = RandID;
	}
}

function RandPiece()
{
	var CurPiece = RandomPacks[CurrentPack][CurPackCount++];

	if (CurPackCount >= 7)
	{
		NewPack(CurrentPack++);
		CurPackCount = 0;

		if (CurrentPack >= 3)
			CurrentPack = 0;
	}

	return CurPiece;
}

function InitRandomizer()
{
	CurrentPack = 0;
	CurPackCount = 0;

	var i = 0;
	while (i < 3)
		NewPack(i++);

	i = 0;
	while (i < 5)
		PieceQueue[i++] = RandPiece();
}

function FetchQueue()
{
	//CurrentPiece = PieceIDs[PieceQueue[0][0]];
	CurrentPiece = PieceQueue[0] << 2;
	CurrentColour = CurrentPiece >> 2;

	var i = 0;
	while (i < PieceQueueTop)
	{
		PieceQueue[i] = PieceQueue[i + 1];
		i ++ ;
	}

	PieceQueue[PieceQueueTop] = RandPiece();
}

//Game logic

class Keys
{
	static KeyTable = [];
	static KeyPressTable = [];

	static Init()
	{
		var i = 0;
		while (i < 256)
		{
			this.KeyTable[i] = 0;
			this.KeyPressTable[i] = 0;
			
			i ++ ;
		}

		this.KeyPress = 0;
	}

	static KeyDown(KeyNum)
	{
		this.KeyTable[KeyNum] = 1;
	}

	static KeyUp(KeyNum)
	{
		
		this.KeyTable[KeyNum] = 0;
	}

	static KeyPressed(GroupNum)
	{
		this.KeyPressTable[GroupNum] = 1;
	}

	static KeyReleased(GroupNum)
	{
		this.KeyPressTable[GroupNum] = 0;
	}

	static IsPressed(GroupNum)
	{
		return this.KeyPressTable[GroupNum];
	}

	static IsDown(KeyNum)
	{
		return this.KeyTable[KeyNum];
	}
}

function ClearTable()
{
	var y = 0;
	while (y < 25)
	{
		var x = 0;
		while (x < 10)
			BlockTable[y][x++] = 0;

		y ++ ;
	}
}

function InitGame()
{
	Mode = 0;
	MenuSelection = 0;
	Level = 1;
	Score = 0;
	Lines = 0;
	Paused = 0;
	GameOver = 0;

	StepTime = 1000;

	KeyUp = 0;

	InitRandomizer();
	FetchQueue();

	ClearTable();
}

function ToggleInstructionScreen()
{
	if (Mode != 2)
	{
		ModeOld = Mode;
		Mode = 2;
	}
	else
		Mode = ModeOld;
}

function DrawScreen()
{
	var Context = GameCanvas.getContext("2d");
	Context.fillStyle = "#000000";
	Context.fillRect(0, 0, GameCanvas.width, GameCanvas.height);

	//Border
	Context.strokeStyle = "#00000000";
	Context.fillStyle = "#FFFFFF7F";
	Context.fillRect(60, 60 + 64, 263, 2);
	Context.fillStyle = "#FFFFFFFF";
	Context.fillRect(60, 60 + 64, 2, 519);
	Context.fillRect(322, 60 + 64, 2, 519);
	Context.fillRect(60, 578 + 64, 263, 2);

	//Blocks
	var y = 1;
	while (y < 25)
	{
		var x = 0;
		while (x < 10)
		{
			if (BlockTable[y][x])
			{
				Context.fillStyle = ColorTable[BlockTable[y][x] - 1];
				Context.fillRect(64 + x * BlockWidth, 128 + (y - 5) * BlockHeight, BlockWidthInternal, BlockHeightInternal);
			}

			x ++ ;
		}
		
		y ++ ;
	}

	//Current
	if (!GameOver)
	{
		y = 0;
		while (y < PieceDataSize)
		{
			var x = 0;
			while (x < PieceDataSize)
			{
				if (PieceData[CurrentPiece][y][x])
				{
					Context.fillStyle = ColorTable[CurrentColour];
					Context.fillRect(64 + (PosX + x) * BlockWidth, 128 + (PosY + y - 5) * BlockHeight, BlockWidthInternal, BlockHeightInternal);
				}

				x ++ ;
			}

			y ++ ;
		}
	}

	//Preview
	if (PosY != PreviewY)
	{
		y = 0;
		while (y < PieceDataSize)
		{
			var x = 0;
			while (x < PieceDataSize)
			{
				if (PieceData[CurrentPiece][y][x])
				{
					Context.fillStyle = ColorTable[CurrentColour] + "3F";
					Context.fillRect(64 + (PreviewX + x) * BlockWidth, 128 + (PreviewY + y - 5) * BlockHeight, BlockWidthInternal, BlockHeightInternal);
				}

				x ++ ;
			}

			y ++ ;
		}
	}

	//Hold
	if (HoldPiece >= 0)
	{
		var Hold = HoldPiece << 2;

		y = 0;
		while (y < PieceDataSize)
		{
			var x = 0;
			while (x < PieceDataSize)
			{
				if (PieceData[Hold][y][x])
				{
					Context.fillStyle = ColorTable[Hold >> 2];
					Context.fillRect(384 + (x - 2) * BlockWidth, 128 + y * BlockHeight, BlockWidthInternal, BlockHeightInternal);
				}

				x ++ ;
			}

			y ++ ;
		}
	}

	//Queue
	var i = 0;
	while (i <= PieceQueueTop)
	{
		var QueuePiece = PieceQueue[i] << 2;

		y = 0;
		while (y < PieceDataSize)
		{
			var x = 0;
			while (x < PieceDataSize)
			{
				if (PieceData[QueuePiece][y][x])
				{
					Context.fillStyle = ColorTable[QueuePiece >> 2];
					Context.fillRect(384 + (x - 2) * BlockWidth, 160 + (y + (i + 1) * 3) * BlockHeight, BlockWidthInternal, BlockHeightInternal);
				}

				x ++ ;
			}

			y ++ ;
		}

		i ++ ;
	}

	//Text
	Context.fillStyle = "#FFFFFF";
	Context.font = "16px Gadugi";
	Context.textBaseline = "top";
	Context.textAlign = "left";
	Context.fillText("HOLD:", 352, 128);
	Context.fillText("NEXT:", 352, 160 + BlockHeight * 3);

	//Paused
	if (Paused)
	{
		Context.fillStyle = "#000000";
		Context.fillRect(128, 273, 256, 96);
		Context.fillStyle = "#FFFFFF";
		Context.fillRect(128, 273, 256, 2);
		Context.fillRect(128, 273, 2, 96);
		Context.fillRect(382, 273, 2, 96);
		Context.fillRect(128, 367, 256, 2);
		
		Context.textBaseline = "middle";
		Context.textAlign = "center";
		Context.fillText("PAUSED", 256, 320);
	}

	//Level selection
	if (Mode == 0)
	{
		Context.fillStyle = "#000000";
		Context.fillRect(128, 257, 256, 128);
		Context.fillStyle = "#FFFFFF";
		Context.fillRect(128, 257, 256, 2);
		Context.fillRect(128, 257, 2, 128);
		Context.fillRect(382, 257, 2, 128);
		Context.fillRect(128, 383, 256, 2);

		Context.font = "24px Gadugi";
		Context.textBaseline = "middle";
		Context.textAlign = "center";
		Context.fillText("Level: " + Level, 256, 296);

		Context.font = "16px Gadugi";
		Context.fillText("Press ← → to select level.", 256, 328);
		Context.fillText("Press spacebar to start.", 256, 352);
	}

	//Instructions
	if (Mode == 2)
	{
		Context.fillStyle = "#000000";
		Context.fillRect(128, 192, 256, 256);
		Context.fillStyle = "#FFFFFF";
		Context.fillRect(128, 192, 256, 2);
		Context.fillRect(128, 192, 2, 256);
		Context.fillRect(382, 192, 2, 256);
		Context.fillRect(128, 448, 256, 2);

		Context.font = "16px Gadugi";
		Context.textBaseline = "middle";
		Context.textAlign = "center";
		Context.fillText("- Instructions -", 256, 216);
		Context.fillText("← → - Move", 256, 248);
		Context.fillText("↓ - Accelerate", 256, 280);
		Context.fillText("Spacebar - Drop", 256, 296);
		Context.fillText("Z X - Rotate CCW / CW", 256, 328);
		Context.fillText("C - Hold", 256, 344);
		Context.fillText("P - Pause", 256, 376);
		Context.font = "10px Gadugi";
		Context.fillText("Press H to close.", 256, 408);
	}

	//Game over
	if (GameOver)
	{
		Context.fillStyle = "#000000";
		Context.fillRect(128, 273, 256, 96);
		Context.fillStyle = "#FFFFFF";
		Context.fillRect(128, 273, 256, 2);
		Context.fillRect(128, 273, 2, 96);
		Context.fillRect(382, 273, 2, 96);
		Context.fillRect(128, 367, 256, 2);

		Context.font = "32px Gadugi";
		Context.textBaseline = "middle";
		Context.textAlign = "center";
		Context.fillText("GAME OVER", 256, 320);
	}

	Context.font = "16px Gadugi";
	Context.textBaseline = "middle";
	Context.textAlign = "center";
	Context.fillText("H - Instructions", 256, 672);
}

function RemoveLine(Line)
{
	while (Line)
	{
		BlockTable[Line] = BlockTable[Line - 1];
		Line -- ;
	}

	BlockTable[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function LineDetect()
{
	var y = 24;
	while (y >= 0)
	{
		var x = 0;
		while (x < 10)
		{
			if (!BlockTable[y][x])
				break;

			x ++ ;
		}
		
		if (x == 10)
		{
			Lines ++ ;
			RemoveLine(y);
		}
		else
			y -- ;
	}
}

function CollisionDetect(pX, pY, PieceID)
{
	var y = 0;
	while (y < PieceDataSize)
	{
		var x = 0;
		while (x < PieceDataSize)
		{
			if (PieceData[PieceID][y][x])
			{
				if ((pX + x < 0) || (pX + x >= 10) || (pY + y >= 25))
					return 1;

				if (pY + y >= 0) 
					if (BlockTable[pY + y][pX + x])
						return 1;
			}
				
			x ++ ;
		}

		y ++ ;
	}

	return 0;
}

function ResetPiece()
{
	PosX = StartPosX;
	PosY = StartPosY;
	CurrentColour = CurrentPiece >> 2;
	UpdatePreview();
}

function PutPiece(pX, pY, PieceID)
{
	var y = 0;
	while (y < PieceDataSize)
	{
		var x = 0;
		while (x < PieceDataSize)
		{
			if (PieceData[PieceID][y][x])
				BlockTable[pY + y][pX + x] = CurrentColour + 1;

			x ++ ;
		}

		y ++ ;
	}

	HoldCount = 0;

	LineDetect();
	FetchQueue();
	ResetPiece();

	if (CollisionDetect(PosX, PosY, CurrentPiece))
		GameOver = 1;
}

function RotatePiece(Dir)
{
	var NewPiece = CurrentPiece;

	/*
	if (Dir)
	{
		NewPiece ++ ;
		if (NewPiece == 2 || NewPiece == 4)
			NewPiece -= 2;
		else if (NewPiece == 8 || NewPiece == 12 || NewPiece == 16 || NewPiece == 21)
			NewPiece -= 4;
	}
	else
	{
		NewPiece -- ;
		if (NewPiece == -1 || NewPiece == 1)
			NewPiece += 2;
		else if (NewPiece == 3 || NewPiece == 7 || NewPiece == 11 || NewPiece == 16)
			NewPiece += 4;
	}
	*/
	if (Dir)
	{
		NewPiece ++ ;
		if (!(NewPiece % 4))
			NewPiece -= 4;
	}
	else
	{
		NewPiece -- ;
		if (!((NewPiece + 1) % 4))
			NewPiece += 4;
	}

	/*
	if (!CollisionDetect(PosX, PosY, NewPiece))
		CurrentPiece = NewPiece;
	*/

	if (CollisionDetect(PosX, PosY, NewPiece))
	{
		var TestID = KickTestIDs[NewPiece >> 2];
		var TestDirOld = CurrentPiece % 4;
		var TestDirNew = NewPiece % 4;
		var TestLen = KickTestVectors[TestID][TestDirNew].length;

		var OffsetX = 0;
		var OffsetY = 0;

		var i = 0;
		while (i < TestLen)
		{
			OffsetX = KickTestVectors[TestID][TestDirOld][i][0] - KickTestVectors[TestID][TestDirNew][i][0];
			OffsetY = KickTestVectors[TestID][TestDirNew][i][1] - KickTestVectors[TestID][TestDirOld][i][1];

			if (!CollisionDetect(PosX + OffsetX, PosY + OffsetY, NewPiece))
			{
				PosX += OffsetX;
				PosY += OffsetY;
				CurrentPiece = NewPiece;

				break;
			}

			i ++ ;
		}
	}
	else
		CurrentPiece = NewPiece;
}

function UpdatePreview()
{
	PreviewX = PosX;
	PreviewY = PosY;
	while (!CollisionDetect(PreviewX, PreviewY + 1, CurrentPiece))
		PreviewY ++ ;
}

function GameUpdate()
{
	if (Keys.IsDown(80))
	{
		if (!Keys.IsPressed(2))
			Paused = !Paused;

		Keys.KeyPressed(2);
	}
	else
		Keys.KeyReleased(2);

	if (!(Paused || GameOver))
	{
		var Lvl = Lines / 10 + 1;
		Level = Lvl > Level ? Lvl : Level;
		StepTime = 1000.0 / Level;

		Timer += 1000.0 / 60.0;

		if (KeyUp)
		{
			//Horizonal
			KeyTimerH ++ ;
			if (Keys.IsDown(37))
			{
				if (KeyDir != -1)
				{
					KeyDir = -1;
					KeyTimerHS = 0;
					KeyTimer = 10;
				}

				if (KeyTimerHS < HorzStartDelay)
				{
					if (KeyTimerHS == 0 && !CollisionDetect(PosX - 1, PosY, CurrentPiece))
						PosX -- ;
					
					KeyTimerHS ++ ;
				}
				else if (KeyTimerH >= HorzDelay)
				{
					KeyTimerH %= HorzDelay;
					if (!CollisionDetect(PosX - 1, PosY, CurrentPiece))
						PosX -- ;
				}
			}
			else if (Keys.IsDown(39))
			{
				if (KeyDir != 1)
				{
					KeyDir = 1;
					KeyTimer = 10;
				}

				if (KeyTimerHS < HorzStartDelay)
				{
					if (KeyTimerHS == 0 && !CollisionDetect(PosX + 1, PosY, CurrentPiece))
						PosX ++ ;
					
					KeyTimerHS ++ ;
				}
				else if (KeyTimerH >= HorzDelay)
				{
					KeyTimerH %= HorzDelay;

					if (!CollisionDetect(PosX + 1, PosY, CurrentPiece))
						PosX ++ ;
				}
			}
			else
			{
				KeyTimerHS = 0;
				KeyTimerH = HorzDelay;
				KeyDir = 0;
			}

			//Rotation
			if (Keys.IsDown(90))
			{
				if (!Keys.IsPressed(3))
					RotatePiece(0);

				Keys.KeyPressed(3);
			}
			else if (Keys.IsDown(88))
			{
				if (!Keys.IsPressed(3))
					RotatePiece(1);

				Keys.KeyPressed(3);
			}
			else
				Keys.KeyReleased(3);

			//Drop & Hold
			UpdatePreview();
			if (Keys.IsDown(67))
			{
				if (!Keys.IsPressed(1))
				{
					if (!HoldCount)
					{
						HoldCount ++ ;
						if (HoldPiece == -1)
						{
							HoldPiece = CurrentPiece >> 2;
							FetchQueue();
						}
						else
						{
							var t = HoldPiece;
							HoldPiece = CurrentPiece >> 2;
							CurrentPiece = t << 2;
						}

						ResetPiece();
					}
				}

				Keys.KeyPressed(1);
			}
			else if (Keys.IsDown(32))
			{
				if (!Keys.IsPressed(1))
					PutPiece(PreviewX, PreviewY, CurrentPiece);

				Keys.KeyPressed(1);
			}
			else
				Keys.KeyReleased(1);

			//Vertical
			KeyTimerV ++ ;
			if (Keys.IsDown(40))
			{
				if (KeyTimerV >= VertDelay)
				{
					KeyTimerV %= VertDelay;

					if (!CollisionDetect(PosX, PosY + 1, CurrentPiece))
						PosY ++ ;
					else
					{
						//PutPiece(PosX, PosY, CurrentPiece);
						Timer = 0;
					}
				}
			}
			else
				KeyTimerV = VertDelay;
		}

		if (Timer >= StepTime)
		{
			Timer %= StepTime;
			if (!CollisionDetect(PosX, PosY + 1, CurrentPiece))
				PosY ++ ;
			else
			{
				//PutPiece(PosX, PosY, CurrentPiece);
				Timer = 0;
			}
		}
	}

	if (GameOver)
	{
		if (Keys.IsDown(32))
		{
			if (!Keys.IsPressed(1))
				InitGame();

			Keys.KeyPressed(1);
		}
		else
			Keys.KeyReleased(1);
	}
}

function GameMain()
{
	if (Keys.IsDown(72))
	{
		if (!Keys.IsPressed(4))
			ToggleInstructionScreen();

		Keys.KeyPressed(4);
	}
	else
		Keys.KeyReleased(4);

	switch(Mode)
	{
		case 0:
			if (Keys.IsDown(37))
			{
				if (Level > 1 && !Keys.IsPressed(0))
					Level -- ;

				Keys.KeyPressed(0);
			}
			else if (Keys.IsDown(39))
			{
				if (Level < 9 && !Keys.IsPressed(0))
					Level ++ ;

				Keys.KeyPressed(0);
			}
			else if (Keys.IsDown(32))
			{
				if (!Keys.IsPressed(0) && KeyUp)
				{
					KeyUp = 0;
					Mode = 1;
				}

			}
			else
			{
				KeyUp = 1;
				Keys.KeyReleased(0);
			}
				
			break;
		case 1:
			GameUpdate();
			break;
	}

	DrawScreen();
}

window.onload = function ()
{
	InitGame();

	GameCanvas = document.getElementById("GameCanvas");
	Interval = self.setInterval("GameMain()", 1000.0/60.0);

	window.addEventListener("keydown", function (Event)
	{
		Keys.KeyDown(Event.keyCode);
		//console.log(Event.keyCode);
	});
	window.addEventListener("keyup", function (Event)
	{
		Keys.KeyUp(Event.keyCode);
		KeyUp = 1;
	});
}
