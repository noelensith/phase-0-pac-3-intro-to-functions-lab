
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let lowerCase = "I can't hear you!"
    let upperCase = "YES INDEED!"
    let dinner = "I would love to!"
    if (string.toLowerCase(string) === string) {
        return lowerCase;
    }
    else if (string.toUpperCase(string) === string) {
        return upperCase;
    }
    else if ("Let's hae=ve dinner together!") {
        return dinner;
    }
}