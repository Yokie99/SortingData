import { createField, sortByFirstName, sortByLastName, sortByAge, sortByEmail, sortByHeight, sortByID, resetPage } from "./functions.js";

let append1 = document.getElementById('append1');
let append2 = document.getElementById('append2');
let append3 = document.getElementById('append3');
let append4 = document.getElementById('append4');
let append5 = document.getElementById('append5');

let tenBtn = document.getElementById('tenBtn');
let twentyBtn = document.getElementById('twentyBtn');
let thirtyBtn = document.getElementById('thirtyBtn');
let fortyBtn = document.getElementById('fortyBtn');
let fiftyBtn = document.getElementById('fiftyBtn');

let prevArrow = document.getElementById('prevArrow');
let pageNum = document.getElementById('pageNum');
let nextArrow = document.getElementById('nextArrow');


let idBtn = document.getElementById('idBtn');
let fnameBtn = document.getElementById('fnameBtn');
let lnameBtn = document.getElementById('lnameBtn');
let heightBtn = document.getElementById('heightBtn');
let ageBtn = document.getElementById('ageBtn');

let ascBtn = document.getElementById('ascBtn');
let descBtn = document.getElementById('descBtn');
let dropdownDefaultButton = document.getElementById('dropdownDefaultButton');


let appendCounter = 1;
let order = true;
let sortType = 'id';
let page10 = true;
let page20 = true;
let page30 = true;
let page40 = true;
let page50 = true;
let pageTotal;

tenBtn.addEventListener('click', () => {
    page10 = true;
    page20 = false;
    page30 = false;
    page40 = false;
    page50 = false;
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }
    append2.textContent = ""
    append3.textContent = ""
    append4.textContent = ""
    append5.textContent = ""
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter = 1;
    pageNum.textContent = "Page 1"
    pageTotal = 10;
})
twentyBtn.addEventListener('click', () => {
    page10 = true;
    page20 = true;
    page30 = false;
    page40 = false;
    page50 = false;
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }
    append3.textContent = ""
    append4.textContent = ""
    append5.textContent = ""
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter = 1;
    pageNum.textContent = "Page 1"
    pageTotal = 20;
})
thirtyBtn.addEventListener('click', () => {
    page10 = true;
    page20 = true;
    page30 = true;
    page40 = false;
    page50 = false;
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }


    append4.textContent = ""
    append5.textContent = ""
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter = 1;
    pageNum.textContent = "Page 1"
    pageTotal = 30;
})
fortyBtn.addEventListener('click', () => {
    page10 = true;
    page20 = true;
    page30 = true;
    page40 = true;
    page50 = false;
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }
    append5.textContent = ""
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter = 1;
    pageNum.textContent = "Page 1"
    pageTotal = 40;
})
fiftyBtn.addEventListener('click', () => {
    page10 = true;
    page20 = true;
    page30 = true;
    page40 = true;
    page50 = true;
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter = 1;
    pageNum.textContent = "Page 1"
    pageTotal = 10;
})


ascBtn.addEventListener('click', () => {
    order = true;
    const textNode = dropdownDefaultButton.firstChild;
    textNode.textContent = "Ascending";
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }
})
descBtn.addEventListener('click', () => {
    order = false;
    const textNode = dropdownDefaultButton.firstChild;
    textNode.textContent = "Descending";
    switch (sortType) {
        case 'id':
            sortByID(data, order);
            resetPage();
            createField(data);
            sortType = 'id';
            break;
        case 'firstname':
            sortByFirstName(data, order);
            resetPage();
            createField(data);
            sortType = 'firstname';
            break;
        case 'lastname':
            sortByLastName(data, order);
            resetPage();
            createField(data);
            sortType = 'lastname';
            break;
        case 'height':
            sortByHeight(data, order);
            resetPage();
            createField(data);
            sortType = 'height';
            break;
        case 'age':
            sortByAge(data, order);
            resetPage();
            createField(data);
            sortType = 'age';
            break;
        default:
            break;

    }

})

