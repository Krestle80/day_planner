var nineInput = document.getElementById("nine");
var tenInput = document.getElementById("ten");
var elevenInput = document.getElementById("eleven");
var twelveInput = document.getElementById("twelve");
var oneInput = document.getElementById("one");
var twoInput = document.getElementById("two");
var threeInput = document.getElementById("three");
var fourInput = document.getElementById("four");
var fiveInput = document.getElementById("five");
var nineButton = document.getElementById("save9");
var tenButton = document.getElementById("save10");
var elevenButton = document.getElementById("save11");
var twelveButton = document.getElementById("save12");
var oneButton = document.getElementById("save1");
var twoButton = document.getElementById("save2");
var threeButton = document.getElementById("save3");
var fourButton = document.getElementById("save4");
var fiveButton = document.getElementById("save5");
console.log(moment().format("HH") );

//hour tracking for text boxes

if (moment().format("HH") > 9) {
    nineInput.className = "past";
}
else if (moment().format("HH") == 9) {
    nineInput.className = "present";
}
else {
    nineInput.className="future"
}

if (moment().format("HH") > 10) {
    tenInput.className = "past";
}
else if (moment().format("HH") == 10) {
    tenInput.className = "present";
}
else {
    tenInput.className="future"
}

if (moment().format("HH") > 11) {
    elevenInput.className = "past";
}
else if (moment().format("HH") == 11) {
    elevenInput.className = "present";
}
else {
    elevenInput.className="future"
}

if (moment().format("HH") > 12) {
    twelveInput.className = "past";
}
else if (moment().format("HH") == 12) {
    twelveInput.className = "present";
}
else {
    twelveInput.className="future"
}

if (moment().format("HH") > 13) {
    oneInput.className = "past";
}
else if (moment().format("HH") == 13) {
    oneInput.className = "present";
}
else {
    oneInput.className="future"
}

if (moment().format("HH") > 14) {
    twoInput.className = "past";
}
else if (moment().format("HH") == 14) {
    twoInput.className = "present";
}
else {
    twoInput.className="future"
}

if (moment().format("HH") > 15) {
    threeInput.className = "past";
}
else if (moment().format("HH") == 15) {
    threeInput.className = "present";
}
else {
    threeInput.className="future"
}

if (moment().format("HH") > 16) {
    fourInput.className = "past";
}
else if (moment().format("HH") == 16) {
    fourInput.className = "present";
}
else {
    fourInput.className="future"
}

if (moment().format("HH") > 17) {
    fiveInput.className = "past";
}
else if (moment().format("HH") == 17) {
    fiveInput.className = "present";
}
else {
    fiveInput.className="future"
}
console.log(moment().format("HH"))