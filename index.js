import Book from './modules/book.js';
import * as nav from './modules/nav.js';



document.getElementById('list').addEventListener('click', nav.listShow);
document.getElementById('addNew').addEventListener('click', nav.addShow);
document.getElementById('contact').addEventListener('click', nav.contactShow);
document.getElementById('logo').addEventListener('click', nav.homePage);

const newBook = new Book();
newBook.displayInfo();
document.getElementById('addButton').addEventListener('click', () => {
  newBook.add();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});