//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (argument1) {
  if (argument1 === 'Tyler') {
    return true;
  } else {
    return false;
  }
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName () {
  prompt('what is your name?')
  return prompt();
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var username = getName();
  alert("Welcome, " + username);
}


//Next problem




//What is the difference between arguments and parameters?

  //Arguments are values for parameters and they change, parameters are variables for the arguments, and they don't change.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // Falsy values = (null, 0, "", undefined, NaN, and false)
  //Block of code will only run if a value is truthy. So if your block does not run, then your value is falsy.




//Next Problem



//Create a function called myName that returns your name

function myName () {
  var name = "Geordyn";
  return name;
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return newMyName();
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
