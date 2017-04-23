var blacklist = ['', 'masthead-search-term', 'movie_player'];

window.onkeydown = function (e) {
  var active = document.activeElement.id;
  if (e.keyCode === 68 && blacklist.indexOf(active) < 0) {
    var video = document.getElementsByTagName("video")[0];
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();
    }

    return false;
  }else if(e.keyCode === 66 )
  {
	  var op = document.getElementById("body").style.opacity;
	  if(op === "0")
	  {
		 //document.body.style.backgroundColor = "black";
	  document.getElementById("body").style.opacity = "100"; 
	  }else{
		document.getElementById("body").style.opacity = "0";   
	  }
	  
  }
};