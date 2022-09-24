document.querySelector("button").addEventListener("click", handleClick);
var rate =0;
var div1 = document.getElementById("card1");
var div2 = document.getElementById("card2");
function handleClick(){
   changeDiv();
   changeRateText();

}      

function changeDiv(){
  div1.classList.add("rate-card");
  div2.classList.add("thankyou-card-visible");
}

function changeRateText(){
  if(document.getElementById("radio1").checked){
    rate=1;
    document.getElementById("rate-value").innerText = rate;

}
else if(document.getElementById("radio2").checked){
rate =2;
document.getElementById("rate-value").innerText = rate;
}
else if(document.getElementById("radio3").checked){
    rate =3; 
    document.getElementById("rate-value").innerText = rate;
}
else if(document.getElementById("radio4").checked){
    rate =4;
    document.getElementById("rate-value").innerText = rate;
}
 else if(document.getElementById("radio5").checked){
     rate =5;
     document.getElementById("rate-value").innerText = rate;
}
}
       
    