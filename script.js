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
  
  if(tit.value == ''){
    alert("You need to enter your book's title");
    return;
  } else {
  myLibrary.push(item);
  console.table(myLibrary)
  };
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
    cardTitle.classList.add("card-cathegory");
    const title = document.createElement("div");
    title.classList.add("bold");
    title.innerText = "Title:  ";
    cardTitle.appendChild(title);
    const titleInput = document.createElement("div");
    titleInput.innerText = myLibrary[i].title;
    cardTitle.appendChild(titleInput);
    card.appendChild(cardTitle);

    const cardAuthor = document.createElement("div");
    cardAuthor.classList.add("card-cathegory");
    const autor = document.createElement("div");
    autor.classList.add("bold");
    autor.innerText = "Author:  ";
    cardAuthor.appendChild(autor);
    const authorInput = document.createElement("div");
    authorInput.innerText = myLibrary[i].author;
    cardAuthor.appendChild(authorInput);
    card.appendChild(cardAuthor);

    const cardPages = document.createElement("div");
    cardPages.classList.add("card-cathegory");
    const pages = document.createElement("div");
    pages.classList.add("bold");
    pages.innerText = "Pages: ";
    cardPages.appendChild(pages);
    const pagesInput = document.createElement("div");
    pagesInput.innerText = myLibrary[i].pages;
    cardPages.appendChild(pagesInput);
    card.appendChild(cardPages);

    const cardLang = document.createElement("div");
    cardLang.classList.add("card-cathegory");
    const language = document.createElement("div");
    language.classList.add("bold");
    language.innerText = "Author: ";
    cardLang.appendChild(language);
    const langInput = document.createElement("div");
    langInput.innerText = myLibrary[i].language;
    cardLang.appendChild(langInput);
    card.appendChild(cardLang);

    const cardRead = document.createElement("div");
      if (myLibrary[i].read){
        cardRead.innerText = "Already read";
        cardRead.classList.add("alreadyRead");
      } else {
          cardRead.innerText = "Still unread";
          cardRead.classList.add("unread");
    }
  card.appendChild(cardRead);
  
  
  //REMOVE BUTTON
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.innerText = "Remove";
  card.appendChild(removeButton);
  removeButton.addEventListener('click', function(){
    myLibrary.splice(i, 1);
    clearContainer();
    createCard();
  }  );  

  //TOGGLE BETWEEN READ/UNREAD
  const readButton = document.createElement("button");
  readButton.classList.add("readButton");
  readButton.innerText = "Read/Unread";
  card.appendChild(readButton);

  readButton.addEventListener('click', function(){
    if (cardRead.innerText === "Already read") {
      cardRead.innerText = "Still unread";
      cardRead.classList.remove("alreadyRead");
      cardRead.classList.add("unread");
    } else {
      cardRead.innerText = "Already read";
      cardRead.classList.remove("unread");
      cardRead.classList.add("alreadyRead");
    };
  })

  cardContainer.appendChild(card); 
  }
    };

  



  //EMPTY CONTAINER
function clearContainer(){
  cardContainer.innerHTML = '';
}



//Button
const addButton = document.getElementById("add");
addButton.addEventListener('click', () => addBookToLibrary());