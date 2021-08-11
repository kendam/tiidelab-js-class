// conditional statement

var num = Number(prompt("Welcome GT users \n \n 1. airtime-self \n 2. airtime-others \n 3. Data \n 4. Transfer \n \n Enter a number: "))

if (num == 1){
	amount = Number(prompt("Enter an amount"))
	if (amount <= 50){
		alert("Too low")
		}
	else if (amount >50){
		alert("Transaction succcesful")
		}
	else{
		alert("Invalid Input")
		}
	}
	
else if (num == 2){
	amount= Number(prompt("Enter an amount dear giver"))
	if (amount <= 50){
		alert("Give Big !!")
		}
	else if (amount > 50){
		alert("Transaction successful")
		}
	else{
		alert ("invalid input")
		}
	}
else if (num == 3){
	let gigabytes = Number(prompt("Select a data option: \n \n 1. 200 for 5gb \n 2. 500 for 8gb \n 3. 1000 for 20gb"))
	
	if(gigabytes == 1){
		alert("Congratulations. 5gb has been successfully purchased")
		}
	else if (gigabytes == 2){
		alert("Congratulations. 8gb has been successfully purchased")
		}
	else if (gigabytes == 3){
		alert("Congratulations. 20gb has  been successfully purchased")
		}
	else{
		alert("Invalid Input")
		}
	}
	
	
else if(num == 4){
	const amount =Number(prompt ("how much are you sending"))
	if (amount <= 1000){
		alert("Too low , Unable to send")
		}
	else if(amount > 1000 && amount <= 50000){
		alert("Transaction succcesful")
		}
	else if(amount > 50000){
		alert ("Too high, please contact the bank")
		}
	else{
		alert ("invalid input")
		}
	}
	
else{
	alert("invalid input")
	}
