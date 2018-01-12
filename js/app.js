'use strict';

//Global variables
var totalCorrect = 0;

//Introduction

var userName = prompt('Hi! I have a guessing game with questions about me. But first, what is your name?');
console.log('For name, the user entered: ' + userName);

//Question 1: Guess my age
function question1() {
  var carlAge = prompt('Hi, ' + userName + ', nice to meet you! For the following questions please answer "Yes" or "No" ("y" or "n" are OK too).\n\nMy first question for you is: do you think I\'m over 30 years old?').toUpperCase();
  console.log('The user entered: ' + carlAge);

  if (carlAge === 'Y' || carlAge === 'YES') {
    alert('You are correct! I am 35 years old.\n\nOn to the next question...');
    console.log('The user answered correctly');
    totalCorrect++;
  } else if (carlAge === 'N' || carlAge === 'NO') {
    alert('That is kind of you, but incorrect. I am 35 years old.\n\nOn to the next question!');
    console.log('The user answered incorrectly');
  } else {
    alert('Please enter "Yes" or "No"!');
    console.log('The user entered something other than yes or no.');
  }
}

question1();

//Question 2: Asks if originally from Seattle
function question2() {
  var carlHome = prompt('Do you think I\'m originally from Seattle?').toUpperCase();
  console.log('The user entered: ' + carlHome);

  if (carlHome === 'Y' || carlHome === 'YES') {
    alert('You are correct, I grew up here in Seattle!\n\nOn to the next question...');
    console.log('The user answered correctly');
    totalCorrect++;
  } else if (carlHome === 'N' || carlHome === 'NO') {
    alert('Incorrect, I am proud to say I grew up here in Seattle.\n\nOn to the next question!');
    console.log('The user answered incorrectly');
  } else {
    alert('Please enter "Yes" or "No"!');
    console.log('The user entered something other than yes or no.');
  }
}

question2();


//Question 3: Guess number of siblings
function question3() {
  var carlSiblings = prompt('How many siblings do you think I have? More than 2?').toUpperCase();
  console.log('The user entered: ' + carlSiblings);

  if (carlSiblings === 'Y' || carlSiblings === 'YES') {
    alert('Incorrect, I have one older brother who also lives in Seattle.\n\nOn to the next question!');
    console.log('The user answered incorrectly');
  } else if (carlSiblings === 'N' || carlSiblings === 'NO') {
    alert('Correct, I do not have more than 2 siblings, but I do have an older brother who also lives in Seattle.\n\nOn to the next question...');
    console.log('The user answered correctly');
    totalCorrect++;
  } else {
    alert('Please enter "Yes" or "No"!');
    console.log('The user entered something other than yes or no.');
  }
}

question3();


//Question 4: Do I have any offspring?
function question4() {
  var carlKids = prompt('What about kids - do you think I have any kids?').toUpperCase();
  console.log('The user entered: ' + carlKids);

  if (carlKids === 'Y' || carlKids === 'YES') {
    alert('You are correct! I have a two year old son named Henry :)\n\nOn to the next question...');
    console.log('The user answered correctly');
    totalCorrect++;
  } else if (carlKids === 'N' || carlKids === 'NO') {
    alert('Incorrect, I have a two year old son named Henry :)\n\nOn to the next question!');
    console.log('The user answered incorrectly');
  } else {
    alert('Please enter "Yes" or "No"!');
    console.log('The user entered something other than yes or no.');
  }
}

question4();


////Question 5: Instruments question
function question5() {
  var carlInstrument = prompt('OK, what if I told you I play the cello? Would you believe me?').toUpperCase();
  console.log('The user entered: ' + carlInstrument);

  if (carlInstrument === 'Y' || carlInstrument === 'YES') {
    alert('Incorrect, I have never played the cello, but I do play the guitar.');
    console.log('The user answered incorrectly');
  } else if (carlInstrument === 'N' || carlInstrument === 'NO') {
    alert('You are correct, I do not play the cello, but I do play the guitar!');
    console.log('The user answered correctly');
    totalCorrect++;
  } else {
    alert('Please enter "Yes" or "No"!');
    console.log('The user entered something other than yes or no.');
  }
}

question5();


//Question 6: How long ago did I graduate from college
function question6() {
  for (var i = 1; i <= 4; i++) {
    var numGuess = parseInt(prompt('For this question, you\'re guessing a number. How many years since I graduated college?'));
    console.log('The user entered: ' + numGuess);
    if (numGuess === 14) {
      alert('Correct! I graduated with a Bachelor of Science in Biology from UW in 2004.');
      console.log('The user answered correctly');
      totalCorrect++;
      break;
    } else if (numGuess < 14) {
      alert('Too low...guess again!');
      console.log('The user answered incorrectly');
    } else if (numGuess > 14) {
      alert('Too high...guess again!');
      console.log('The user answered incorrectly');
    }
  }
}

question6();

//Question 7: Guess a country in Europe I have visited
function question7() {
  var countriesEurope = ['France', 'Spain', 'Germany', 'Austria', 'Italy', 'Denmark', 'Slovenia',];
  var counter = 1;

  while (counter <= 6) {
    var countriesQuestion = prompt('Can you guess a country that I\'ve been to in Europe?').toLowerCase();
    console.log('The user entered: ' + countriesQuestion);
    for (var x = 0; x < countriesEurope.length; x++) {
      if (countriesQuestion === countriesEurope[x].toLowerCase()) {
        alert('Correct! The countries in Europe that I have visited are: ' + countriesEurope.join(', '));
        console.log('The user entered a correct answer');
        totalCorrect++;
        counter = 7;
        break;
      }
    }
    if (counter <= 6) {
      alert('Incorrect, try again!');
      console.log('The user entered an incorrect answer.');
    } else if (counter > 6) {
      break;
    }
    counter++;
  }
}

question7();

alert(userName + ', thanks for answering these questions. You got ' + totalCorrect + ' out of 7 questions correct. I hope you enjoyed learning a little more about me!');