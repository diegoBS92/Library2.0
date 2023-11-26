
let addBookbtn = document.querySelector('.addBook')
let displayBooks = document.querySelector('.displayBooks')
let table = document.querySelector('.table')

let authorinput = document.getElementById('author')
let titleinput = document.getElementById('title')
let pagesinput = document.getElementById('pages')
let finishedinput = document.getElementById('finished')


const myLibrary = []

function Book(author, title, pages, finished ) {
    this.author = author
    this.title = title
    this.pages = pages
    this.finished = finished

}

function addBook() {
    let author = authorinput.value
    let title = titleinput.value
    let pages = pagesinput.value
    let finished = finishedinput.value
    let book =  new Book(author, title, pages, finished)
    let row = document.createElement('tr')
    
    
    for (let attibute in book) {
        let tabledata = document.createElement('td')
        
        tabledata.textContent = book[attibute]
        
        row.appendChild(tabledata)
    }
    table.appendChild(row)
}

addBookbtn.addEventListener('click', addBook)