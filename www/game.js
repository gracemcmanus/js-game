/*
 * the (function() { ... }()); block wrapping the game code is called
 * an "anonymous self-instantiating function". wrapping your code blocks
 * like this scopes your variables so they are private to this function block.
 * in other words, this eliminates the possibility that you're overwriting
 * variables that were defined elsewhere.
*/

/* --- scoping example --- */

  // this declares age in the global namespace
  var age = 20;

  (function() {

    // now we can define another age variable within the anonymous function block
    var age = 30;

    // but we can still access the original
    console.log( window.age ); // 20

    // and they are independent
    console.log( age ); // 30

  }());

  // clean up the console before we start the game
  console.clear();

/* ----------------------- */



(function() {

  // Check if the user is ready to play!
  confirm ("Are you ready to play?");
  var age = prompt ("What's your age?");
  if (age < 13) {
      console.log("easy version");
  }
  else {
      console.log("difficult version");
  }
  console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
  console.log ("Suddenly, Bieber stops and says, 'Who wants to race me?'");
  var userAnswer = prompt ("Do you want to race Bieber on stage?");
  if (userAnswer === "yes") {
      console.log ("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
  }
  else {
      console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
  }
  var feedback = prompt ("Please rate this game 1 to 10");
  if (feedback > 8) {
      console.log ("Thank you! We should race at the next concert!");
  }
  else {
      console.log ("I'll keep practicing coding and racing.");
  }

}());