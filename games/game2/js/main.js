var totalOptions,
		level,
		url,
		bgSoundFile,
		mouseOverFile,
		clickRight,
		clickWrong;

$(document).ready(function(){
	
	$.getJSON( "config.json", function( data ) {
		
		// Set All the configs
		totalOptions = data.totalOptions;
		level = data.level;
		displayItem = data.displayItem;
		bgSoundFile = data.bgSoundFile;
		mouseOverFile = data.mouseOverFile;
		clickRight = data.clickRightFile;
		clickWrong = data.clickWrong;
		
		
		playmusic();
		// Now create the game
		create();
    });
	
	
	
	
	
	
	$('.continue-btn').on('click',function(e){
		$('.on-landing').hide();
		$('.middle').show();
		create();
	});
	
	
});

function addScore(){
	var score = $('#toScore').text();
		score = parseInt(score) + parseInt(level);
		$('#toScore').text(score);
}
 function subScore(){
 var score = $('#toScore').text();
		score = parseInt(score) - parseInt(level);
		$('#toScore').text(score);
 
 }
function create(){
	
}

function playmusic(){
	// play music 
	var backgroundMusic = new Audio(bgSoundFile);
	//backgroundMusic.loop = true;
	//backgroundMusic.play();
	
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function setValue(val){
	window.theValue = val;
}

function getValue(){
	return window.theValue;
}
