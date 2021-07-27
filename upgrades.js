// Upgrades Values
var hamsterVal = .59;
var humaVal = 78.15;
var hydVal = 1008.89;

//Upgrade functions
var hamsterClik = 50;
var humClik = 70;
var hydroClik = 750;

//Amount of upgrades
var totupgrades = 0;
var amtHam = 0;
var amtHum = 0;
var amtHyd = 0;

//click add functions
function hamClik()
{
  clik+=hamsterClik;
  money += .7;
  airQual *= 1;
  updac();
}
function humaClik()
{
  clik += humClik;
  money += .38;
  airQual *= 1.05;
  updac();
}
function hydClik()
{
  clik += hydroClik;
  money += 5.17;
  airQual *= .98;
  updac();
}

//buy functions that edit other variables
function buyHamsters()
{
  if(money >= hamsterVal && availacres >= hamAcres)
  {
    money -= hamsterVal;
    hamsterVal *= 2;
    amtHam += 1;
    availacres -= hamAcres;
    document.getElementById("ham").innerHTML = "Hamsters in a wheel: "+amtHam;
    document.getElementById("hamCost").innerHTML = "cost: "+ hamsterVal;
    totupgrades++;
    setInterval(hamClik,intervaltime);    
    updac();
  }
}
function buyHumans()
{
  if(money >= humaVal && availacres >= humaAcres)
  {
    money -= humaVal;
    humaVal *= 2;
    amtHum += 1;
    availacres -= humaAcres;
    document.getElementById("hum").innerHTML = "Human power plants: "+amtHum;
    document.getElementById("humcost").innerHTML = "cost: "+ humaVal;
    totupgrades++;  
    setInterval(humaClik,500);    
    updac();
  }
}
function byHydro()
{
  if(money >= hydVal && availacres >= hydAcres)
  {
    money -= hydVal;
    hydVal *= 2;
    amtHyd += 1;
    availacres -= hydAcres;
    document.getElementById("hyd").innerHTML = "Hydrogen power plants: " + amtHyd;
    document.getElementById("hydcost").innerHTML = "cost: "+ hydVal;
    totupgrades++;
    setInterval(hydClik,1000);    
    updac();
  }
}