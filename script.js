const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createCards(myLibrary) {
  myLibrary.forEach((element) => {
    const cardContainer = document.querySelector('#cardContainer');
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    title.textContent = element.title;
    author.textContent = element.author;
    pages.textContent = element.pages;

    cardContainer.appendChild(card);
    card.classList = 'bg-fuchsia-400';
  });
}

const currentBook = new Book('Harry Potter', 'J.K Rowling', 500);
addBookToLibrary(currentBook);
createCards(myLibrary);

// console.table(myLibrary);
