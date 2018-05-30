var totalOptions = 3,
		level = 20,
		url = 'images/apple.png',
		img = '<img src="'+url+'" alt="Apple" width="50px" height="50px"/>';

$(document).ready(function(){
	// play music 
	$("#backgroundSound")[0].play();
	$("#backgroundSound")[0].loop = true;
	
	$('.optionToChoose').on('mouseover',function(e){
		$('#hoverSound')[0].play();
		e.stopPropagation();
	});
	
	create();
	
	$('.optionToChoose').on('click',function(){
		var value = $(this).attr('data-imgs');
		$('#clickSound')[0].play();
		if(getValue() == value){
			addScore();
			create();
		} else{
			subScore();
			create();
		}
		
	});
	
});

function addScore(){
	var score = $('#toScore').text();
		score = parseInt(score) + level;
		$('#toScore').text(score);
}
 function subScore(){
 var score = $('#toScore').text();
		score = parseInt(score) - level;
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
			console.log(firstBox);
		if(opt == numberToChoose){
			setValue(firstBox);
			$('#toSelect')[0].innerText= firstBox;
		}
		option.attr('data-imgs',firstBox);
		while(i <= firstBox){
			option.append(img);
			i++;
		}
		opt++;
		val++;
	}
	
	
	
	// Generate funciton for explode
	
	
	
	

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
