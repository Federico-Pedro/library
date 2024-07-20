const myLibrary = [];

const cardContainer = document.getElementById("card-container");
const tit = document.getElementById("title");
const au = document.getElementById("author");
const pag = document.getElementById("pages");
const red = document.getElementById("read");    
const lang = document.getElementById("language");

// the constructor
function Book(author, title, pages, read, language) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.language = language;
}

function addBookToLibrary() {
  clearContainer();
  createBook();
  clearForm();
  createCard();
}

function createBook() {
  const title = tit.value;
  const author = au.value;
  const pages = pag.value;
  const read = red.checked;    
  const language = lang.value;
  const item = new Book(author, title, pages, read, language);
  
  myLibrary.push(item);
  console.table(myLibrary)
  
}

function clearForm(){
  tit.value = '';
  au.value = '';
  pag.value = '';
  red.checked = red.unchecked;
  lang.value = '';
}

function createCard(){
  
  for(let i = 0; i < myLibrary.length; i++){
  const card = document.createElement("div");
  card.classList.add("card");
  const cardTitle = document.createElement("div");
  cardTitle.innerText = "Title: " + myLibrary[i].title;
  card.appendChild(cardTitle);
  const cardAuthor = document.createElement("div");
  cardAuthor.innerText = "Author: " + myLibrary[i].author;
  card.appendChild(cardAuthor);
  const cardPages = document.createElement("div");
  cardPages.innerText = "Pages: " + myLibrary[i].pages;
  card.appendChild(cardPages);
  const cardLang = document.createElement("div");
  cardLang.innerText = "Language: " + myLibrary[i].language;
  card.appendChild(cardLang);
  const cardRead = document.createElement("div");
  if (myLibrary[i].read){
  cardRead.innerText = "Already read";
} else {
    cardRead.innerText = "Still unread";
  }
  card.appendChild(cardRead);
  cardContainer.appendChild(card); 
  }
  
  };

  //Empty Container
function clearContainer(){
  cardContainer.innerHTML = '';
}



//Button
const addButton = document.getElementById("add");
addButton.addEventListener('click', () => addBookToLibrary());