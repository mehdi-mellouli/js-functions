var names = ["mehdi", "kenza", "karim", "sana", "mhammed", "yesmine"];

function whos_paying(names) {
    var  numberofpeople = names.length ;
    var randomPersonPosition = Math.floor(Math.random() * numberofpeople );
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to pay for lunch today"
}
whos_paying(randomPerson);