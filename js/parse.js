// parse JSON from file
//
// var lists;
var request = new XMLHttpRequest();
request.open("GET", local+"data/lists.json", false);
request.send(null);
var lists = JSON.parse(request.responseText);

// var data = {
//     character: {},
//     classs: {},
//     skill: {},
//     talent: {}
// };
var data = {};

var request = new XMLHttpRequest();
request.open("GET", local+"data/character.json", false);
request.send(null);
var character = JSON.parse(request.responseText);
data = {...data, ...character};

var request = new XMLHttpRequest();
request.open("GET", local+"data/classs.json", false);
request.send(null);
var classs = JSON.parse(request.responseText);
data = {...data, ...classs};

var request = new XMLHttpRequest();
request.open("GET", local+"data/skill.json", false);
request.send(null);
var skill = JSON.parse(request.responseText);
data = {...data, ...skill};

var request = new XMLHttpRequest();
request.open("GET", local+"data/talent.json", false);
request.send(null);
var talent = JSON.parse(request.responseText);
data = {...data, ...talent};

console.log(data);