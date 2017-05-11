/* Lewis Lomugdang */
var cartoon = [
  { description: "Do or do not, there is no try-Yoda",
    picture: "https://image.desiringgod.org/be-a-yoda-not-a-grinch-en/legacy_landscape/large_be-a-yoda-not-a-grinch.jpg?0",
    from: "desiringgod.org"
  },
  { description: "What's up Doc?-Bugs Bunny",
    picture: "https://vignette4.wikia.nocookie.net/looneytunes/images/2/26/Classic_bugsbunny.png/revision/latest?cb=20160417193815",
    from: "looneytunes.wikia.com"
  },
  { description: "Pika Pika-Pikachu",
    picture: "https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035",
    from: "http://pokemon.wikia.com/wiki/Pikachu"
  },
  { description: "Everyone...STOP! *to teammates* -Starfire",
    picture: "http://vignette2.wikia.nocookie.net/teentitans/images/3/3b/Thumb-starfire2.jpg/revision/latest?cb=20131019013024",
    from: "http://teentitans.wikia.com/wiki/Starfire"
  },
  { description: "Ohana means family-Stitch",
    picture: "http://vignette1.wikia.nocookie.net/one-minute-meelee-fanon/images/7/7e/Stitch_626.png/revision/latest?cb=20160118210924",
    from: "http://one-minute-meelee-fanon.wikia.com/wiki/Stitch"
  }
];

var yoda = "Yoda";
var bugs_bunny = "Bugs Bunny";
var pikachu = "Pikachu";
var starfire = "Starfire";
var stitch = "Stitch";

var current;
function cartoonPic()
{
  var element;
  do
  {
    element = cartoon[Math.floor(Math.random() *cartoon.length)];
    document.getElementById("picture").src = element.picture;
    document.getElementById("caption").innerHTML = element.description;
    document.getElementById("source").innerHTML = "Image courtesy of: " + element.from;
  }
  while (element == current);
  current = element;
}

function picGuess1()
{
  var toon = document.getElementById("guessOne").value;
  if(toon == yoda){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Wrong Guess";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
  }
  setCookie("Cartoon1", 10);
}

function picGuess2()
{
  var toon2 = document.getElementById("guessTwo").value;
  if(toon2 == bugs_bunny){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Wrong Guess";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
  }
  setCookie("Cartoon2", 10);
}

function picGuess3()
{
  var toon3 = document.getElementById("guessThree").value;
  if(toon3 == pikachu){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Wrong Guess";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
  }
  setCookie("Cartoon3", 10);
}

function picGuess4()
{
  var toon4 = document.getElementById("guessFour").value;
  if(toon4 == starfire){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Wrong Guess";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
  }
  setCookie("Cartoon4", 10);
}

function picGuess5()
{
  var toon5 = document.getElementById("guessFive").value;
  if(toon5 == stitch){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Wrong Guess";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
  }
  setCookie("Cartoon5", 10);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
