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
		//create();
    });

	//alert(window.innerHeight + ': ' + window.innerWidth);
	
	$('.continue-btn').on('click',function(e){
		$('.on-landing').hide();
		$('.middle').show();
		create();
	});
	
	
	$('.optionToChoose').on('mouseover',function(e){
		var mouseOverSound = new Audio(mouseOverFile);
		//mouseOverSound.play();
		e.stopPropagation();
	});
	
	$('.optionToChoose').on('click',function(){
			var value = $(this).attr('data-imgs');
		
		if(getValue() == value){
			var clickSound = new Audio(clickRight);
			//clickSound.play();
			addScore();
			create();
		} else{
			var clickSound = new Audio(clickWrong);
			//clickSound.play();
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
	
	var opt = 0, val = 1,
			allNumbers = getRandomArbitrary(1,10);
			
	while(opt < totalOptions){
		var option = $('#option'+val),
			firstBox = allNumbers[opt],
			i = 1;
		if(opt == numberToChoose){
			setValue(firstBox);
			$('#toSelect')[0].innerText= firstBox;
		}
			option.fadeOut();
		option.attr('data-imgs',firstBox);
		var totalWidth = option.width(),
			totalHeight = option.height();
		var imageWidth = 250,
			imageHeight = 250;
		var cls = 'class="display-img"';
		$('.optionToChoose').each(function(index, item){
			var ch = $(item).children().length;
				if(ch === firstBox){
					console.log('Changing the valuea');
				}
		});
		while(i <= firstBox){
			img = '<img src="'+displayItem+'" alt="Apple" '+cls+'/>';
			option.append(img);
			i++;
		}
		option.fadeIn(),
		opt++;
		val++;
	}
	
	
	
	// Generate funciton for explode
	
	
	
	

}

function playmusic(){
	// play music 
	var backgroundMusic = new Audio(bgSoundFile);
	//backgroundMusic.loop = true;
	//backgroundMusic.play();
	
}

function getRandomArbitrary(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
	 var arr = [1,2,3,4,5,6,7,8,9,10];
		arr = shuffle(arr);
	return arr.slice(0,3);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function setValue(val){
	window.theValue = val;
}

function getValue(){
	return window.theValue;
}
