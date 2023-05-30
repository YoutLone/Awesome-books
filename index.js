const books = JSON.parse(localStorage.getItem('bookCollection')) || [];

function displayBooks() {
  const bookList = document.getElementById('books');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span> ${book.title} </span><br>
        <span> ${book.author} </span><br><br>
        <button onclick="removeBook(${index})">Remove</button><hr>
        `;
    bookList.appendChild(listItem);
  });
}

function addBook() {
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    const book = { title, author };
    books.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(books));

    displayBooks();

    titleInput.value = '';
    authorInput.value = '';
  }
}
/* eslint-disable */
function removeBook(index) {
/* eslint-disable */
  if (index >= 0 && index < books.length) {
    books.splice(index, 1);
    localStorage.setItem('bookCollection', JSON.stringify(books));

    displayBooks();
  }
}

document.getElementById('add-button').addEventListener('click', addBook);

displayBooks();

