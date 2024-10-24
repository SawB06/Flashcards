const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
let flashcardsCount = flashcards.length;
// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let cardText = document.getElementById("card-content");
    cardText.innerText = flashcards[currentIndex].term;
}

// The rest of the code you will write is apart of event listeners

function change(x){
    currentIndex += x;
    if (currentIndex >= flashcardsCount) {
        currentIndex = 0; 
    } else if (currentIndex < 0) {
        currentIndex = flashcardsCount - 1;
    }
    displayCard();
}
   
let next = document.getElementById("next-btn")
next.addEventListener("click", ()=> change(1));

let prev = document.getElementById("prev-btn")
prev.addEventListener("click", ()=> change(-1))

let flashcard=document.getElementById("flashcard");
flashcard.addEventListener("click", ()=> {
    let cardText = document.getElementById("card-content");
    if(showingTerm){
        cardText.innerText = flashcards[currentIndex].definition;
        showingTerm=false;
    }
    else{
        displayCard();
        showingTerm=true;
    }
});

let add = document.getElementById("add-card-btn");
add.addEventListener("click", ()=>{
    flashcards.push({ term: document.getElementById('new-term').value
    , definition: document.getElementById('new-definition').value});
    flashcardsCount++;
    document.getElementById('new-term').value = ''; 
    document.getElementById('new-definition').value = ''; 
    currentIndex = flashcardsCount - 1;
    displayCard(); 
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
