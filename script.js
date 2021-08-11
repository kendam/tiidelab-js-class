var choice = prompt(`Welcome to Customer Self Service. Press 1 for Airtime-Self
                                                                  2 for Airtime-Others
                                                                  3 for Data
                                                                  4 for Transfer`)


// Process requests
if (choice === '1') {
    // Process Airtime-Self
    let amount = Number(prompt("Enter recharge amount"))
    if (!Number.isNaN(amount)) {
        var confirmation = confirm("Confirm recharge to your number")
        if (confirmation == true) {
            // Perform recharge
            alert("Recharge successful")
        }
        else {
            alert("Recharge unsuccessful. Bye!")
        }
    }
    else {
        alert("Invalid amount. Bye!")
    }
}

else if (choice === '2') {
    // Process Airtime-Others
    let ben_number = Number(prompt("Enter beneficiary's number"))
    if (!Number.isNaN(ben_number)) {
        let amount = Number(prompt("Enter recharge amount"))
        if ((!Number.isNaN(amount)) ) {
            var confirmation = confirm(`Confirm recharge to ${ben_number}`)
            if (confirmation == true) {
                // Perform third party recharge
                alert(`Recharge to ${ben_number} successful`)
            }
            else {
                alert(`Recharge to ${ben_number} unsuccessful. Bye!`)
            }
        }
        else {
            alert("Invalid amount")
        }

    }
    else {
        alert("Invalid beneficiary phone number")
        } 
    }


else if (choice === '3') {
    // Process Data
    let amount = Number(prompt("Enter data amount"))
    if (!Number.isNaN(amount)) {
        var confirmation = confirm("Confirm data recharge")
        if (confirmation == true) {
            // Perform data recharge
            alert("Data recharge successful")
        }
        else {
            alert("Data recharge unsuccessful. Bye!")
        }
    }
    else {
        alert("Invalid amount. Bye!")
    }

}



else if (choice === '4') {
    // Process Transfer
    let ben_number = Number(prompt("Enter beneficiary's account number"))
    if (!Number.isNaN(ben_number)) {
        let amount = Number(prompt("Enter transfer amount"))
        if ((!Number.isNaN(amount)) ) {
            var confirmation = confirm(`Confirm transfer to ${ben_number}`)
            if (confirmation == true) {
                // Perform transfer
                alert(`Transfer to ${ben_number} successful`)
            }
            else {
                alert("Transfer unsuccessful. Bye!")
            }
        }
        else {
            alert("Invalid amount")
        }

    }
    else {
        alert("Invalid beneficiary phone number")
        } 
    }


else {
    alert("Sorry, you entered a wrong choice")
}
