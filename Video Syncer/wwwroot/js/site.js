﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var usernameCookie = "username";
var usernameCharacterLimit = 25;

window.onload = function (event) {
    createNewName();
    var errorMsg = document.getElementById("alert-username-too-long");
    errorMsg.innerHTML =
        "Name must be less than " + usernameCharacterLimit + " characters"
    errorMsg.style.display = "none";

    var javascriptWarning = document.getElementById("alert-no-javascript");

    if (javascriptWarning != null) {
        console.log("Javascript enabled");
        javascriptWarning.style.display = "none";
    }

    /* Check if the user is using Internet explorer, and display an error */
    if (isUsingInternetExplorer()) {
        var ieWarning = document.getElementById("alert-using-internet-explorer");
        ieWarning.style.display = "block";
    }

    var nightToggle = document.getElementById("night-mode-toggle");
    nightToggle.onclick = function () {
        var element = document.getElementById("whole-body");
        var navbar = document.getElementsByClassName("navbar-default");

        if (nightToggle.checked) {
            element.classList.add("night-mode");
        }
        else {
            element.classList.remove("night-mode");

            //nvar bar shpould be
            // background-image: linear-gradient(to bottom,#3c3c3c 0,#222 100%)
        }
    }

};



document.getElementById("usernameBox").onfocusout = function () {
    userSetName();
}

document.getElementById("usernameBox").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        userSetName();
    }
}); 

function isUsingInternetExplorer() {
    var edgeString = /Edge/;

    if (edgeString.test(navigator.userAgent)) {
        return false;
    }

    if (window.document.documentMode) {
        return true;
    }
    return false;

    /*var userAgent = window.navigator.userAgent;
    var msieVersion = userAgent.indexOf('MSIE ');
    var tridentVersion = userAgent.indexOf('Trident/');
    var edgeVersion = ua.indexOf('Edge/');

    if (edgeVersion > 0) {
        return false;
    }

    if (msieVersion > 0 || tridentVersion > 0) {
        return true;
    }
    return false;*/

}

function userSetName() {
    var newNameDefault = document.getElementById("usernameBox").value;
    var errorMsg = document.getElementById("alert-username-too-long");

    if (newNameDefault.length > usernameCharacterLimit) {
        errorMsg.style.display = "block";

    }
    else {
        errorMsg.style.display = "none";
    }

    var newName = newNameDefault.slice(0, usernameCharacterLimit);
    setName(newName);
    console.log("Set new name to \"" + newName + "\"");
}

function getUsername() {
    if (getCookie(usernameCookie) != "") {
        return getCookie(usernameCookie);
    }
    else {
        createNewName();
        if (getCookie(usernameCookie) == "") {
            return "[No name set]";
        }
        else {
            return getCookie(usernameCookie);
        }
    }
}

function createNewName() {
    if (getCookie(usernameCookie) == "") {
        var name = "ChubbyBunny" + Math.round(Math.random() * (10000 - 0) + 0);
        setName(name);
    }
    else {
        document.getElementById("usernameBox").value = getCookie(usernameCookie);
    }
}

function setName(name) {
    if (name.length < 1) {
        name = "ChubbyBunny" + Math.round(Math.random() * (10000 - 0) + 0);
    }
    setCookie(usernameCookie,
        name,
        7);
    document.getElementById("usernameBox").value = name;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}