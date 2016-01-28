// main javascript document

"use strict";

var username = "Hanvinder";
var age = 30;
var isHungry = true;

var usernames = [];

usernames =["Mike", "Rich", "Anju", "Margot"];
console.log("before the push:" + usernames);

//add the element bottom of the array
usernames.push("Tom");
console.log("after the push:" + usernames);

//remove the element from the bottom of the array
usernames.pop();
console.log("after the pop:" + usernames);
/*
var usernames = [];
//var usernames = new Array ();


usernames[0] = "Mike";
console.log(usernames[0]);
usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = "400";

usernames[0]= "Tom";

console.log(usernames[0]);

usernames[5] = "Another User";

console.log(usernames[5]);*/
