const name = "kunal";
const l = 50;
//console.log(name + l + " value");
console.log(`hello my name is ${name}, and my age is ${l}`); // modern way

// one more way to declare string
const gameName = new String(`Kunal Thakur`)
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
console.log(gameName.indexOf('K'));

const naya = gameName.substring(1, 6);
console.log(naya);
const newstring = "   kunal Thakur  ";
console.log(newstring);
console.log(newstring.trim());

const url = "https://kunal.com/kunal%20Thakur"
console.log(url.replace('%20', '_'));
console.log(url.includes('kunal'));