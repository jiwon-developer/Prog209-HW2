

const askBtn = document.querySelector("#askBtn");
const myListDiv = document.querySelector("#myList");
const swapedList = document.querySelector("#swapedList");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2")
let myListArr = [];


function askWord() {

    myListArr = []


    while (myListArr.length < 3) {
        const word = prompt("enter word");

        if (word != null && word != "") {
            myListArr.push(word);
            console.log(myListArr.length)

        }
    }




    makeList();
}

function makeList() {

    const ul = document.createElement("ul");

    myListArr.forEach(word => {
        const li = document.createElement("li");
        li.innerHTML = word;
        ul.appendChild(li);
    });

    myListDiv.appendChild(ul)

    const swapBtn = document.createElement("button");
    swapBtn.setAttribute("id", "swap-btn");
    swapBtn.textContent = "change the words"
    swapBtn.setAttribute('onclick', 'swapWord()')
    page1.appendChild(swapBtn);
    askBtn.hidden = "hidden";






}



function swapWord() {


    const ul = document.createElement("ul");
    const secondArray = myListArr.map(function (oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });


    secondArray.forEach(word => {
        const li = document.createElement("li");
        li.innerHTML = word;
        ul.appendChild(li);
    });
    swapedList.appendChild(ul)

    page2.hidden = ""
    page1.hidden = "hidden";
}
