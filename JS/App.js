'use strict';

var userName =prompt(" Please enter your Name","Example: Batool")
console.log(userName );

var userGender =prompt(" Please enter your Gender","Male or Female")
console.log(userGender );

var userAge =prompt(" Please enter your Age")
console.log(userAge );

if (userAge <="0"){
alert("Your Age is less than or equal to Zero")} 

var confirmMsg=confirm("Do you want to skip the welcoming message?" )
console.log(confirmMsg);
 
if(confirmMsg == false){
var male="Mr";
var female="Ms";
if(userGender =="male"){
    alert(` Welcome ${male} ${userName}`);
} else if( userGender== "female"){
    alert(` Welcome ${female} ${userName}`);
}else alert(` Welcome  ${userName}`);
}