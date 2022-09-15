/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

function dragStartHandler(evt) {
  evt.dataTransfer.setData("dragged-element", evt.target.id);
}

function dragOverHandler(evt) {
  evt.preventDefault();
}

function dragHandler(evt) {
  evt.preventDefault();
  
  let eid = evt.dataTransfer.getData("dragged_element");
  evt.target.appendChild(document.getElementById(eid));
}

let mode = false;

function flipMode() {
  if(mode == false) {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    mode = true;
  }
  else {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    mode = false;    
  }
}

let prev;
let curr;

function keyPressed(event) {
  console.log(event.key);
  if(event.key == "M") {
    flipMode();
  }
}

document.addEventListener('keypress', keyPressed);


// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// function validate() {
//   var password1 = $("#password1").val();
//   var password2 = $("#password2").val();

    
 
//     if(password1 == password2) {
//        $("#validate-status").text("valid");        
//     }
//     else {
//         $("#validate-status").text("invalid");  
//     }
    
// }



function checkUsername() {
  let gemail = document.forms["myForm"]["sname"].value;
  
  let hasNum = 
      gemail.includes("0") || 
      gemail.includes("1") ||
      gemail.includes("2") ||
      gemail.includes("3") ||
      gemail.includes("4") ||
      gemail.includes("5") ||
      gemail.includes("6") ||
      gemail.includes("7") ||
      gemail.includes("8") ||
      gemail.includes("9") ;
  
  let hasUpper = 
      gemail.includes("A") || 
      gemail.includes("B") ||
      gemail.includes("C") ||
      gemail.includes("D") ||
      gemail.includes("E") ||
      gemail.includes("F") ||
      gemail.includes("G") ||
      gemail.includes("H") ||
      gemail.includes("I") ||
      gemail.includes("J") ||
      gemail.includes("K") ||
      gemail.includes("L") ||
      gemail.includes("M") ||
      gemail.includes("N") ||
      gemail.includes("O") ||
      gemail.includes("P") ||
      gemail.includes("Q") ||
      gemail.includes("R") ||
      gemail.includes("S") ||
      gemail.includes("T") ||
      gemail.includes("U") ||
      gemail.includes("V") ||
      gemail.includes("W") ||
      gemail.includes("X") ||
      gemail.includes("Y") ||
      gemail.includes("Z") ;
  
  
  if(hasNum && hasUpper) {
    let output = document.getElementById("usrcheck");
    output.innerHTML = "   Valid";    
  }
  else {
    let output = document.getElementById("usrcheck");
    output.innerHTML = "   Invalid";       
  }
  
}

function matchPassword() {
  
  let spwd = document.forms["myForm"]["spwd"].value;
  let cspwd = document.forms["myForm"]["cspwd"].value;

  if(spwd == cspwd) {
    let output = document.getElementById("pwdcheck");
    output.innerHTML = "   Valid";    
    // output.removeChild();
    // let valid_text = document.createTextNode("Valid");
    // output.appendChild(valid_text);
  }
  else{
    let output = document.getElementById("pwdcheck");
    output.innerHTML = "   Invalid";
    // output.removeChild();
    // let invalid_text = document.createTextNode("invalid");
    // output.appendChild(invalid_text);
  }
}

function validateForm() {
  let mname = document.forms["myForm"]["mname"].value;
  let gemail = document.forms["myForm"]["gemail"].value;
  let sname = document.forms["myForm"]["sname"].value;
  
  let tleads = document.forms["myForm"]["tleads"].value;
  let memlist = document.forms["myForm"]["memlist"].value;
    
  let result = gemail.includes("@");
  
  if (result == false) {
    alert("Incorrect mail address. " + gemail + " doesn't have @");
  }
  
  alert("Name: " + mname + 
        "\nEmail: " + gemail +
        "\nUsername: " + sname + 
        "\nTeam Lead: " + tleads +
        "\nTeam Members: " + memlist 
       );
} 