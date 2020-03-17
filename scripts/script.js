// Create variables for the welcome message
var greeting = 'Howdy ';
var message = ', please check your order and enter your full name for payement:';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;




// name func
function getNameInput() {
    var fni = document.getElementById("nameInput");
    var firstName = fni.value;

    return { 
        firstName : firstName, 
    };
};
// out-func
function clickedSubmitButton() {
  ///// Output
  var outputText = document.getElementById("outputText");
  ///// vars
  var fullname = getNameInput();
  var firstName = fullname.firstName;
  ///// output text
    outputText.innerHTML = (
        `<li>Hello <b>${firstName}</b>, thank you for your payment and we are processing your order at the moment.</li>`
    );
  
};