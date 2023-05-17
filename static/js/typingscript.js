function typeInOutput () {
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isTyping = false,
    isParagraph = false,
    isSpan = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "Byte Bullies|  Understanding Violence against Women in Politics and Leadership", 
  "% A study on the 2022 Kenya General Elections",  
];
// Speed (in milliseconds) of typing.
var speedForward = 50, //Typing Speed
    speedBetweenLines = 800;//Wait between first and second lines
//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
      eSpan = element.children("span"); //subparagraph element

  // Determine if animation should be typing
  if (!isTyping) {
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        // If character isn't a pipe, continue typing.
      }
      else if (aString.charAt(i) == '%') {
        isParagraph = false;
        isSpan = true;
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      if (!isParagraph && !isSpan) {eHeader.text(eHeader.text() + aString.charAt(i));} 
      else if (isParagraph && !isSpan) {eParagraph.text(eParagraph.text() + aString.charAt(i));}
      else {eSpan.text(eSpan.text() + aString.charAt(i));}
      i++;
      setTimeout(function(){ typeWriter(id, ar); }, speedForward);
    } 
  else if (i == aString.length) {
    i = 0;
    isParagraph = false;
    isSpan = false;
    a++;
    setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
    }
  }
  };
}