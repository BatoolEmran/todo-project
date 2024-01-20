'use strict';


var userName = prompt(" Please enter your Name", "Example: Batool")
console.log(userName);

var userGender = prompt(" Please enter your Gender", "Male or Female").toLowerCase();
console.log(userGender);

var userAge = prompt(" Please enter your Age")
console.log(userAge);

if (userAge <= "0") {
    alert("Your Age is less than or equal to Zero")
}

var confirmMsg = confirm("Do you want to skip the welcoming message?")
console.log(confirmMsg);

if (confirmMsg == false) {
    var male = "Mr";
    var female = "Ms";
    if (userGender == "male") {
        alert(` Welcome ${male} ${userName}`);
    } else if (userGender == "female") {
        alert(` Welcome ${female} ${userName}`);
    } else alert(` Welcome  ${userName}`);
}


    function underGraduate() {
        let underGraduate1 = prompt("Are you undergraduate student ?", "Yes or No")
        if (underGraduate1 == null || underGraduate1 == "") {
            underGraduate1 = "Invalid"
        }
        return underGraduate1;
    }
    // ---------
    function freshGraduate() {
        let freshGraduate1 = prompt(" Are you fresh graduate ?", "Yes or No")
        if (freshGraduate1 == null || freshGraduate1 == "") {
            freshGraduate1 = "Invalid"
        }
        return freshGraduate1;
    }
    // ---------
    function fullTime() {
        let fullTime1 = prompt(" Are you full time employee ?", "Yes or No")
        if (fullTime1 == null || fullTime1 == "") {
            fullTime1 = "Invalid"
        }
        return fullTime1;
    }
    // ---------
    let userAnswers = [];
    function addAnswerToArray(value) {

        userAnswers.push(value)
    }

    addAnswerToArray(underGraduate());
    addAnswerToArray(freshGraduate());
    addAnswerToArray(fullTime());

    function printArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }

    printArray(userAnswers);