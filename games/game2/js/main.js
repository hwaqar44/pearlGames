var totalOptions,
		level,
		url,
		bgSoundFile,
		mouseOverFile,
		clickRight,
		alphabetData,
		alphaArray = getAlphabets(),
		startFrom = 0,
		requiredWord = '',
		createdWord = Array(),
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
		alphabetData = data.alphabetData;
		
		
		playmusic();
		// Now create the game
		//create();
    });
	
	
	
	
	
	
	$('.continue-btn').on('click',function(e){
		$('.on-landing').hide();
		$('.middle').show();
		create();
	});
	
	
});

function drop(a, ev){
	var item = ev.dataTransfer.getData("item");
	var value = $(a).attr('data-id');
	if(item == value){
		addScore();
		$(a).text(item);
		$(a)[0].style.background = '#7a68b3';
		this.addCreatedWord(item);
		
	}else{
		$(a)[0].style.background = 'red';
		subScore();
	}
	checkWord();
}

function checkWord(){
	var cr = this.getCreatedWord(),
		req = requiredWord;
		console.log(cr,req);
	if(cr == req){
		this.removeCreatedWord();
		this.setStartFrom(this.getStartFrom() + 1);
		create();
		console.log('You have done it');
	}
	
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("item", $(ev.target).text());
}

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
	var alphabet = alphaArray[this.getStartFrom()],
		word = alphabetData[alphabet],
		splitWord = word.split(''),
		shuffleWord = word.shuffle(),
		splitShuffle = shuffleWord.split('');
		this.setRequiredWord(word);
		console.log(this.getRequiredWord());
		$('#drop-inner').children().remove();
		$('#drag-inner').children().remove();
		$('#imageOff').children().remove();
		var url = 'images/'+word+'.png';
	$('#imageOff').append(
		'<img src="'+url+'" alt="?" class="brightness" width="250"/>'
	);
	splitWord.forEach(function(item){
		$('#drop-inner').append(
			'<div class="inner-col ltr'+item+'" data-id="'+item+'" ondrop="drop(this,event);" ondragover="allowDrop(event)">&nbsp;</div>'
		);
	});
	
	
	splitShuffle.forEach(function(item){	
		$('#drag-inner').append(
			'<div class="inner-col ltr'+item+'" draggable="true" ondragstart="drag(event)">'+item+'</div>'
		);
	});	
		
}

function playmusic(){
	// play music 
	var backgroundMusic = new Audio(bgSoundFile);
	//backgroundMusic.loop = true;
	//backgroundMusic.play();
	
}


function setValue(val){
	this.theValue = val;
}

function getValue(){
	return this.theValue;
}

function getAlphabets(){	
	return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
}


String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function getStartFrom(){
	return this.startFrom;
}

function setStartFrom(val){
	this.startFrom = val;
}

function getRequiredWord(){
	return this.requiredWord;
}

function setRequiredWord(val){
	this.requiredWord = val;
}

function addCreatedWord(val){
	this.createdWord.push(val);
}

function getCreatedWord(){
	return this.createdWord.join('');
}

function removeCreatedWord(){
	this.createdWord = new Array();
}
