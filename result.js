const start = document.querySelector(".start")

// Declaring the bank codes
var access = 901;
var eco = 326;
var first = 894;
var wema = 945;
var skyle = 833;
var fidelity = 770;
var gtb = 737;


// adding an onclick event to the start button
start.addEventListener('click', () => {
    const banking = () => {



        // Prompt the user to enter their bank codes
        var transaction = prompt("Enter your bank codes");

        // =================================================
        //   checking if the bank is skyle bank
        if (transaction == `*${skyle}#`) {
            alert("welcome to Polaris Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ==================================================
        //   checking if the bank is Eco bank
        else if (transaction == `*${eco}#`) {
            alert("welcome to Eco Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ==================================================
        //   checking if the bank is First bank
        else if (transaction == `*${first}#`) {
            alert("welcome to First Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ==================================================
        //   checking if the bank is Wema bank
        else if (transaction == `*${wema}#`) {
            alert("welcome to Wema Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ==================================================
        //   checking if the bank is Fidelity bank
        else if (transaction == `*${fidelity}#`) {
            alert("welcome to Fidelity Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ==================================================
        //   checking if the bank is Guarantee Trust bank
        else if (transaction == `*${gtb}#`) {
            alert("welcome to Guarantee Trust Bank.");

            //prompting the user to perform transaction
            var select = prompt(`
            WHAT DO YOU WANT TO DO TODAY ?
            1. Airtime Self
            2. Airtime Others
            3. Data
            4. Transfer
            `);

            // if the user select airtime for self, prompt user to choose the amount
            if (select == 1) {
                var amount = prompt(`
            CHOOSE AMOUNT
            1. #500
            2. #400
            3. #300
            4. #200

          `);

                //   if the user select the #500, confirm if the user wants to proceed with the transaction
                if (amount == 1) {
                    var check = confirm(
                        "Are You sure you want to buy a #500 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#500 Transaction successful");
                    }
                }

                //   if the user select the #400, confirm if the user wants to proceed with the transaction
                else if (amount == 2) {
                    var check = confirm(
                        "Are You sure you want to buy a #400 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#400 Transaction successful");
                    }
                }

                //   if the user select the #300, confirm if the user wants to proceed with the transaction
                else if (amount == 3) {
                    var check = confirm(
                        "Are You sure you want to buy a #300 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#300 Transaction successful");
                    }
                }

                //   if the user select the #200, confirm if the user wants to proceed with the transaction
                else if (amount == 4) {
                    var check = confirm(
                        "Are You sure you want to buy a #200 recharge card ?"
                    );

                    // if user replies with "OK", allow transation
                    if (check == true) {
                        alert("#200 Transaction successful");
                    }
                }

                //   if the user replies with "Cancel", stop transaction
                else {
                    alert("No input selected");
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS AIRTIME FOR OTHERS
            else if (select == 2) {
                var card = prompt(`
            CHOOSE RECIPIENT NETWORK
            1. mtn
            2. Airtel
            3. Etisalat
            4. Glo

          `);
                let number = prompt("Enter Recipient Number");
                if (isNaN(number)) {
                    alert("wrong input");
                }

                // If the user selects preferred card, prompt user to select amount
                if (card) {
                    var amount = prompt(`
                CHOOSE AMOUNT
                1. #500
                2. #400
                3. #300
                4. #200

            `);

                    //   if the user select the #500, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm(
                            "Are You sure you want to buy a #500 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#500 Transaction successful");
                        }
                    }

                    //   if the user select the #400, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm(
                            "Are You sure you want to buy a #400 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#400 Transaction successful");
                        }
                    }

                    //   if the user select the #300, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a #300 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#300 Transaction successful");
                        }
                    }

                    //   if the user select the #200, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a #200 recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("#200 Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // --------------------------------------------------------
            //   IF THE USER SELECTS DATA
            else if (select == 3) {
                var data = prompt(`
            1. self
            2. Third Party
          `);

                if (data == 1) {
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }

                //   If the user selects Third party
                if (data == 2) {
                    // Prompt user to enter Recipient number
                    var number = prompt("Enter Recipient Number");

                    // checking if the input number is a Number
                    if (isNaN(number)) {
                        alert("wrong Input");
                    }

                    // If the user enters recipient number , prompt user to select amount
                    var amount = prompt(`
                SELECT PREFERED DATA
                1. 2GB 30Days N1200
                2. 12GB 30Days N3500
                3. 25GB 30Days N6000
                4. 2.5GB 2Days N500 
            `);

                    //   if the user select the 1, confirm if the user wants to proceed with the transaction
                    if (amount == 1) {
                        var check = confirm("Are You sure you want to buy a 2GB DATA ?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2GB DATA Transaction successful");
                        }
                    }

                    //   if the user select the 2, confirm if the user wants to proceed with the transaction
                    else if (amount == 2) {
                        var check = confirm("Are You sure you want to buy a 12GB DATA?");

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("12GB Transaction successful");
                        }
                    }

                    //   if the user select the 3, confirm if the user wants to proceed with the transaction
                    else if (amount == 3) {
                        var check = confirm(
                            "Are You sure you want to buy a 25GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("25GB Transaction successful");
                        }
                    }

                    //   if the user select the 4, confirm if the user wants to proceed with the transaction
                    else if (amount == 4) {
                        var check = confirm(
                            "Are You sure you want to buy a 2.5GB recharge card ?"
                        );

                        // if user replies with "OK", allow transation
                        if (check == true) {
                            alert("2.5GB Transaction successful");
                        }
                    }

                    //   if the user replies with "Cancel", stop transaction
                    else {
                        alert("No input selected");
                    }
                }
            }

            // If the user selects Transfer
            else if (select == 4) {
                // Prompt user to enter Recipient account number
                var number = prompt("Enter Recipient Account Number");
                if (isNaN(number)) {
                    alert("wrong input");
                } else {
                    alert(`You entered ${number}`);
                }

                var amount = prompt("Enter Amount");
                if (isNaN(amount)) {
                    alert("wrong input");
                } else {
                    alert(`you entered ${amount}`);
                }

                // Prompt the user to select the bank
                var bank = prompt(`Select Bank
                1. Access Bank Plc
                2. Ecobank Nigeria Plc
                3. Fidelity Bank Plc
                4. FIRST BANK NIGERIA LIMITED
                5. Guaranty Trust Bank Plc
                `);

                // If the user selects any bank, proceeed
                if (bank) {
                    var pin = prompt("Provide your 4 digit pin");

                    if (isNaN(pin)) {
                        alert("wrong input");
                    }

                    // Validating the pin to 4 numbers only
                    else if (pin.length != 4) {
                        alert("Error!!! Invalid pin");
                    }

                    // alert the pin entered
                    else {
                        alert(`you entered ${pin}`);

                        // confirm if the user wants to continue the transaction
                        let confirms = confirm(
                            `You are Transferring ${amount} to ${number}, Do you want to proceed?`
                        );

                        //   if the user chooses "OK", proceed with the transaction
                        if (confirms == true) {
                            alert("Transaction successful");
                        }

                        //   If the user chooses "cancel", terminate the transaction
                        else {
                            alert("Transaction cancelled");
                        }
                    }
                } else {
                    alert("No input selected");
                }
            }

            //   if the user doesnt select anything or cancel trasaction
            else {
                alert("No input selected");
            }
        }

        // ========================================================
        // if user enters no input
        else {
            alert("provide your bank USSD code");
        }


    }
    banking()
})