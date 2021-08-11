var ussd = prompt(`What do you want to do
1. Airtime self
2. Airtime- others
3. Data
4. Transfer`)

ussd = Number(ussd)

if(ussd === 1){
  amount = prompt('Input amount');
  confirmaion = confirm(`Are you sure you want to buy #${amount} airtime to your number`)
  if(confirmaion){
  alert('Recharge successful');
  }else{
    alert('please try again')
  }

}
else if(ussd === 2){
  num = prompt('Enter Phone Number');
 network = prompt('Input Network ');
 amount = prompt('Input Amount');
  alert('Recharge Successful');
}
else if(ussd === 3){
 num = prompt('Enter Phone Number');
 network = prompt('Input Network ');
 amount = prompt('Input Amount');
 confirmaion = confirm(`Are you sure you want to buy ${amount} worth of data to ${num}`)
 alert('Data Purchase Successful');
 
}
else if(ussd === 4){
  num =  prompt('Input Recipient\'s number ');
  amount = prompt('Input Amount');
  confirmaion = confirm(`Are you sure you want to send ${amount} to ${num}`)
  alert('Transfer successful');
}
else{
  alert('You have inputed the wrong value')
}
