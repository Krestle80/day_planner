//snagging the text boxes
var nineInput = document.getElementById("nine");
var tenInput = document.getElementById("ten");
var elevenInput = document.getElementById("eleven");
var twelveInput = document.getElementById("twelve");
var oneInput = document.getElementById("one");
var twoInput = document.getElementById("two");
var threeInput = document.getElementById("three");
var fourInput = document.getElementById("four");
var fiveInput = document.getElementById("five");

//snagging the Buttons
var nineButton = document.getElementById("save9");
var tenButton = document.getElementById("save10");
var elevenButton = document.getElementById("save11");
var twelveButton = document.getElementById("save12");
var oneButton = document.getElementById("save1");
var twoButton = document.getElementById("save2");
var threeButton = document.getElementById("save3");
var fourButton = document.getElementById("save4");
var fiveButton = document.getElementById("save5");

// snagging the containers of the textboxes so i can append on saved text/ add classes 
var container9 =  document.getElementById("container9");
var container10 = document.getElementById("container10");
var container11 = document.getElementById("container11");
var container12 = document.getElementById("container12");
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");
var container5 = document.getElementById("container5");

//hour tracking for text boxes


if (moment().format("HH") > 9) {
    container9.className = "past";
    nineInput.className = "text_box past";
    
}
else if (moment().format("HH") == 9) {
    container9.className = "present";
    nineInput.className = "text_box present";
}
else {
    container9.className="future"
    nineInput.className = "text_box future";
}

if (moment().format("HH") > 10) {
    container10.className = "past";
    tenInput.className = "text_box past";
}
else if (moment().format("HH") == 10) {
    container10.className = "present";
    tenInput.className = "text_box present";
}
else {
    container10.className="future";
    tenInput.className = "text_box future";
}

if (moment().format("HH") > 11) {
    container11.className = "past";
    elevenInput.className = "text_box past";
}
else if (moment().format("HH") == 11) {
    container11.className = "present";
    elevenInput.className = "text_box present";

}
else {
    container11.className="future";
    elevenInput.className = "text_box future";
}

if (moment().format("HH") > 12) {
    container12.className = "past";
    twelveInput.className = "text_box past";
}
else if (moment().format("HH") == 12) {
    container12.className = "present";
    twelveInput.className = "text_box present";
}
else {
    container12.className="future"
    twelveInput.className = "text_box future";
}

if (moment().format("HH") > 13) {
    container1.className = "past";
    oneInput.className = "text_box past";
}
else if (moment().format("HH") == 13) {
    container1.className = "present";
    oneInput.className = "text_box present";
}
else {
    container1.className="future"
    oneInput.className = "text_box future";
}

if (moment().format("HH") > 14) {
    container2.className = "past";
    twoInput.className = "text_box past";
}
else if (moment().format("HH") == 14) {
    container2.className = "present";
    twoInput.className = "text_box present";
}
else {
    container2.className="future"
    twoInput.className = "text_box future";
}
if (moment().format("HH") > 15) {
    container3.className = "past";
    threeInput.className = "text_box past";
}
else if (moment().format("HH") == 15) {
    container3.className = "present";
    threeInput.className = "text_box present";
}
else {
    container3.className="future"
    threeInput.className = "text_box future";
    console.log("lol")
}

if (moment().format("HH") > 16) {
    container4.className = "past";
    fourInput.className = "text_box past";
}
else if (moment().format("HH") == 16) {
    container4.className = "present";
    fourInput.className = "text_box present";
}
else {
    container4.className="future"
    fourInput.className = "text_box future";
}

if (moment().format("HH") > 17) {
    container5.className = "past";
    fiveInput.className = "text_box past";
}
else if (moment().format("HH") == 17) {
    container5.className = "present";
    fiveInput.className = "text_box present";
}
else {
    container5.className="future"
    fiveInput.className = "text_box future";
}

// adding text for text boxes from corresponding input text box and saving that to local storage

$("#save9").click( function() {
   $(".task9").text(nineInput.value);
   var task9 = nineInput.value;//document.getElementsByClassName("task9")
   var saveString9 = JSON.stringify(task9)
   localStorage.setItem("nineSave", saveString9)
});

