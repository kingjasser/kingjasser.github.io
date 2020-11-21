var burger= 0;
var fries = 0;
var chicken = 0;
var spag = 0;
var sundae = 0;
var count1 = 0;
var count2 = 0
var count3 = 0;
var count4 = 0;
var count5 = 0;


function brgr(){
  document.getElementById("img").style.backgroundImage = "url('https://s3-ap-southeast-1.amazonaws.com/prod-gadc-corp-2019/public/web/2020-07-07/5f037882478d8/NutritionalFacts-QuarterPounder-min-500.jpeg')";

burger = burger + 35;
count1 = count1 + 1;
document.getElementById("odr-1").innerHTML = "Burger: Order x " + burger + " (" + count1 +")";
}

function frs(){
  document.getElementById("img").style.backgroundImage = "url('https://s3-ap-southeast-1.amazonaws.com/prod-gadc-corp-2019/public/web/2019-03-07/e284387a73feba59d599d65dc327976a/Fries-500.jpeg')";

fries = fries + 60;
count2 = count2 + 1;
document.getElementById("odr-2").innerHTML = "Fries: Order x " + fries + " (" + count2 +")";
}

function chick(){
  document.getElementById("img").style.backgroundImage = "url('https://s3-ap-southeast-1.amazonaws.com/prod-gadc-corp-2019/public/web/2019-03-07/2b986f6dd0bc344814a3d066af0c699c/2pcChickenRice-500.jpeg')";

chicken = chicken + 95;
count3 = count3 + 1;
document.getElementById("odr-3").innerHTML = "Chicken: Order x " + chicken + " (" + count3 +")";
}

function spageti(){
  document.getElementById("img").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8n_e1S5rx_BFi2nv4a0Xm_5DP2ILDtC9Y-w&usqp=CAU')";

spag = spag + 50;
count4 = count4 + 1;
document.getElementById("odr-4").innerHTML = "Spaghetti: Order x " + spag + " (" + count4 +")";
}

function snd(){
  document.getElementById("img").style.backgroundImage = "url('https://s3-ap-southeast-1.amazonaws.com/prod-gadc-corp-2019/public/web/2020-07-07/5f03897f2cbc9/NutritionalFacts-CaramelSundae-min-500.jpeg')";

sundae = sundae + 30;
count5 = count5 + 1;
document.getElementById("odr-5").innerHTML = "Sundae: Order x " + sundae + " (" + count5 +")";
}


function total(){
  var sum = burger + fries + chicken + spag + sundae;

  var sum2 = count1 + count2 + count3 + count4 + count5;

document.getElementById("odr-total").innerHTML= "Total: P" + sum + " (" + sum2 + ")";
}


function cancel(){
 var m = confirm("Do you want to cancel the order?");

if (m == true){
var burger= 0;
var fries = 0;
var chicken = 0;
var spag = 0;
var sundae = 0;
var count1 = 0;
var count2 = 0
var count3 = 0;
var count4 = 0;
var count5 = 0;
document.getElementById("odr-1").innerHTML= "Burger:";
document.getElementById("odr-2").innerHTML= "Fries:";
document.getElementById("odr-3").innerHTML= "Chicken:";
document.getElementById("odr-4").innerHTML= "Spaghetti:";
document.getElementById("odr-5").innerHTML= "Sundae:";
document.getElementById("odr-total").innerHTML= "Total:";
document.getElementById("img").style.backgroundImage = "url('https://www.pngitem.com/pimgs/m/80-807139_mcdonalds-clipart-logo-mcdo-transparent-png-mcdonalds-logo.png')";
}

}
