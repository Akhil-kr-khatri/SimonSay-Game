let h2 = document.querySelector("h2");

let start = false;
let userSequence = [];
let gameSequence = [];
let level = 0;
let button = ["green", "purple", "red", "yellow"]
//Indicates game has been started.
document.addEventListener("keypress", function (event) {
    if (start == false) {
        console.log("Game Started")
        start = true;
        levelUP()
    }
})
//Game started and level is incresed and updated
function levelUP() {
    userSequence = [];
    level++

    h2.innerText = `Level ${level}`
    let randomNo = Math.floor(Math.random() * 4);
    console.log(randomNo)
    let randomColor = button[randomNo];
    gameSequence.push(randomColor);//inserting random color into game sequence array
    console.log(gameSequence)//printing game sequence array
    let randomButton = document.querySelector(`.${randomColor}`)
    buttonFlash(randomButton);

}
//Button flasesh
function buttonFlash(btn) {
    btn.classList.add("blink")
    setTimeout(function () {
        btn.classList.remove("blink");
    }, 250);
}
//When a button is pressed
function buttonClick() {
    //userSequence=[];//reset the user sequence array
    let btn = this;
    //console.log(btn)//printing the button value
    buttonFlash(btn)

    let userColor = btn.getAttribute("id");//gets the color value of button pressed by the user
    userSequence.push(userColor);//inserting color into user sequence array
    //console.log(userSequence)

    checkSequence(userSequence.length - 1);

}
let allButton = document.querySelectorAll(".box");//selting all button whose class is .box
for (btn of allButton) {
    btn.addEventListener("click", buttonClick)
}
//Match the user sequence and game sequence array
function checkSequence(index) {
    console.log(`level: ${level}`);
    if (userSequence[index] == gameSequence[index]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUP, 500);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b><br>Press Any Key To Start Again`
        console.log("Incorrect")
        reset()
    }
}
//Restart the game
function reset() {
    start = false;
    userSequence = [];
    gameSequence = [];
    level = 0;
}


