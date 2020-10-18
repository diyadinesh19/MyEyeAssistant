

var entryIDs = ["cba2d458-3f4f-4b63-b774-86c8eebd9f4f","41add01a-15a6-44cb-9a67-73298b5bae47","68dea9ac-2c9f-436b-9c8f-9266f13c47b4","b7b79128-7bca-4a4b-8101-006c0a7688ee","66d1ce38-0b78-4d1f-8066-9750e59a048b"];

var barCodes = ["./Images/EyeRoll.png","./Images/EyeUpDown.png","./Images/EyeFocus.png","./Images/EyeLeftRight.png","./Images/CorrectPosture.png"];

var explains = ["The Bike Wheel: For this exercise, imagine that your eyes are following the edges of the bike wheel. Follow the AR presentation for the length and speed of eye movement. Repeat this exercise 3 times.","The Elevator: For this exercise, imagine that you are viewing a clear elevator go up and down. Follow the AR presentation for the length and speed of eye movement. Repeat this exercise 5 times.","The Thumb: For this exercise, follow your thumb moving forward and backward. Follow the AR presentation for the length and speed of eye movement. Repeat this exercise 3 times.","The Pendulum: For this exercise, imagine you are watching a pendulum move left to right. Refer to the AR presentation for the speed and length of eye movement. Repeat this exercise 5 times.","Improved posture: An improved posture can increase the distance between the screen and your eyes. This not only reduces eye fatigue, but it can also reduce many physical strains in the body."];

function exercise(){
  var ind = Math.floor(Math.random() * 5);
  anim = document.getElementsByClassName("animation")[0];
  //exp = document.getElementsByClassName("explain")[0];
  scan = document.getElementsByClassName("scan")[0];
  anim.src=barCodes[ind];
  scan.innerHTML = " "+explains[ind];
  anim.style.display = "block";
  //exp.style.display = "block";
  scan.style.display = "block";
}
var start = document.getElementById("start");
start.addEventListener('click', startTimer);
function startTimer(clickedEvent){
  anim = document.getElementsByClassName("animation")[0];
  //exp = document.getElementsByClassName("explain")[0];
  scan = document.getElementsByClassName("scan")[0];
  anim.style.display = "none";
  scan.style.display = "none"
  var reach = new Date().getTime()+60000;
  var x = setInterval(function() {
  // Find the distance between now and the count down date
  var distance = reach - new Date().getTime();

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementsByClassName("demo")[0].innerHTML = minutes;
  document.getElementsByClassName("demo")[1].innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("demo")[0].innerHTML = "1";
  document.getElementsByClassName("demo")[1].innerHTML = "00";
  exercise();
   var use = document.getElementsByClassName("use")[0];
  var stat = document.getElementsByClassName("statContent")[0];
  var mark = document.getElementsByClassName("mark")[0];
  var model = document.getElementsByClassName("model")[0];
  use.style.display = "none";
  stat.style.display = "none";
  mark.style.display = "block";
  model.style.display = "none";
  }
}, 1000);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById("todayDate").innerHTML = today;

document.getElementsByClassName("background")[0].addEventListener('click', showUse);
document.getElementsByClassName("stats")[0].addEventListener('click', showStat);
document.getElementsByClassName("marker")[0].addEventListener('click', showMark);
document.getElementsByClassName("eyeModel")[0].addEventListener('click', showEye);

function showUse(clickedEvent){
  var use = document.getElementsByClassName("use")[0];
  var stat = document.getElementsByClassName("statContent")[0];
  var mark = document.getElementsByClassName("mark")[0];
  var model = document.getElementsByClassName("model")[0];
  use.style.display = "block";
  stat.style.display = "none";
  mark.style.display = "none";
  model.style.display = "none";
}
function showStat(clickedEvent){
  var use = document.getElementsByClassName("use")[0];
  var stat = document.getElementsByClassName("statContent")[0];
  var mark = document.getElementsByClassName("mark")[0];
  var model = document.getElementsByClassName("model")[0];
  use.style.display = "none";
  stat.style.display = "block";
  mark.style.display = "none";
  model.style.display = "none";
}
function showMark(clickedEvent){
  var use = document.getElementsByClassName("use")[0];
  var stat = document.getElementsByClassName("statContent")[0];
  var mark = document.getElementsByClassName("mark")[0];
  var model = document.getElementsByClassName("model")[0];
  use.style.display = "none";
  stat.style.display = "none";
  mark.style.display = "block";
  model.style.display = "none";
}
function showEye(clickedEvent){
  var use = document.getElementsByClassName("use")[0];
  var stat = document.getElementsByClassName("statContent")[0];
  var mark = document.getElementsByClassName("mark")[0];
  var model = document.getElementsByClassName("model")[0];
  use.style.display = "none";
  stat.style.display = "none";
  mark.style.display = "none";
  model.style.display = "block";
}