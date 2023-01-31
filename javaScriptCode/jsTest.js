var testOut = function () {

    console.log("Hello World");


}

var userInput = function () {

    var userString = prompt();
    console.log(userString);

}

function openWebPage(link) {
    /*
    var BrightSpace = "https://brightspace.brockport.edu/";
    var GoogCal = "https://calendar.google.com/";
    var Google = "https://www.google.com/";

    
    const open = require('open');

    switch(link) {

        case "brightSpace": open.WebPage(BrightSpace);

        case "calendar":  open.WebPage(GoogCal);

        default: open.WebPage(Google);

    }
    */
    const open = require('open');
    
    open(link);

}

function main () {

    testOut();
    
    openWebPage("https://www.google.com/");
    openWebPage("https://brightspace.brockport.edu/");
    openWebPage("https://calendar.google.com");


}

main();