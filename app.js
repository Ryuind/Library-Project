let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages, bookRead){
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.bookRead = bookRead

}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function newRender(){
    let para = document.createElement("p");
    let paraTwo = document.createElement("p");
    let paraThree = document.createElement("p");
    let paraFour = document.createElement("p");
    
    let num = myLibrary.length - 1;
    let node = document.createTextNode("\"" + myLibrary[num].bookTitle + "\"");
    para.appendChild(node); 
    let nodeTwo = document.createTextNode("By: " + myLibrary[num].bookAuthor);
    paraTwo.appendChild(nodeTwo); 
    let nodeThree = document.createTextNode("# of pages: " + myLibrary[num].bookPages);
    paraThree.appendChild(nodeThree); 
    let nodeFour = document.createTextNode(myLibrary[num].bookRead);
    paraFour.appendChild(nodeFour); 

    let div = document.createElement("div");
    div.appendChild(para);
    div.appendChild(paraTwo);
    div.appendChild(paraThree);
    div.appendChild(paraFour);

    // stlye the paras
    para.style.margin = "0px 0px 0px 20px"    
    //style the div
    div.style.border = "thick solid gray";
    div.style.backgroundColor = "black";
    div.style.opacity = "0.8";
    div.style.position = "relative"
    div.style.minHeight = "250px"

    //create a Dom delete button
    let deleteButton = document.createElement("button");
        div.appendChild(deleteButton);
    let deleteButtonText = document.createTextNode("Delete this book");
    deleteButton.appendChild(deleteButtonText)

    // button style
    deleteButton.style.margin = "100px 0px 0px 0px"
    deleteButton.style.width = "190px" 
    deleteButton.style.backgroundColor = "orange"
    deleteButton.style.opacity = "0.8"
    deleteButton.style.border = "none"
    deleteButton.style.height = "22px"
    deleteButton.style.position = "absolute";
    deleteButton.style.bottom = "0";

    deleteButton.onclick = function(){
        element.removeChild(div);
    }

    let element = document.querySelector(".say");
    element.appendChild(div);

    let newCheckbox = document.createElement('button')
    div.insertBefore(newCheckbox, paraFour)

    // read button style
    newCheckbox.style.margin = "0px 0px 0px 20px"
    newCheckbox.style.borderRadius = "50%"
    newCheckbox.style.opacity = "0.8"
    newCheckbox.style.float = "left";

    let readButtonText = document.createTextNode("O")
    newCheckbox.appendChild(readButtonText)

    let useThis = true
    if(myLibrary[num].bookRead === "Unread"){    
        useThis = true
        newCheckbox.style.color = "red"
        newCheckbox.style.backgroundColor = "red";
        newCheckbox.style.borderColor = "red"; 
    }
    else {
        useThis = false
        newCheckbox.style.color = "green"
        newCheckbox.style.backgroundColor = "green";
        newCheckbox.style.borderColor = "green";
    }

    let removeOnce = true
    let nodeFive = document.createTextNode("Read");
    let paraFive = document.createElement("p");
    paraFive.appendChild(nodeFive);

    let nodeSix = document.createTextNode("Unread");
    let paraSix = document.createElement("p");
    paraSix.appendChild(nodeSix);

    newCheckbox.onclick = function() {
        if(removeOnce){
            div.removeChild(paraFour)
            removeOnce = false
        }
        if (useThis){
            div.insertBefore(paraFive, deleteButton);
            useThis = false;
            newCheckbox.style.backgroundColor = "green";
            newCheckbox.style.borderColor = "green";
            newCheckbox.style.color = "green"
            div.removeChild(paraSix)
        }
        else {
            useThis = true
            newCheckbox.style.backgroundColor = "red";
            newCheckbox.style.borderColor = "red";   
            newCheckbox.style.color = "red"    
            div.insertBefore(paraSix, deleteButton);
            div.removeChild(paraFive)
        }
    }
}
let form = document.querySelector(".theBtn")
function handleForm(event){event.preventDefault();}
form.addEventListener('click', handleForm);

isRead = function(){
    let checkBox = document.getElementById("userBookReadInput"); 
    if(checkBox.checked == true){
        return "Read"
    }
    else {
        return "Unread"
    }
};

userBook = function(){
    document.querySelector(".myForm").click();
    let userBookTitle = document.querySelector(".userBookTitleInput").value;
    let userBookAuthor = document.querySelector(".userBookAuthorInput").value;
    let userBookPageNumber = document.querySelector(".userBookPagesInput").value;
    let userBookBoolean = isRead();
    addBookToLibrary(new Book(userBookTitle, userBookAuthor, userBookPageNumber, userBookBoolean));
    newRender()
    document.querySelector(".userBookTitleInput").value = "";
    document.querySelector(".userBookAuthorInput").value = "" ;
    document.querySelector(".userBookPagesInput").value = "" ;

}

function buttonFunc() {
    let button = document.querySelector(".theBtn");
    button.addEventListener("click", userBook);

}
buttonFunc();

function openForm(){
    document.querySelector("#loginPopup").style.display="block";
    document.querySelector(".openButton").innerHTML = "";
    document.querySelector(".hone").innerHTML = "Library";
}
function closeForm(){
    document.querySelector("#loginPopup").style.display="none";
    document.querySelector(".openButton").innerHTML = "New Book Form";
}