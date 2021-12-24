function Book(title, author, pages, hasRead) {
    (this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.hasRead = hasRead),
        (this.info = function () {
            hasRead = true ? "has read" : "not read yet";
            return `${title} by ${author}, ${pages} pages, ${hasRead}`;
        });
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function createLibrary(row, books) {
    const tbl = document.createElement("table");

    for (i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        tr.setAttribute("id", `row${i + 1}`);

        let td = tr.insertCell();
        td.setAttribute("id", `data${i + 1}`);

        // set book name
        td.textContent = books[i].title;
    }
    return tbl;
}

function addForm() {
    const modal = document.createElement("div");

    modal.setAttribute("id", "modal");

    const form = document.createElement("form");
    form.setAttribute("id", "modal-content");
    form.setAttribute("onsubmit", "submitForm(event)");

    const field1 = document.createElement("div");
    field1.setAttribute("id", "field");

    const field2 = document.createElement("div");
    field2.setAttribute("id", "field");

    const field3 = document.createElement("div");
    field3.setAttribute("id", "field");

    const field4 = document.createElement("div");
    field4.setAttribute("id", "field");

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");

    const author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("id", "author");
    author.setAttribute("name", "author");
    author.setAttribute("placeholder", "Author");

    const pages = document.createElement("input");
    pages.setAttribute("type", "text");
    pages.setAttribute("id", "pages");
    pages.setAttribute("name", "pages");
    pages.setAttribute("placeholder", "Pages");

    const status = document.createElement("input");
    status.setAttribute("type", "text");
    status.setAttribute("id", "status");
    status.setAttribute("name", "status");
    status.setAttribute("placeholder", "Status");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Add Book";

    field1.appendChild(title);
    field2.appendChild(author);
    field3.appendChild(pages);
    field4.appendChild(status);

    form.appendChild(field1);
    form.appendChild(field2);
    form.appendChild(field3);
    form.appendChild(field4);
    form.appendChild(submit);

    modal.appendChild(form);

    return modal;
}

const submitForm = (e) => {
    e.preventDefault(); // when submit form, prevent browser from reloading and losing data

    const form = new FormData(e.target);
    const title = form.get("title");
    const author = form.get("author");
    const pages = form.get("pages");
    const status = form.get("status");

    book = new Book(title, author, pages, status);
    addBooktoLibrary(book);

    modal.style.display = "none"; // remove pop up after adding
};

let myLibrary = [];

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "256", true);
harryPotter = new Book("Harry Potter", "J.K. Rowling", "354", true);
LOTR = new Book("Lord of the Rings", "J.R.R Tolkien", "480", true);

addBooktoLibrary(theHobbit);
addBooktoLibrary(harryPotter);
addBooktoLibrary(LOTR);

const body = document.body;
tbl = createLibrary(myLibrary.length, myLibrary);

// create a button
const bttn = document.createElement("button");
bttn.setAttribute("id", "bttn");
bttn.textContent = "New Book";

// form
modal = addForm();

body.appendChild(tbl);
body.appendChild(bttn);
body.appendChild(modal);

bttn.addEventListener("click", function () {
    modal.style.display = "block"; // pop up like effect
});

// remove the book
function removeBook(tbl) {}
