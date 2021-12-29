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

function addNewBook() {
    let bttn = document.createElement("button");
    bttn.setAttribute("id", "new-bttn");
    bttn.textContent = "New Book";

    bttn.addEventListener("click", function () {
        modal.style.display = "block"; // pop up like effect
    });

    return bttn;
}

function createLibrary(row, books) {
    const body = document.body;
    const tbl = document.createElement("table");
    tbl.setAttribute("id", "tbl");

    for (i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        tr.setAttribute("id", `row${i + 1}`);

        let td = tr.insertCell();
        td.setAttribute("id", `data-${i + 1}`);
        td.setAttribute("class", "tblData");

        // add button to remove books from the list
        let bttn = document.createElement("button");
        bttn.setAttribute("id", `data-${i + 1}`);
        bttn.setAttribute("class", "removeBttn");
        bttn.textContent = "Remove Book";

        // add button to edit read status
        let readBttn = document.createElement("button");
        readBttn.setAttribute("id", `data-${i + 1}`);
        readBttn.setAttribute("class", "readBttn");
        readBttn.textContent = "Edit Read Status";

        // set book name
        td.textContent = books[i].title;
        tr.appendChild(bttn);
        tr.appendChild(readBttn);
    }

    let newBttn = addNewBook();

    body.appendChild(tbl);
    body.append(newBttn);
}

function addBooktoLibrary(book, lib) {
    lib.push(book);

    let tbl = document.querySelector("#tbl");
    let bttn = document.querySelector("#new-bttn");
    tbl.remove();
    bttn.remove();

    createLibrary(lib.length, lib);
}

function removeBook(lib) {
    let removeBttn = document.querySelectorAll(".removeBttn");
    removeBttn.forEach((bttn) =>
        bttn.addEventListener("click", (e) => {
            let td = document.querySelector(`.tblData#${e.target.id}`);
            lib.splice(
                lib.findIndex((el) => el.title === td.textContent),
                1
            );

            // update library
            td.parentNode.remove();
        })
    );
}

function editReadStatus(lib) {
    let readBttn = document.querySelectorAll(".readBttn");
    readBttn.forEach((bttn) =>
        bttn.addEventListener("click", (e) => {
            let td = document.querySelector(`.tblData#${e.target.id}`);
            let idx = lib.findIndex((el) => el.title === td.textContent);
            lib[idx].hasRead = !lib[idx].hasRead;
        })
    );
}

function addForm() {
    const body = document.body;
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

    const hasRead = document.createElement("input");
    hasRead.setAttribute("type", "text");
    hasRead.setAttribute("id", "hasRead");
    hasRead.setAttribute("name", "hasRead");
    hasRead.setAttribute("placeholder", "Has Read? (Y/N)");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Add Book";

    field1.appendChild(title);
    field2.appendChild(author);
    field3.appendChild(pages);
    field4.appendChild(hasRead);

    form.appendChild(field1);
    form.appendChild(field2);
    form.appendChild(field3);
    form.appendChild(field4);
    form.appendChild(submit);

    modal.appendChild(form);
    body.appendChild(modal);
}

const submitForm = (e) => {
    e.preventDefault(); // when submit form, prevent browser from reloading and losing data

    const form = new FormData(e.target);
    const title = form.get("title");
    const author = form.get("author");
    const pages = form.get("pages");
    const status = form.get("hasRead") == "Y" ? true : false;

    book = new Book(title, author, pages, status);

    addBooktoLibrary(book, myLibrary);
    removeBook(myLibrary);
    editReadStatus(myLibrary);
    addNewBook();

    modal.style.display = "none"; // remove pop up after adding
    e.target.reset();
};

// adding books for test purposes
var myLibrary = [];
LOTR = new Book("Lord of the Rings", "J.R.R Tolkien", "450", true);
HarryPotter = new Book("Harry Potter", "J.K.Rowling", "530", true);
TheHobbit = new Book("The Hobbit", "J.R.R Tolkien", "540", false);

myLibrary.push(LOTR);
myLibrary.push(HarryPotter);
myLibrary.push(TheHobbit);

// execute
createLibrary(myLibrary.length, myLibrary);
addForm(); // add form in the beginning. After each form submission submitForm function is fired.
removeBook(myLibrary);
editReadStatus(myLibrary);
