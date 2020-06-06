﻿var userList = new Array();
var min = 0;
var max = 10000;

/*
 * The main method for adding a new user to the user list.
 */
function addUser(id, name) {
    var user = createNewUserObject(id, name);
    userList.push(user);
    addUserUI(user["div"]);
}

/**
 * Append newly created UI for a given user to the user list.
 * @param {any} userDiv the container for the user's UI, to be added to the user list UI.
 */
function addUserUI(userDiv) {
    document.getElementById("userListArea").appendChild(userDiv);
}

/**
 * Update the user list for a specific user.
 * @param {any} userId The identifier for which user to update.
 * @param {any} userState The user's YouTube player state.
 * @param {any} userTime The time the user is at in the video.
 */
function updateUIForUser(userId, userState, userTime, userRights) {
    var updatedUser = false;

    userList.forEach(function (entry) {
        if (userId == entry["id"]) {
            var state = document.getElementById(userId + "userState");
            var time = document.getElementById(userId + "userTime")
            var rights = document.getElementById(userId + "userRights");

            if (state == null || time == null) {
                console.log("No state or time?");
                updatedUser = false;
            }

            state.innerHTML = userState;
            time.innerHTML = userTime;

            if (userRights === 1) {
                rights.style.display = "block";
            }

            updatedUser = true;
        }

    });

    return updatedUser;
}

/**
 * Create new UI elements to accommodate a new user in the user list.
 * @param {any} name The user name 
 * @param {any} id The user id
 */
function createUIForUser(name, id) {
    var userDiv = document.createElement("div");
    var userName = document.createElement("p");
    var userIdElement = document.createElement("p");
    var userState = document.createElement("p");
    var userTime = document.createElement("p");
    var userRights = document.createElement("p");

    var userKick = document.createElement("p");
    var userBan = document.createElement("p");
    var userMakeAdmin = document.createElement("p");

    userDiv.classList.add("userDiv");

    userName.classList.add("userDivElement");
    userName.id = id + "userName";

    userIdElement.classList.add("userDivElement");
    userIdElement.id = id + "userId";

    userState.classList.add("userDivElement");
    userState.id = id + "userState";

    userTime.classList.add("userDivElement");
    userTime.id = id + "userTime";

    userRights.classList.add("userDivElement");
    userRights.id = id + "userRights";

    userKick.classList.add("userDivElement");
    userKick.id = id + "userKick";

    userBan.classList.add("userDivElement");
    userBan.id = id + "userBan";

    userMakeAdmin.classList.add("userDivElement");
    userMakeAdmin.id = id + "userMakeAdmin";

    userName.innerHTML = name;
    userIdElement.innerHTML = id;
    userState.innerHTML = "[Video State]";
    userTime.innerHTML = "[Video Time]";
    userRights.innerHTML = "👑";
    userKick.innerHTML = "Kick";
    userBan.innerHTML = "Ban";
    userMakeAdmin.innerHTML = "Make Admin";

    userRights.style.display = "none";

    if (id == userId) {
        userDiv.style.backgroundImage =
            "radial-gradient(farthest-corner, white, white, lightgray)";
    }

    if (myRights == 1 && id != userId) {
        userKick.style.display = "block";
        userBan.style.display = "block";
        userMakeAdmin.style.display = "block";
    }
    else {
        userKick.style.display = "none";
        userBan.style.display = "none";
        userMakeAdmin.style.display = "none";
    }

    userDiv.appendChild(userName);
    userDiv.appendChild(userRights);
    userDiv.appendChild(userIdElement);
    userDiv.appendChild(userState);
    userDiv.appendChild(userTime);
    userDiv.appendChild(userKick);
    userDiv.appendChild(userBan);
    userDiv.appendChild(userMakeAdmin);

    return userDiv;
}

/**
 * Creating a new user object, containing their name, id, and the div containing their
 * personal UI in the user list.
 * @param {any} id User id
 * @param {any} name User name
 */
function createNewUserObject(id, name) {
    var user = new Object();
    user.name = name;
    user.id = id;
    user.div = createUIForUser(user.name, user.id);
    return user;
}

/**
 * Remove all users from the user list.
 */
function removeUsers() {
    userList.forEach(function (entry) {
        var div = entry["div"];
        div.parentNode.removeChild(div);
    });
    userList = new Array();
}