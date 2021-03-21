let main = document.querySelector('main');
let bookLibrary = [];
let manageBookFuncs = {
    init: function (title, author, pages, recommend) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.recommend = recommend;
    },
    addBookToLibrary: function () {
        bookLibrary.push({
            title: this.title,
            author: this.author,
            pages: this.pages,
            recommend: this.recommend
        });
    }
}
// push to bring form up when clicking "Add new book" btn
function buttonBehaivor() {
    const btn = document.querySelector("button");
    const elem = document.getElementById("formSec");
    btn.addEventListener('click', () => {
        if (elem.hidden == true) {
            elem.hidden = false;
        }
        else if (elem.hidden == false) {
            var bookTitle = document.getElementById('bookTitle');
            var bookAuthor = document.getElementById('bookAuthor');
            var pageNumber = document.getElementById('pageNumberInput');
            var recommendOrNot = document.getElementById('recommendOrNot');
            if (bookTitle.value == '' || bookAuthor == '' || pageNumber == '') {
                alert("Please fill out all the fields");
                return;
            }
            let Bar = Object.create(manageBookFuncs);
            Bar.init(bookTitle.value, bookAuthor.value, pageNumber.value, recommendOrNot.checked);
            Bar.addBookToLibrary();
            bookTitle.value = '';
            bookAuthor.value = '';
            pageNumber.value = '';
            recommendOrNot.checked = false;
            loopAndAddBooks();
        }
    })
};
//loop through array and print each obj in page
function loopAndAddBooks() {
    //! section of the overall list in html
    const userBooksParent = document.querySelector("#userAddedBooks");
    //! parent UL item, each book is an UL item
    const bookUl = document.createElement('ul');
    bookUl.classList.add("addedChildBook"); //? parent UL item css
    userBooksParent.prepend(bookUl);
    let oddBtnTopValue = 9.2;
    let evenBtnTopValue = 9.2;
    for (let i of bookLibrary) {
        let cIndex = bookLibrary.indexOf(i);
        const liBtn = document.createElement('button');
        const liBtn2 = document.createElement('button');
        bookUl.innerHTML = `${i.title} <br> ${i.author} <br> ${i.pages} pages <br> Recommned? ${i.recommend}`;
        bookUl.style.border = "solid 0.2px";;
        liBtn2.classList.add("notRead");
        liBtn.textContent = "Remove";
        liBtn2.textContent = "Done reading?";
        addGridColumns();
        //delete the additional book slot
        if (bookLibrary.some((obj) => obj.title === i.title)) {
            bookLibrary.splice(cIndex, 1)
        }
        //odd remove li btns
        if (bookLibrary.indexOf(i) % 2 != 0) {
            if (bookLibrary.indexOf(i) == 1) {
                liBtn.style.right = "22.5em";
                liBtn.style.top = `${oddBtnTopValue}em`;
                oddBtnTopValue += 7;
            }
            else {
                liBtn.style.top = `${oddBtnTopValue}em`;
                liBtn.style.right = "22.5em";
                oddBtnTopValue += 7;
            }
        }
        // even remove li btns
        else if (bookLibrary.indexOf(i) % 2 == 0) {
            if (bookLibrary.indexOf(i) === 0) {
                liBtn.style.left = "42.6em";
                liBtn.style.top = `${evenBtnTopValue}em`;
                evenBtnTopValue += 7;
            }
            else {
                liBtn.style.left = "42.6em";
                liBtn.style.top = `${evenBtnTopValue}em`;
                evenBtnTopValue += 7;
            }
        }
    }
}
buttonBehaivor();
function addGridColumns() {
    const bookUl = document.querySelector(".addedChildBook");
    const userBooksParent = document.getElementById("userAddedBooks");
    if (bookUl.children.length == 0) {
        return
    }
    else if (bookUl.children.length > 1) {
        bookUl.style.gridTemplateColumns = "20em";
        userBooksParent.style.border = "solid 2px";
    }
    else {
        bookUl.style.gridTemplateColumns = "20em";
        userBooksParent.style.border = "solid 2px"
    }
}