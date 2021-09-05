var readLineSync = require("readline-sync");

var score = 0;
var username = readLineSync.question("What's your name ? ");

console.log("Hey " + username + " !! Let's start the HEIST.");
console.log("-----------------------------------");

questions = [
  {
    que: `The show is actually called La Casa de Papel, which literally translates to __________.
    a. The Paper House
    b. The Outcasts
`,
    ans: "a"
  },
  {
    que: `In which country does Raquel track the Professor after the first heist?
    a. Thailand
    b. Philippines
`,
    ans: "b"
  },
  {
    que: `What relationship did Sergio Marquina and Berlin share?
    a. Brothers
    b. Lovers
`,
    ans: "a"
  },
  {
    que: `Even the professor was bestowed with an unofficial city name. What place is he named after?
    a. Vatican City
    b. Las Vegas
`,
    ans: "a"
  },
  {
    que: `According to one fan theory, inspector Alicia and _________ are the same person.
    a. Arianda
    b. Tatiana
`,
    ans: "b"
  },
]

function play(question, answer) 
{
  var userAns = readLineSync.question(question + "Ans: ");

  if (answer.toUpperCase() === userAns.toUpperCase())
  {
    score = score + 2;
    console.log("Absolutely Right!! Your Score: " + score);
  }
  else
  {
    score = score - 1;
    console.log("Nope, you're wrong. Your Score: " + score);
  }

  console.log("-----------------------------------");
}

for ( var j = 0; j < questions.length; j++)
{
  var que = questions[j].que;
  var ans = questions[j].ans;

  play(que, ans);

}

console.log("Your final score: " + score);
console.log("Until next time BELLA CIAO !!!");

