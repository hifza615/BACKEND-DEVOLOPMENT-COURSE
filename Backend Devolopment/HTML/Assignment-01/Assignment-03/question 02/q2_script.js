// Access the heading and paragraph using getElementById()
var title = document.getElementById("title");
var message = document.getElementById("message");

// Access the button using getElementById()
var showBtn = document.getElementById("showBtn");

// When the button is clicked
showBtn.onclick = function() {


// Display the heading text using alert()
alert(title.textContent);

// Display the paragraph text using console.log()
console.log(message.textContent);


};
