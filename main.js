
const books = []

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        const info = `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
        return info;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read');
books.push(theHobbit);

const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, 'Read');
books.push(harryPotter)

const theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, 'Read');
books.push(theLordOfTheRings)

const theHungerGames = new Book('The Hunger Games', 'Suzanne Collins', 374, 'Read');
books.push(theHungerGames)


const booksGrid = document.getElementById('booksGrid')
const addBookForm = document.getElementById('addBookForm')
const addBookModal = document.getElementById('addBookModal')
const overlay = document.getElementById('overlay')

const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
  
    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    readBtn.classList.add('card-btn')
    removeBtn.classList.add('card-btn')
    removeBtn.classList.add('btn-remove')

    if (book.isRead) {
      readBtn.textContent = 'Read'
      readBtn.classList.add('btn-light-green')
    } else {
      readBtn.textContent = 'Not Read'
      readBtn.classList.add('btn-light-red')
    }
  
    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'
  
    if (book.read == 'Read') {
      readBtn.textContent = 'Read'
      readBtn.classList.add('btn-light-green')
    } else {
      readBtn.textContent = 'Not Read'
      readBtn.classList.add('btn-light-red')
    }
  
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    booksGrid.appendChild(bookCard)
  }

for (let book of books) {
    createBookCard(book)
} 

const openAddBookModal = () => {
  addBookForm.reset()
  addBookModal.classList.add('active')
  overlay.classList.add('active')
}

const closeAddBookModal = () => {
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
  errorMsg.classList.remove('active')
  errorMsg.textContent = ''
}


addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAddBookModal
