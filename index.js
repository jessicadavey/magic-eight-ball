let answers = [ "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answerQuestion(){
    let i = Math.floor(Math.random() * 20);
    document.getElementById("answer").innerHTML = answers[i];
}

function askQuestion() {
let question = prompt("What is your question, seeker?", "Enter your question");

if (question != null) {
    document.getElementById("asked").style.display = 'block';
    document.getElementById("asked").innerHTML = question;
   answerQuestion();
   document.getElementById("triangle").style.display = 'block';
   document.getElementById("ball-inner2").style.display = 'block';
   document.getElementById("response").style.display = 'block';
   document.getElementById("ball-inner").style.display = 'none';
   document.getElementById("button").innerHTML = "Ask again";

}

}



