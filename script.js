
let addBookbtn = document.querySelector('.addBook')
let submitbtn = document.querySelector('.submitBook')
let displayBooks = document.querySelector('.displayBooks')
let table = document.querySelector('.table')
let dialog = document.querySelector('.dialog')
let hidebtn = document.querySelector('.hideBooks')

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
    myLibrary.push(book)
    authorinput.value = ''
    titleinput.value = ''
    pagesinput.value = ''
    dialog.close()
}
function displayMyLibrary() {
    table.innerHTML = ''
    let tr = document.createElement('tr')
    let thAuthor = document.createElement('th')
    let thTitle = document.createElement('th')
    let thPages = document.createElement('th')
    let thFinished = document.createElement('th')
    thAuthor.textContent = 'Author'
    thTitle.textContent = 'Title' 
    thPages.textContent ='Pages' 
    thFinished.textContent = 'Have you finised the book?'
    tr.appendChild(thAuthor)
    tr.appendChild(thTitle)
    tr.appendChild(thPages)
    tr.appendChild(thFinished)
    table.appendChild(tr)

    let index = 0
    for (let book of myLibrary ) {
        delete book.index
        let row = document.createElement('tr')
        for (let attibute in book) {
            let tabledata = document.createElement('td')
            tabledata.textContent = book[attibute]
            row.appendChild(tabledata)
        }
        let removebtntd = document.createElement('td')
        let removebtn = document.createElement('button')
        removebtn.textContent= 'remove'
        removebtntd.appendChild(removebtn)
        removebtn.addEventListener('click', ()=> {
            myLibrary.splice(book.index, 1)
            row.remove()
            console.table(myLibrary)
        })
        row.appendChild(removebtntd)
        table.appendChild(row)
        book.index = index
        index ++

    }
    console.table(myLibrary)
    index = 0
    
}

addBookbtn.addEventListener('click', () => {
    dialog.showModal()
    
})
submitbtn.addEventListener('click', addBook)
displayBooks.addEventListener('click', displayMyLibrary)
hidebtn.addEventListener('click', ()=> {
    table.innerHTML = ''

})