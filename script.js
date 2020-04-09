//halfbutton
var halfbutton = document.getElementById("half-button");
halfbutton.addEventListener("click", halfNum);

function halfNum(){
  var inputNum = document.getElementById("half-input").value;
  var inputNumhalf = inputNum / 2;

  if(inputNum){
    alert("Half of " + inputNum + " is " + inputNumhalf);
  }
  else{
    alert("Enter a number!")
  }
};

//fortune
var fortunebutton = document.getElementById("fortune-button");
fortunebutton.addEventListener("click", getFortune);

function getFortune(){
  var fortunes = ["You will catch the Chinese Virus.", "You are going to be cheated on.", "You will be robbed for your socks.",
                  "You will be put in a cell with Harvey Weinstein.", "You will find a dollar on the floor."];
  var reading = fortunes[Math.floor(Math.random() * fortunes.length)]; // gets random fortune

  var name = document.getElementById("fortune-input").value;
  var output = document.getElementById("fortune-output");
  if(name != ""){
  output.innerHTML = reading;
  console.log(reading);
  }
  else{
    alert("Enter a name!");
  }
}

//changefortunestyle
var stylebutton = document.getElementById("fortunestylebutton");
stylebutton.addEventListener("click", newStyle);

function newStyle(){
var fortuneText = document.getElementById("fortune-output");
fortuneText.classList.toggle("FortuneText");
console.log(fortuneText.classList);
};
