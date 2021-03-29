### Init function in manageBooksFunc

Inspiration taken from [Kyle Simpson's article on object deconstruction](https://davidwalsh.name/javascript-objects-deconstruction)

Booklibrary
(Started these notes late)

#### 03/16/2021

- newLi is being added to an with no need to the section container userBookParent then a UL item is being added for each book, mainChildBookList \* changed the name of mainChildBookList to bookUl for clarity. There was no css to change regarding this
- I'm thinking there is no need to have <li>s
- Went back to keeping the li items
  -Remove btn was on the right, checking, which is liBtn, I removed the classList addition line that added the index to it
  -There is an two bookUl elements in the section element \* added func loopAndAddBooks to in the scope of the else if statement of btn event listener
- everytime program loops, it adds the book with the li and an extra book with nothing as empty space
  \*it's not that it adds another space, but because in the addGridColumns func, the number of books in the html, bookUl, is triggering the else if statement, and adds two columns without adding anything to the second column
- deleted the 2nd column in gridTemplateColumns, having many conditionals seems redundant now, will alter them to see what is the current book and its index and adjust its position with css

#### 03/17/2021

-fixing the css that have grid
_ i don't want the display to be grid on Uls, but on the section instead.
_ so in the JS file, inside the loopAndAddBooks function definition, remove bookUl style display — grid.
#####03/19/21

- commented out the newLi innerhtml and the newLi style border and added those things to bookUl.
- fully deleted the newLi definition and its components
  stayed at adding grid css to parent userAddedBooks , the section element

##### 03/21/21

-on the conditions of the addGridColumn, deleted the else if condition and replaced the bookUl style method and added the userBookParent, which is the section, and also added display grid to section
-deleted the extra css for bookUl inside section
-add class to the middle grid column to add space between them
-add a gap on the parent userBookParent instead
-remove li tags from html
-added the respective text in innerHTML of bookUl
-time to add the liBtn and liBtn2. They're already created the element, just matter of adding them

##### 03/22/21

-every time loopAndBoooks func loops, it creates the pair of buttons liBtn and liBtn2 and stacks them.
_ first step: make them not be created in the loop
_ fix the conditional for the btns
_ i just commented out the splicing of conditional and it fixed the btns
-change the btns to be inside the bookUl box to the rightside
_ change the even (left side)liBtn styles to 37.7em and eventBtnTop Value to 8.2em
_ change the doneReading btn to be below remove btn
_ added insertAdjacentElem method with before end , now just need to fix the styles for liBtn2
_ on style.top for liBtn2 , added 1.9.
_ commented out the else statement from even remove libtns conditional. Didn't change anything
\*just used else if statement to an else and deleted the condition, much cleaner
-change the even btns (right side) styles
-stayed at fixing the right side btns alignment
-done fixing right side btns alignment

##### 3/23/2021

-change the recommend input in book display to completed and change text content of done reading btn to read
-align the checkbox with recommend? label
_ add a css selector that selects for type. use brackets. and change width of the input so that it doesn't wrap
-add listener to have the corresponding book deleted
_ add class lists to each book so that a function that hasn't been created will remove them from the display \* add hidden attribute with setAttribute, in the for loop in loopAndAddBooks

##### 3/24/21

-after adding the listener to hide book, buttons are not aligned.
-try using method splice to remove obj from bookLibrary
-try using a function in the ori obj
-on each iteration, add an id with the book's index in bookLibrary
_adding listener to liBtn when clicked
_ working with adding a class , exist that if not there, would be deleted with splice method using its index gotten with the id \* add logic to the removeBoook to take in two parameters, a btn parameter, which will be in the scope of addLoops func but inside buttonBehaivor (liBtn) by using call method and an index of the book to splice, which is going to be defined

##### 3/27/21

-breakthrough, use querySelectorAll method on a variable that has querySelector defined.
-can use remove() method on node child to remove from the HTML list \* define an element that has a certain parent, and that element will be deleted if the parent meets certain standard. looking on using closest method on the open mdn page

- selector on querySelector that just selects the class of the btn i want
  -breakthrough, added quitBook function and define variable that selects closest parent element "stemming" from each removeBtn.
  -used .remove method on the latter
  -removed the removeBook function within manageBookFunc object, no use
  -curr, try figure out how to make the relationship between the removeBtn clicked and the node on which said button is, and delete that.

##### 03/28/2021

- the relationship between the parentnode of the button clicked… and trying to figure out the other part of this relationship…
  \*added a comment on quitBook function explaining
- the button is misaligned whenever
  _the book library array still has the object even though it was removed in the display , delete it
  _ didn't fix the positioning of the btns, must be in the looping of the addingColumns function
  _ i can add a condition that when a book from bookLibrary array is removed, to return immediately
  -fnd out that the first two books, when removed, have the funny button positions
  _ in fact, the first two books' buttons are in the opposite books place, fix that