$("#save10").click( function() {
    $(".task10").text(tenInput.value);
    var task10 = tenInput.value;
    var saveString10 = JSON.stringify(task10)
   localStorage.setItem("tenSave", saveString10)
 });

 $("#save11").click( function() {
    $(".task11").text(elevenInput.value);
    var task11 = elevenInput.value;
    var saveString11 = JSON.stringify(task11)
   localStorage.setItem("elevenSave", saveString11)
 });

 $("#save12").click( function() {
    $(".task12").text(twelveInput.value);
    var task12 = twelveInput.value;
    var saveString12 = JSON.stringify(task12)
   localStorage.setItem("twelveSave", saveString12)
 });

 $("#save1").click( function() {
    $(".task1").text(oneInput.value);
    var task1 = oneInput.value;
    var saveString1 = JSON.stringify(task1)
   localStorage.setItem("oneSave", saveString1)
 });

 $("#save2").click( function() {
    $(".task2").text(twoInput.value);
    var task2 = twoInput.value;
    var saveString2 = JSON.stringify(task2)
   localStorage.setItem("twoSave", saveString2)
 });

 $("#save3").click( function() {
    $(".task3").text(threeInput.value);
    var task3 = threeInput.value;
    var saveString3 = JSON.stringify(task3)
   localStorage.setItem("threeSave", saveString3)
 });

 $("#save4").click( function() {
    $(".task4").text(fourInput.value);
    var task4 = fourInput.value;
    var saveString4 = JSON.stringify(task4)
   localStorage.setItem("fourSave", saveString4)
 });

 $("#save5").click( function() {
    $(".task5").text(fiveInput.value);
    var task5 = fiveInput.value;
    var saveString5 = JSON.stringify(task5)
   localStorage.setItem("fiveSave", saveString5)
 });

 // retrieving tasks off the local storage 
 
 var taskSave9 =  JSON.parse(localStorage.getItem("nineSave"));
 $(".task9").text(taskSave9);
 window.localStorage.getItem("nineSave");
 console.log(localStorage.getItem("nineSave"))

 var taskSave10 =  JSON.parse(localStorage.getItem("tenSave"));
 $(".task10").text(taskSave10);
 window.localStorage.getItem("tenSave");
 console.log(localStorage.getItem("tenSave"))

 var taskSave11 =  JSON.parse(localStorage.getItem("elevenSave"));
 $(".task11").text(taskSave11);
 window.localStorage.getItem("elevenSave");
 console.log(localStorage.getItem("elevenSave"))

 var taskSave12 =  JSON.parse(localStorage.getItem("twelveSave"));
 $(".task12").text(taskSave12);
 window.localStorage.getItem("twelveSave");
 console.log(localStorage.getItem("twelveSave"))

 var taskSave1 =  JSON.parse(localStorage.getItem("oneSave"));
 $(".task1").text(taskSave1);
 window.localStorage.getItem("oneSave");
 console.log(localStorage.getItem("oneSave"))

 var taskSave2 =  JSON.parse(localStorage.getItem("twoSave"));
 $(".task2").text(taskSave2);
 window.localStorage.getItem("twoSave");
 console.log(localStorage.getItem("twoSave"))

 var taskSave3 =  JSON.parse(localStorage.getItem("threeSave"));
 $(".task3").text(taskSave3);
 window.localStorage.getItem("threeSave");
 console.log(localStorage.getItem("threeSave"))

 var taskSave4 =  JSON.parse(localStorage.getItem("fourSave"));
 $(".task4").text(taskSave4);
 window.localStorage.getItem("fourSave");
 console.log(localStorage.getItem("fourSave"))

 var taskSave5 =  JSON.parse(localStorage.getItem("fiveSave"));
 $(".task5").text(taskSave5);
 window.localStorage.getItem("fiveSave");
 console.log(localStorage.getItem("fiveSave"))
 
 //emptying out the local storage
 $("#refresh").click( function(){
     localStorage.clear();
     location.reload();
 })