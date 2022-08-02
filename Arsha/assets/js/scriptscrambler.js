var text = "Working across design, development and interactive media, I build interfaces, websites, applications and open source experiments using web technologies.";

var div = document.querySelector("div");
var proxy = document.createElement("div");

proxy.textContent = text;

var spaces = [];

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === " ") spaces.push(i);
}

var total = spaces.length;

TweenMax.to(proxy, 6, {
  scrambleText: { text: text, speed: 0.2, revealDelay: 1, chars: "0123456789" },
  onUpdate: update,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true,
  ease: Linear.easeNone
});

function update() {
  
  var letters = proxy.textContent.split("");
  
  for (var i = 0; i < total; i++) {    
    letters[spaces[i]] = " ";
  }
  
  div.textContent = letters.join("");
}