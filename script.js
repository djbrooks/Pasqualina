function idCard() {
    console.log("inside idCard fuction");

     var fname = document.getElementById("FirstName").value;
     var lname = document.getElementById("LastName").value;
     var address = document.getElementById("Address").value;
     var age = document.getElementById("Age").value;
     var phoneNumber = document.getElementById("PhoneNumber").value;
    var fullname = fname + " " + lname; 

    var numberArray = [];

    numberArray.push(age, phoneNumber);


    console.log("fname is: " + fname);
    console.log("lname is: " + lname);
    console.log("fullname is: " + fullname);
    console.log("address is: " + address);
    console.log("age is: " + age);
    console.log("phone is: " + phoneNumber);
    console.log("numberArray 0: " + numberArray[0]);
    console.log("numberArray 1: " + numberArray[1]);


    for (var i = 0; i < numberArray.length; i++) {
        if ( numberArray[i] <= 100 ) { 
            document.getElementById("postAge").innerHTML = "Age: " + age;
        } else { 
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
            
     document.getElementById("postFullName").innerHTML = fullname;
     document.getElementById("postAddress").innerHTML = address;

}

function forloop(){

}
