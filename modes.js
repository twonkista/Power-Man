function genRand(min, max, decimalPlaces) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}

//land bidding
var startPrice = landprice/4;
var bidquo = genRand(1,1.5,2);
var enterNumber;
var likeleyQuo = Math.random();
var bidCycle = 0;

function startBid()
{
  if (clik >= 10000)
  {
    x.style.display='block';
  }
  updateBid();
}

function enterPrice()
{
  enterNumber = document.getElementById('number').value;
  if((enterNumber > startPrice) && (enterNumber <= money))
  {
    startPrice = enterNumber;
    bidCycle++;
    virtuBid();
    updateBid();
    bidResults();
  }
  else
  {
    alert("Invalid bid amount");
  }
}

function virtuBid()
{
  if(Math.random() <= .6)
  {
    startPrice *= bidquo;
    bidCycle++;
    updateBid();
  }
  else
  {
    bidCycle++;
  }
}

function closeBid()
{
  x.style.display = 'none';
}

function bidResults()
{
  if(bidCycle >= 7)
  {
    if(startPrice > enterNumber)
    {
      alert("Bid lost");
      bidCycle = 0;
      startPrice *= 1.3;
      updateBid();
    }
    else
    {
      alert("bid won")
      money -= startPrice;
      bidCycle = 0;
      totacres += acresget;
      availacres += acresget;
      startPrice *= 5;
      landprice *= 5;
      acresget *= 2;
      updateBid();
      updac();
    }
  }
}

function updateBid()
{
  document.getElementById("bidSys").innerHTML = "highest bid: " + Math.round(startPrice);
  document.getElementById("rounds").innerHTML = "Rounds out of 6: " + bidCycle;
}

//stock market
var lowQuo = genRand(2,7,2);
var midQuo = genRand(5,17,2);
var higQuo = genRand(.25,35,2);
var lowPrice = 5;
var midPrice = 8;
var higPrice = 10;
var numOfShares = document.getElementById("shares").value;
var midShares = document.getElementById("Midshares").value;
var higShares = document.getElementById("Higshares").value;
var lowMoney = 0;
var midMoney = 0;
var highMoney = 0;

function openMarket()
{
  y.style.display = 'block';
}

function lowShare()
{
  lowPrice *= genRand(.75,1.5,2);
}

function midShare()
{
  midPrice *= genRand(.35,2.5,2);
}

function higShare()
{
  higPrice *= genRand(.10,3.5,2);
}


function Lowbuy()
{
  lowMoney += numOfShares*sharePrice;
}

function Midbuy()
{
  midMoney += midShares*sharePrice;
}

function Higbuy()
{
  lowMoney += highShares*sharePrice;
}

function closeMkt()
{
  y.style.display = 'none';
}

// natural disasters

for(let i = 0; i < 7; i++)
{
  lowShare();
  console.log(lowPrice);
}