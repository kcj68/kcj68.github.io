
 document.write(user_name);

function welcome() {
  let a = "Please enter your name.";
  let b = "Write your name here.";
 // A prompt box is used to prompt users to input a value before entering a page.
 let user_name = window.prompt(a, b);
 let message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
 return message
 }
document.write(welcome());
