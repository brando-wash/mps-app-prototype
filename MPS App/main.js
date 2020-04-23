var objPeople = [{
        username: "Brando",
        password: "godmode",
        isAdmin: true
    },
    {
        username: "Jose",
        password: "doometernal",
        isAdmin: false
    },
    {
        username: "Vang",
        password: "finance",
        isAdmin: false
    },
    {
        username: "Nekia",
        password: "rapper",
        isAdmin: false
    } //creates a variable, that holds an array of names and passwords

]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value // creates two variables that call info from the array
    event.preventDefault();
    for (i = 0; i < objPeople.length; i++) { // a for loop that cycles thru the only the data in the array, incrementing by +1

        if (username === objPeople[i].username && password === objPeople[i].password && objPeople[i].isAdmin === true) { //checks if the username and passwords match whats in the array
            console.log(username + " is logged in.") //displays confirmation message onto console
            window.location.href = "adminLanding.html"
            return;
        } else if (username === objPeople[i].username && password === objPeople[i].password) { //checks if the username and passwords match whats in the array
            console.log(username + " is logged in.") //displays confirmation message onto console
            window.location.href = "studentLanding.html"
            return;


        }

    }
    console.log("Incorrect Username or Password")
    alert("Incorrect Username or Password") // displays error message to console
}


function startTime() {
    var today = new Date();
    let timeString = today.toDateString() + "   " + today.toLocaleTimeString();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = timeString;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

//el Barto

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type =
            "password"; // checks to see if you are entering info into the password form; if so, it calls the id and info from myInput; if not, it stays text, unhidden 
    }
}