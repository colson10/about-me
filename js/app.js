'use strict';

var userName = prompt('Hi! I have a guessing game with questions about me. But first, what is your name?');
console.log('For name, the user entered: ' + userName);

var carlAge = prompt('Hi ' + userName + ', nice to meet you! For the following questions please answer "Yes" or "No" ("y" or "n" are OK too).\n\nMy first question for you is: do you think I\'m over 30 years old?').toUpperCase();
console.log('The user entered: ' + carlAge);

if (carlAge === 'Y' || carlAge === 'YES') {
    alert('You are correct! I am 35 years old.\n\nOn to the next question...');
    console.log('The user answered correctly');
} else if (carlAge === 'N' || carlAge === 'NO') {
    alert('That is kind of you, but incorrect. I am 35 years old.\n\nOn to the next question!');
    console.log('The user answered incorrectly');
} else {
    alert('Please enter "Yes" or "No"!');
}

var carlHome = prompt('Do you think I\'m originally from Seattle?').toUpperCase();
console.log('The user entered: ' + carlHome);

if (carlHome === 'Y' || carlHome === 'YES') {
    alert('You are correct, I grew up here in Seattle!');
    console.log('The user answered correctly');
} else if (carlHome === 'N' || carlHome === 'NO') {
    alert('Incorrect, I am proud to say I grew up here in Seattle');
    console.log('The user answered incorrectly');
} else {
    alert('Please enter "Yes" or "No"!');
}
