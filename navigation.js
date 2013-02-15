/*chrome.browserAction.onClicked.addListener(function(tab) { 
    alert('Upvoting!');
    $(".arrow.up").click();
});*/
fwd_button = {};
bck_button = {};
comic = {};
load = function(){
	console.log(window.location.hostname);
	if(window.location.hostname=='www.egscomics.com'){
		fwd_button = $('navimg7').parentElement;
		bck_button = $('navimg6').parentElement;
		comic = $$('.comic2')[0];
	}
	else if(window.location.hostname=='www.thewotch.com'){
		bck_button = $('navimg3').parentElement;
		fwd_button = $('navimg5').parentElement;
		comic = $$('.comic2')[0];
	}
	else if(window.location.hostname=="www.gpf-comics.com"){
		fwd_button = $$(".nav_link_forward")[0].children[0];
		bck_button = $$(".nav_link_back")[0].children[1];
		var imgs = $$("img");
		for(var i=0;i<imgs.length;i++){
			if(imgs[i].src.match('/comics/')){
				comic = imgs[i];
				i=1000000;
			}
		}
	}
	else if(window.location.hostname=="www.wncomic.com"){
		fwd_button = $$("a img[src='images/next.jpg']")[0].parentElement
		bck_button = $$("a img[src='images/top_back.jpg']")[0].parentElement
		comic = $$("td div img[alt]")[0]
	}
	else if(window.location.hostname=="www.cad-comic.com"){
		fwd_button = $$(".nav-next")[0]
		bck_button = $$(".nav-back")[0]
		comic = $$("img[alt][title]")[0]

	}
	else if(window.location.hostname=="www.ma3comic.com"){
		fwd_button = $$("a#cndnext")[0]
		bck_button = $$("a#cndprev")[0]
		comic = $$("#cc a img[alt]")[0]
	}
	else if(window.location.hostname=="www.vampirecheerleaders.net"){
		fwd_button = $$("a#cndnext")[0]
		bck_button = $$("a#cndprev")[0]
		comic = $$("#comic")[0]
	}
	else if(window.location.hostname=="twentyfirstcenturycoeds.comicgenesis.com") {
		comic = $$("img[alt=Comic]")[0]
		fwd_button = $$("img[alt='Next comic']")[0].parentElement
		bck_button = $$("img[alt='Previous comic']")[0].parentElement
	}
	else if(window.location.hostname=="www.dominic-deegan.com"){
		comic = $$(".comic img")[0]
		fwd_button = $$("img[alt=Next]")[0].parentElement
		bck_button = $$("img[alt=Previous]")[0].parentElement
	}
	else if(window.location.hostname=="questionablecontent.net"){
		comic = $$("#strip")[0]
		fwd_button = $$("#comicnav li a").filter(function(elem){ return $(elem).innerText == "Next"; })[0]
		bck_button = $$("#comicnav li a").filter(function(elem){ return $(elem).innerText == "Previous"; })[0]
	}
	scroll_comic();
}

window.onkeydown = function(e){
	if(e.keyCode==39){
		fwd_button.click();
	}
	else if(e.keyCode==37){
		bck_button.click();
	}
}

function scroll_comic(){
	if(window.scrollY==0){
		comic.scrollIntoView();
		setTimeout(scroll_comic,200);
	}
}

load();
