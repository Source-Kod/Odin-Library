const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeCards() {
  const cardContainer = document.querySelector('#cardContainer');
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
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
    removeButton.classList = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none';
    readButton.classList = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none';
    card.classList = 'flex flex-col justify-between bg-white border-4 h-1/5 p-3 rounded-lg';

    if (element.read === true) {
      card.classList = 'flex flex-col justify-between bg-white border-4 h-1/5 p-3 rounded-lg border-blue-700';
      readButton.textContent = 'Mark Unread';
    }

    // events for buttons
    removeButton.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(element), 1);
      removeCards();
      createCards();
    });

    readButton.addEventListener('click', () => {
      element.read = !element.read;
      removeCards();
      createCards();
    });
  });
}

function createEvents() {
  const addBookButton = document.querySelector('#addBook');
  addBookButton.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#readToggle');
    const currentBook = new Book(title, author, pages, read.checked);

    addBookToLibrary(currentBook);
    removeCards();
    createCards();
  });
}

createEvents();
createCards();
