const myLibrary = [
  {
    title: 'ted laso',
    author: 'bbg',
    pages: 12,
    read: true,
  },
  {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    pages: 500,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createCards() {
  myLibrary.forEach((element) => {
    const cardContainer = document.querySelector('#cardContainer');
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const buttonContainer = document.createElement('div');
    const infoContainer = document.createElement('div');

    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(readButton);

    infoContainer.appendChild(title);
    infoContainer.appendChild(author);
    infoContainer.appendChild(pages);

    card.appendChild(infoContainer);
    card.appendChild(buttonContainer);

    title.textContent = `Title: ${element.title}`;
    author.textContent = `Author: ${element.author}`;
    pages.textContent = `Pages: ${element.pages}`;
    readButton.textContent = 'Mark Read';
    removeButton.textContent = 'Remove';

    cardContainer.appendChild(card);

    // add css
    infoContainer.classList = 'flex flex-col gap-1';
    buttonContainer.classList = 'flex justify-between';
    card.classList = 'flex flex-col justify-between bg-white border-2 h-1/5 p-3 rounded-lg';
  });
}

function removeCards() {
  const cardContainer = document.querySelector('#cardContainer');
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

function createEvents() {
  const addBookButton = document.querySelector('#addBook');
  addBookButton.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#readToggle');
    const currentBook = new Book(title, author, pages, read);

    addBookToLibrary(currentBook);
    removeCards();
    createCards();
  });
}

createEvents();
createCards();
