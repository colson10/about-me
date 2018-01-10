'use strict';

var userName = prompt('Hi! I have a guessing game with questions about me. But first, what is your name?');
console.log('For name, the user entered: ' + userName);

var totalCorrect = 0

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

alert(userName + ', thanks for answering these questions. You got ' + totalCorrect + ' out of 5 questions correct. I hope you enjoyed learning a little more about me!')