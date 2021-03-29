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
// add a listner at each removeBtn that if that btn's parentnode is the same index as the child of book section, remove it
function quitBook() {
    const rmBtnsInD = document.querySelectorAll('.removeBtn');
    const secPar = document.querySelector('#userAddedBooks');
    for (let i = 0; i < rmBtnsInD.length; i++) {
        rmBtnsInD[i].addEventListener('click', () => {
            if (rmBtnsInD[i].parentNode === secPar.children[i]) {
                bookLibrary.splice(0, 1);
                rmBtnsInD[i].parentNode.remove();
            }
            else {
                return
            }
        })
    }
}
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
    bookUl.classList.add("addedChildBook");
    userBooksParent.prepend(bookUl);
    let oddBtnTopValue = 9.2;
    let evenBtnTopValue = 9.2;
    for (let i of bookLibrary) {
        const liBtn = document.createElement('button');
        liBtn.classList.add('removeBtn');
        const liBtn2 = document.createElement('button');
        liBtn2.classList.add("notReadBtn");
        liBtn.textContent = "Remove";
        liBtn2.textContent = "Read?";
        bookUl.innerHTML = `Title: ${i.title} <br>Author: ${i.author} <br>Pages: ${i.pages} pages <br> Completed? ${i.recommend}`;
        bookUl.insertAdjacentElement('beforeend', liBtn);
        bookUl.insertAdjacentElement('beforeend', liBtn2);
        bookUl.style.border = "solid 0.2px";
        bookUl.setAttribute('id', `theBookNum${bookLibrary.length - 1}`);
        addGridColumns();
        //odd right side btns
        if (bookLibrary.indexOf(i) % 2 != 0) {
            //first right side book
            if (bookLibrary.indexOf(i) == 1) {
                liBtn.style.right = "20em";
                liBtn.style.top = `${oddBtnTopValue}em`;
                liBtn2.style.top = `${oddBtnTopValue + 1.9}em`;
                liBtn2.style.right = "20em";
                oddBtnTopValue += 7;
            }
            //other right side books
            else {
                liBtn.style.top = `${oddBtnTopValue + 1}em`;
                liBtn.style.right = "20em";
                liBtn2.style.top = `${oddBtnTopValue + 2.9}em`;
                liBtn2.style.right = "20em"
                oddBtnTopValue += 7;
            }
        }
        //even left side btns
        else {
            liBtn.style.left = "37.7em";
            liBtn.style.top = `${evenBtnTopValue}em`;
            liBtn2.style.left = "37.7em";
            liBtn2.style.top = `${evenBtnTopValue + 1.9}em`;
            evenBtnTopValue += 8.2;
        }
    }
    quitBook();
}
buttonBehaivor()
function addGridColumns() {
    const bookUl = document.querySelector(".addedChildBook");
    const userBooksParent = document.getElementById("userAddedBooks");
    if (bookUl.children.length == 0) {
        return
    }
    else {
        userBooksParent.style.display = "grid"
        userBooksParent.style.gridTemplateColumns = "20em 20em";
        userBooksParent.style.border = "solid 2px"
    }
}