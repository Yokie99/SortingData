function createPerson(id, fname, lname, email, height, age) {
    // Create the main div element
    var gridDiv = document.createElement('div');
    gridDiv.classList.add('grid', 'grid-cols-7', 'border-b-4', 'border-solid', 'border-black');

    // Create and append each child div element
    var div1 = document.createElement('div');
    div1.classList.add('flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black', 'py-2');
    var p1 = document.createElement('p');
    p1.textContent = id;
    div1.appendChild(p1);
    gridDiv.appendChild(div1);

    var div2 = document.createElement('div');
    div2.classList.add('flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black');
    var p2 = document.createElement('p');
    p2.textContent = fname;
    div2.appendChild(p2);
    gridDiv.appendChild(div2);

    var div3 = document.createElement('div');
    div3.classList.add('flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black');
    var p3 = document.createElement('p');
    p3.textContent = lname;
    div3.appendChild(p3);
    gridDiv.appendChild(div3);

    var div4 = document.createElement('div');
    div4.classList.add('col-span-2', 'flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black');
    var p4 = document.createElement('p');
    p4.textContent = email;
    div4.appendChild(p4);
    gridDiv.appendChild(div4);

    var div5 = document.createElement('div');
    div5.classList.add('flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black');
    var p5 = document.createElement('p');
    p5.textContent = height;
    div5.appendChild(p5);
    gridDiv.appendChild(div5);

    var div6 = document.createElement('div');
    div6.classList.add('flex', 'justify-center', 'items-center', 'text-2xl', 'border-e-4', 'border-solid', 'border-black');
    var p6 = document.createElement('p');
    p6.textContent = age;
    div6.appendChild(p6);
    gridDiv.appendChild(div6);

    return gridDiv;
}

function sortByLastName(data, order) {
    if (order) {
        data.People.sort((a, b) => {
            const lastNameA = a.LastName.toUpperCase();
            const lastNameB = b.LastName.toUpperCase();
            if (lastNameA < lastNameB) {
                return -1;
            }
            if (lastNameA > lastNameB) {
                return 1;
            }
            return 0;
        });
    }
    else {
        data.People.sort((a, b) => {
            const lastNameA = a.LastName.toUpperCase();
            const lastNameB = b.LastName.toUpperCase();
            if (lastNameA > lastNameB) {
                return -1;
            }
            if (lastNameA < lastNameB) {
                return 1;
            }
            return 0;
        });
    }

}
function sortByFirstName(data, order) {
    if (order) {
        data.People.sort((a, b) => {
            const NameA = a.FirstName.toUpperCase();
            const NameB = b.FirstName.toUpperCase();
            if (NameA < NameB) {
                return -1;
            }
            if (NameA > NameB) {
                return 1;
            }
            return 0;
        });
    }
    else {
        data.People.sort((a, b) => {
            const NameA = a.FirstName.toUpperCase();
            const NameB = b.FirstName.toUpperCase();
            if (NameA > NameB) {
                return -1;
            }
            if (NameA < NameB) {
                return 1;
            }
            return 0;
        });
    }

}

function sortByAge(data, order) {
    if (order) {
        data.People.sort((a, b) => a.Age - b.Age);
    }
    else {
        data.People.sort((a, b) => b.Age - a.Age);
    }


}

function sortByHeight(data, order) {
    if (order) {
        data.People.sort((a, b) => {
            const heightA = parseInt(a.Height);
            const heightB = parseInt(b.Height);
            return heightA - heightB;
        });

    }
    else {
        data.People.sort((a, b) => {
            const heightA = parseInt(a.Height);
            const heightB = parseInt(b.Height);
            return heightB - heightA;
        });
    }

}

function sortByID(data, order) {
    if (order) {
        data.People.sort((a, b) => a.Id - b.Id);
    }
    else {
        data.People.sort((a, b) => b.Id - a.Id);
    }

}

function sortByEmail(data, order) {
    data.People.sort((a, b) => {
        const emailA = a.Email.toLowerCase();
        const emailB = b.Email.toLowerCase();
        if (emailA < emailB) {
            return -1;
        }
        if (emailA > emailB) {
            return 1;
        }
        return 0;
    });
}

function createField(data, order) {
    let counter = 0;
    data.People.map(person => {
        let newElement = createPerson(person.Id, person.FirstName, person.LastName, person.Email, person.Height, person.Age);
        if (counter < 10) {
            append1.appendChild(newElement);
            counter++;
        }
        else if (counter > 9 && counter < 20) {
            append2.appendChild(newElement);
            counter++;

        }
        else if (counter > 19 && counter < 30) {
            append3.appendChild(newElement);
            counter++;
        }
        else if (counter > 29 && counter < 40) {
            append4.appendChild(newElement);
            counter++;
        }
        else if (counter > 39 && counter < 50) {
            append5.appendChild(newElement);
            counter++;
        }

        // append1.appendChild(newElement);
    })
}

function resetPage() {
    append1.textContent = "";
    append2.textContent = "";
    append3.textContent = "";
    append4.textContent = "";
    append5.textContent = "";
}
export { createPerson, createField, sortByFirstName, sortByLastName, sortByAge, sortByEmail, sortByHeight, sortByID, resetPage }
