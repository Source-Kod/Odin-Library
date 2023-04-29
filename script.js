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

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readButton);
    card.appendChild(removeButton);

    title.textContent = element.title;
    author.textContent = element.author;
    pages.textContent = element.pages;
    readButton.textContent = 'Mark Read';
    removeButton.textContent = 'Remove';

    cardContainer.appendChild(card);
    card.classList = 'flex flex-col items-center bg-fuchsia-400 border-2 h-1/5';
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
