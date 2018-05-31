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
	
	
	$('.optionToChoose').on('mouseover',function(e){
		var mouseOverSound = new Audio(mouseOverFile);
		mouseOverSound.play();
		e.stopPropagation();
	});
	
	$('.optionToChoose').on('click',function(){
			var value = $(this).attr('data-imgs');
		
		if(getValue() == value){
			var clickSound = new Audio(clickRight);
			clickSound.play();
			addScore();
			create();
		} else{
			var clickSound = new Audio(clickWrong);
			clickSound.play();
			subScore();
			//create();
		}
		
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
	
	var numberToChoose = Math.floor((Math.random() * totalOptions));
	
	$('.optionToChoose').children().remove();
	
	var opt = 0, val = 1;
	while(opt < totalOptions){
		var option = $('#option'+val),
			firstBox = Math.floor((Math.random() * level)),
			i = 1;
		if(opt == numberToChoose){
			setValue(firstBox);
			$('#toSelect')[0].innerText= firstBox;
		}
		option.attr('data-imgs',firstBox);
		var totalWidth = option.width(),
			totalHeight = option.height();
		var imageWidth = 1;
		if(firstBox > 0){
			imageWidth = totalWidth / firstBox;
			//imageHeight = totalHeight / firstBox;
		}
		while(i <= firstBox){
			img = '<img src="'+displayItem+'" alt="Apple" class="display-img"/>'
			option.append(img);
			i++;
		}
		opt++;
		val++;
	}
	
	
	
	// Generate funciton for explode
	
	
	
	

}

function playmusic(){
	// play music 
	var backgroundMusic = new Audio(bgSoundFile);
	backgroundMusic.loop = true;
	backgroundMusic.play();
	
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
