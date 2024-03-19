function calculateTip(){
const billAmount=document.getElementById('billAmount').value;
const serviceRating=document.getElementById('serviceRating').value;
const numPeople=document.getElementById('numPeople').value;

if(isNaN(billAmount)||isNaN(serviceRating)||isNaN(numPeople)||numPeople<=0){
  alert("please enter valid values for all fields");
  return;
}
const tipPercentage=serviceRating*billAmount;
const totalTip=(tipPercentage).toFixed(2);
const tipPerPerson=(tipPercentage/numPeople).toFixed(2);
document.getElementById('totalTip').innerHTML
=`Total Tip: ${totalTip} tk <br>Tip per Person: ${tipPerPerson} tk`;
}