nextArrow.addEventListener('click', () => {
    
    
    if (appendCounter == 4 && page50) {
        append1.className = "hidden"
        append2.className = "hidden"
        append3.className = "hidden"
        append4.className = "hidden"
        append5.className = ""
        pageNum.textContent = "Page 5"
        appendCounter++;
    }
    
    if (appendCounter == 3 && page40) {
        append1.className = "hidden"
        append2.className = "hidden"
        append3.className = "hidden"
        append4.className = ""
        append5.className = "hidden"
        appendCounter++;
        pageNum.textContent = "Page 4"
    }
    
    if (appendCounter == 2 && page30) {
        append1.className = "hidden"
        append2.className = "hidden"
        append3.className = ""
        append4.className = "hidden"
        append5.className = "hidden"
        appendCounter++;
        pageNum.textContent = "Page 3"
    }
    if (appendCounter == 1 && page20) {
        append1.className = "hidden"
        append2.className = ""
        append3.className = "hidden"
        append4.className = "hidden"
        append5.className = "hidden"
        appendCounter++;
        pageNum.textContent = "Page 2"
    }
    
    


})
prevArrow.addEventListener('click', () => {

if (appendCounter == 2 && page10) {
    append1.className = ""
    append2.className = "hidden"
    append3.className = "hidden"
    append4.className = "hidden"
    append5.className = "hidden"
    appendCounter--;
    pageNum.textContent = "Page 1"
    }

    if (appendCounter == 3 && page20) {
        append1.className = "hidden"
            append2.className = ""
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter--;
            pageNum.textContent = "Page 2"
    }
    if (appendCounter == 4 && page30) {
        append1.className = "hidden"
        append2.className = "hidden"
        append3.className = ""
        append4.className = "hidden"
        append5.className = "hidden"
        pageNum.textContent = "Page 3"
        appendCounter--;
    }    
    if (appendCounter == 5 && page40) {
        append1.className = "hidden"
        append2.className = "hidden"
        append3.className = "hidden"
        append4.className = ""
        append5.className = "hidden"
        pageNum.textContent = "Page 4"
        appendCounter--;
    }

})

idBtn.addEventListener('click', () => {
    sortByID(data, order);
    resetPage();
    createField(data);
    sortType = 'id';
    switch (pageTotal) {
        case 10:
            append2.textContent = ""
            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 10;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 20:

            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 20;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 30:

            
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 30;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 40:

            
            append5.textContent = ""
            pageTotal = 40;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 50:
            pageTotal = 50;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
    }
})
fnameBtn.addEventListener('click', () => {
    sortByFirstName(data, order);
    resetPage();
    createField(data);
    sortType = 'firstname';
    switch (pageTotal) {
        case 10:
            append2.textContent = ""
            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 10;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 20:

            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 20;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 30:

            
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 30;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 40:

            
            append5.textContent = ""
            pageTotal = 40;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 50:
            pageTotal = 50;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
    }
})
lnameBtn.addEventListener('click', () => {
    sortByLastName(data, order);
    resetPage();
    createField(data);
    sortType = 'lastname';
    switch (pageTotal) {
        case 10:
            append2.textContent = ""
            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 10;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 20:

            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 20;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 30:

            
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 30;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 40:

            
            append5.textContent = ""
            pageTotal = 40;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 50:
            pageTotal = 50;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
    }
})
ageBtn.addEventListener('click', () => {
    sortByAge(data, order);
    resetPage();
    createField(data);
    sortType = 'age';
    switch (pageTotal) {
        case 10:
            append2.textContent = ""
            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 10;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 20:

            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 20;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 30:

            
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 30;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 40:

            
            append5.textContent = ""
            pageTotal = 40;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 50:
            pageTotal = 50;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
    }
})
heightBtn.addEventListener('click', () => {
    sortByHeight(data, order);
    resetPage();
    createField(data);
    sortType = 'height';
    switch (pageTotal) {
        case 10:
            append2.textContent = ""
            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 10;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 20:

            append3.textContent = ""
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 20;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 30:

            
            append4.textContent = ""
            append5.textContent = ""
            pageTotal = 30;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 40:

            
            append5.textContent = ""
            pageTotal = 40;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
        case 50:
            pageTotal = 50;
            append1.className = ""
            append2.className = "hidden"
            append3.className = "hidden"
            append4.className = "hidden"
            append5.className = "hidden"
            appendCounter = 1;
            pageNum.textContent = "Page 1"
            break;
    }
})
const getData = async () => {
    const promise = await fetch('../data/data.json');
    const person = await promise.json();
    return person;

}
let data = await getData();
console.log(data);


// sortByLastName(data);
// sortByFirstName(data);
// console.log(data.People);
// createField(data);

