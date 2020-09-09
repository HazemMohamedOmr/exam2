// Section 1

let item = $("#item"),
    listContainer = $("#listContainer"),
    addItem = $("#addItem"),
    itemsList;

if (localStorage.getItem("Items") == null) {
    itemsList = [];
}
else {
    itemsList = JSON.parse(localStorage.getItem("Items"));

    displayItems();
}

$(addItem).click(addItems);

function addItems() {
    itemsList.push($(item).val());

    localStorage.setItem("Items", JSON.stringify(itemsList));

    console.log($(item).val());

    displayItems();

    clearItem();

}

function clearItem() {
    $(item).val("");
}

function displayItems() {
    let box = ``;
    for (let i = 0; i < itemsList.length; i++) {
        box += `<div class="d-flex justify-content-between my-2">
                    <li class="form-control text-left">
                        ${itemsList[i]}
                    </li>
                    <button onclick="delItems(${i})" class="btn btn-danger">X</button>
                </div>`
    }

    $(listContainer).html(box);
}

function delItems(index) {
    itemsList.splice(index, 1);

    localStorage.setItem("Items", JSON.stringify(itemsList));

    displayItems();
}

// ------------------------------------------------------------------------------------------------------------

// Section 2

let section2 = $(".section2"),
    music = $("#music"),
    // audioElement = new Audio("../sounds/Attack on Titan OST - Armored Titan Music Theme by Mohamed Ahmed (Eagle).mp3"),
    test = document.getElementsByTagName("audio")[0],
    interval;


test.pause();

$(music).mouseover(() => {
    interval = setInterval(() => {
        colorChange();
    }, 300)

    test.play();
    // audioElement.play();
})

$(music).mouseout(() => {
    $(section2).css("background-color", "#fff");
    clearInterval(interval);

    test.pause();
    // audioElement.pause();
})

function colorChange() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    $(section2).css("background-color", `#${randomColor}`);
}

// ---------------------------------------------------------------------------------------------------------------

// Section 3

let countDown = new Date("Oct 10, 2020 14:00:00").getTime();
let CountingDown = setInterval(() => {
    let now = new Date().getTime(),
        timeRemaining = countDown - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#mins").text(minutes);
    $("#secs").text(seconds);

}, 1000)

// ---------------------------------------------------------------------------------------------------------------

// Section 4

let section4 = $(".section4"),
    rLetter = $(".rLetter"),
    gLetter = $(".gLetter"),
    bLetter = $(".bLetter");

$(rLetter).mouseover(() => {
    rLetterChange();
})

$(rLetter).mouseout(() => {
    rLetterNormal();
})

$(gLetter).mouseover(() => {
    gLetterChange();
})

$(gLetter).mouseout(() => {
    gLetterNormal();
})

$(bLetter).mouseover(() => {
    bLetterChange();
})

$(bLetter).mouseout(() => {
    bLetterNormal();
})

function rLetterChange() {
    $("path").attr("fill", "#000000");
    $(section4).css("background-color", "#ff0000");
}

function rLetterNormal() {
    $(section4).css("background-color", "#fff");
}


function gLetterChange() {
    $("path").attr("fill", "#000000");
    $(section4).css("background-color", "#03ff00");
}

function gLetterNormal() {
    $(section4).css("background-color", "#fff");
}


function bLetterChange() {
    $("path").attr("fill", "#000000");
    $(section4).css("background-color", "#2500ff");
}

function bLetterNormal() {
    $(section4).css("background-color", "#fff");
}

// ---------------------------------------------------------------------------------------------------------------------

// Section 5

let userName = $("#userName"),
    nameError = $("#nameError"),
    email = $("#email"),
    emailError = $("#emailError"),
    phone = $("#phone"),
    phoneError = $("#phoneError"),
    message = $("#message"),
    count = $("#count"),
    submitBtn = $("#submitBtn");

message.keyup(() => {
    countLetter();
})

userName.blur(() => {
    nameValidate();
})

email.blur(() => {
    emailValidate();
})

phone.blur(() => {
    phoneValidate();
})

function nameValidate() {
    if ($(userName).val() == "") {
        $(userName).addClass("is-invalid").removeClass("is-valid");
        $(nameError).removeClass("d-none").addClass("d-block").text("Please enter a user name!");
    }
    else {
        $(userName).removeClass("is-invalid").addClass("is-valid");
        $(nameError).removeClass("d-block").addClass("d-none");
    }
}

function emailValidate() {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test($(email).val())) {
        $(email).addClass("is-valid").removeClass("is-invalid");
        $(emailError).removeClass("d-block").addClass("d-none");
    }
    else if ($(email).val() == "") {
        $(email).addClass("is-invalid").removeClass("is-valid");
        $(emailError).removeClass("d-none").addClass("d-block").text("Please enter an email!");
    }
    else {
        $(email).addClass("is-invalid").removeClass("is-valid");
        $(emailError).removeClass("d-none").addClass("d-block").text("Please enter a valid email ex: ####@example.com");
    }
}

function phoneValidate() {
    let regex = /^(002)?01[0125][0-9]{8}$/;
    if (regex.test($(phone).val())) {
        $(phone).addClass("is-valid").removeClass("is-invalid");
        $(phoneError).removeClass("d-block").addClass("d-none");
    }
    else if ($(phone).val() == "") {
        $(phone).addClass("is-invalid").removeClass("is-valid");
        $(phoneError).removeClass("d-none").addClass("d-block").text("Please enter a phone number!");
    }
    else {
        $(phone).addClass("is-invalid").removeClass("is-valid");
        $(phoneError).removeClass("d-none").addClass("d-block").text("Please enter a valid phone number  ex: 010########");
    }
}

function countLetter() {
    let maxLetter = 30,
        letters = $(message).val().length,
        remainingLetters = maxLetter - letters;

    $(count).text(`${remainingLetters} remaining`);
}