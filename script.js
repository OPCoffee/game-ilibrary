let myLibrary = [];

function Game(title, studio, hoursPlayed, completionStat) {
        this.title = title;
        this.studio = studio;
        this.hoursPlayed = hoursPlayed;
        this.completionStat = completionStat;

}

function addGameToLibrary(game){
    myLibrary.push(game);
}

//Get necessary DOM elements

const title = document.getElementById("title");
const studio = document.getElementById("studio");
const hoursPlayed = document.getElementById("hoursPlayed");
// const completionStat = document.getElementsByName("completed");
const content = document.querySelector(".content");

const addButton = document.querySelector(".button");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");


addButton.addEventListener("click", showForm);
submitButton.addEventListener("click", submitForm);
cancelButton.addEventListener("click", hideForm);


function showForm(){
    const form = document.querySelector(".form");
    form.style.display = "flex";
}

function submitForm(){
    const newGame = new Game(title.value, studio.value, hoursPlayed.value);
    addGameToLibrary(newGame);

    displayCards();
    hideForm();


}


function displayCards(){

    content.textContent = "";
    for(let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        card.classList.add("card"); //adds card class to div element
        card.dataset.cardNumber=`${i}`;
        content.appendChild(card);

        const data = document.createElement("div");
        data.classList.add("data");
        card.appendChild(data);

        let dataArray = [ `Title: ${myLibrary[i].title}`,
                        `Studio: ${myLibrary[i].studio}`,
                        `Hours Played: ${myLibrary[i].hoursPlayed}`
                    ];

        for(let j = 0; j < dataArray.length; j++){
            const div = document.createElement("div");
            div.textContent= dataArray[j];
            data.appendChild(div);
        }

    }
}


function hideForm(){
    title.value = "";
    studio.value= "";
    hoursPlayed.value="";


    const form = document.querySelector(".form");
    form.style.display="none";
    
}








