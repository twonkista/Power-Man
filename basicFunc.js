// Click Values
var clik = 0;
var clikVal = 1;
var clikAdd = 10000;
var moneyquo = .7;
var moneyVal = .01;
var intervaltime = 2000;
var money = 0;

//
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//onload
var x = document.getElementById("allbids");
var y = document.getElementById("market");
window.onload = function()
{
  x.style.display='none';
  y.style.display='none';
};

//land stuffs
var totacres = 5;
var availacres = 5;
var landprice = 100;
var acresget = 5;

function buyLand()
{
  if(money >= landprice)
  {
    money-=landprice;
    landprice *= 5;
    acresget *= 2;
    totacres += acresget;
    availacres += acresget;
    updac();
  }
}

//how much land an upgrade takes
var hamAcres = 1;
var humaAcres = 1.5;
var hydAcres = 2.35;

//basic update/click variable functions
function myfunction() 
{
  clik = clik + clikVal;
  money = money + moneyVal;
  updac();
}

//all in one function
function updac() 
{
  document.getElementById("var").innerHTML = clik + " Watts";
  document.getElementById("money").innerHTML = Math.round(1000*money)/1000+"USD";
  document.getElementById("land").innerHTML = "Available land: "+Math.round(100*availacres)/100 + " Acres";
  document.getElementById("airQual").innerHTML = "Air quality: "+ Math.round(100*airQual)/100;
  document.getElementById("totland").innerHTML = "Total land: "+totacres+" Acres";
  document.getElementById("land").innerHTML = "Available land: "+availacres+" Acres";
  document.getElementById("lndprice").innerHTML = landprice + "USD";
  document.getElementById("acresget").innerHTML = "For "+acresget+" Acres";
}

//human stuffs
var population = 0;
var airQual = 10;
var morale = 0;

function moraleChange()
{
}