    var code = prompt("Enter your Bank Code?");
    alert(`
    Welcome to the USSD ${code},
    Pls note that a charge of #6.98 applies for using this service`);
    var airtime_Self, airtime_Others, Data, transfer_GTB, transfer_Others, amount, pin, confirmation, bank_name;
    var option_Choice = Number(prompt(`Choice of action:
    1. Airtime_self
    2. Airtime_others
    3. Data
    4. Transfer-GTB
    5. Transfer-Others`));
    // Airtime self option
    if (option_Choice == 1) {
        airtime_Self = Number(prompt('Enter amount:'))
        alert(`Your #${airtime_Self} recharge is successfully loaded, thank you for using this service.`)
    }
    // Section for Airtime for Others
    else if (option_Choice == 2) {
        airtime_Others = prompt("Please Enter 3rd party mobile number")
        amount = Number(prompt("Please enter amount:"))
        pin = prompt('Please enter your pin')
        confirmation = confirm(`Are you sure you want to recharge #${amount} to the number specified: ${airtime_Others}`)
        if (confirmation == true) {
              alert(`You've successfully recharge #${amount} for ${airtime_Others}, thanks for using this service.`)
        }
    }
    // Section for Data subscription for self
        else if (option_Choice == 3) {
            let option_data = Number(prompt(`
            Purchase data for:
            1. Self
            2. 3rd Party`))
           if (option_data == 1) {
            Data = prompt(`
            Select your Bundle
            1. 100MB 1day #100
            2.350MB 7days #300
            3. 750MB 14days #500
            4. 1GB 1day #300
            5. 1.5GB 30days #1000`)
            alert("Transaction successful")
            }
    // Section for Data subscription for others
        else {
            let request = prompt("Please Enter 3rd party mobile number")
            Data = prompt(`
            Select your Bundle
            1. 100MB 1day #100
            2.350MB 7days #300
            3. 750MB 14days #500
            4. 1GB 1day #300
            5. 1.5GB 30days #1000`)
            alert("Transaction successful")
        }
    }
    // Section for Transfer to GTBank users
        else if (option_Choice === 4) {
            amount = Number(prompt("Please enter amount:"))
            let enter = prompt(`Enter Account no or Phone no or Surname `)
            pin = prompt('Please enter your pin')
            confirmation = confirm(`Are you sure you want to transfer #${amount} to this account no: ${enter}`)
            alert(`Transaction successful`)
    }
    // Section for Transfer to customers of other banks
        else {
            amount = Number(prompt("Please enter amount:"))
            bank_name = prompt(`
            1. Access Bank
            2. Diamond Bank
            3. Ecobank
            4. First Bank
            5. Heritage Bank
            6. UBA
            7. Zenith Bank`)
            let enter = prompt(`Enter Account no or Phone no or Surname `)
            pin = prompt('Please enter your pin')
            confirmation = confirm(`Are you sure you want to transfer #${amount} to this account no: ${enter}`)
            alert(`Transaction successful`)
    }         
    