// reverse title calculation

var reversedTitle = 'rotaluclaC thgieW ortsA';

// Javascript using reserve String to show Title
document.getElementById('displayTitle').innerHTML = reverseString(reversedTitle);

// Values given to planets so that gravity and planets can calculate

var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];


var selectPlanet = document.getElementById("selectAPlanet");
// innerHTML.planets[i].planets
// value.planets[i].gravity
// dynamically populating elements in JavaScript using array loop
var sel = document.getElementById("selectAPlanet");
for(var i = 0; i < planets.length; i++) {
	var opt = document.createElement('option');
	opt.innerHTML = planets[i].planet;
	opt.value = planets[i].gravity;
	sel.appendChild(opt);

}
// Using function to use variables to get results from each Planet:Gravity weight.
function typeInYourNewAnswer() {

var yourWeight = document.getElementById("yourWeight").value;
var selectaPlanet = document.getElementById("selectAPlanet").value;
var answer = yourWeight * selectaPlanet;
var selplanet = document.getElementById("selectAPlanet")[document.getElementById("selectAPlanet").selectedIndex].text;

// Using JavaSript to grab info from HTML within html tags using as string. 
document.getElementById("futureoutput").innerHTML = "If your were on " + selplanet + " you would weigh " + answer + "lbs!";

}

//  Single for-loop declaration with concatenation,
//  Used to decrement through parsed in string and concatenate each character to new string to return.
function reverseString(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}


