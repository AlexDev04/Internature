/* Creating a XMLHttpRequest */
const ajax = new XMLHttpRequest();
/*..................................................*/
/* First of all, we should pack all the cod into function to call it
when AJAX will be ready and JSON will have been processed */
function showData() {
    let data = JSON.parse(ajax.responseText);
    console.log(data);
    const output = document.getElementById('output');
    /* In my first version of the site,  I didn't used OOP.
     I think you would be glad to see my  OOP skills.
     Declaring a new class with a consturctor function */
    function User(firstName, lastName, about, eyeColor) {
        /* Then we need to determine the arguments */
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
        let row, cell, text, colorDiv;
        /* The next step is to declare a method,
         which will get all the information and create a row */
        this.constructRow = function (createFirstName = true,
                                      createLastName = true,
                                      createAbout = true,
                                      createEyeColor = true) {
            /* Starting to create elements. Nothing interesting */
            row = document.createElement('tr');

            /* First Name */
            if (createFirstName) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.firstName;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                cell.classList.add('firstNameCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                cell.classList.add('firstNameCell');
                row.appendChild(cell);
            }

            /* LastName */
            if (createLastName) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.lastName;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                cell.classList.add('lastNameCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                cell.classList.add('lastNameCell');
                row.appendChild(cell);
            }

            /* About */
            if (createAbout) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.about;
                text.className = 'aboutText';
                cell.appendChild(text);
                cell.classList.add('activeCell');
                cell.classList.add('aboutCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                cell.classList.add('aboutCell');
                row.appendChild(cell);
            }

            /* EyeColor */
            if (createEyeColor) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.eyeColor;
                cell.appendChild(text);
                /* Here is the pop, colored with its owner's eye color */
                colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = this.eyeColor;
                colorDiv.className = 'colorDiv';
                cell.appendChild(colorDiv);
                cell.classList.add('activeCell');
                cell.classList.add('eyeColorCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                cell.classList.add('eyeColorCell');
                row.appendChild(cell);
            }
            return row;
        }
    }
    /* Now we must create an array, contains
     of all the People from JSON. I called it users,
     but I think it doesn't matter */
    let users = [];
    let curUser;
    /* Creating a user for every person from JSON */
    data.forEach(function (el) {
        curUser = new User(el.name.firstName, el.name.lastName, el.about, el.eyeColor);
        users.push(curUser);
        //newRow = curUser.constructRow();
        //console.log(newRow);
        //output.appendChild(newRow);
    });
    console.log(users);
    /* Now we need to create a lot of rows. For completing this task, I think it would be
     better if I used a function, because we will be able to call it everywhere */
    function constructTable( firstName, lastName, about, eyeColor) {
        output.innerHTML = '';
        let newRow;
        users.forEach(function (el) {
            newRow = el.constructRow(firstName, lastName, about, eyeColor);
            output.appendChild(newRow);
        });
    }
    constructTable();
    /* Function from future. We can call it, because functions from all the code
     are processed in the very beginning of it.
     */
    rowsEl();


    /* Sorting first name */
    const firstNameSortBtn = document.getElementById('firstNameSortBtn');
    let firstNameClickOdd = false;
    /* To sort a column you will have to press a button,
     so I need to create an event listener on it */
    firstNameSortBtn.addEventListener('click', function() {
        for (let i = 0; i < hideBtns.length; i++) {
            hideBtns[i]. src = 'images/visible.png';
        }
        /* If a button haven't been clicked odd, we give a special variable value 'true' */
        if (!firstNameClickOdd) {
            firstNameClickOdd = true;
            console.log('firstNameSortBtn - odd click');
        }
        /* Else we give it 'false' */
        else {
            firstNameClickOdd = false;
            console.log('firstNameSortBtn - even click');
        }
        /* Now we need to write a function, that will compare two nearby elements
         and give back the result */

        function firstNameComp(curr, next) {
            console.log ('func firstNameComp is run');
            let comp = 0;
            const currFirstName = curr.firstName.toUpperCase();
            const nextFirstName = next.firstName.toUpperCase();

            if (firstNameClickOdd) {
                if (currFirstName > nextFirstName)
                    comp = 1;
                if (currFirstName < nextFirstName)
                    comp = -1;
                return comp;
            }
            else {
                if (currFirstName > nextFirstName)
                    comp = -1;
                if (currFirstName < nextFirstName)
                    comp = 1;
                return comp;
            }

        }
        /* I won't describe how does Array.sort method works, it is too easy and too long,
         so I hope it won't cause problems */
        users.sort(firstNameComp);
        constructTable();
        rowsEl();
    })

    /* Doing the same to other columns */
    /* Last name sort */
    const lastNameSortBtn = document.getElementById('lastNameSortBtn');
    let lastNameClickOdd = false;
    lastNameSortBtn.addEventListener('click', function() {
        for (let i = 0; i < hideBtns.length; i++) {
            hideBtns[i]. src = 'images/visible.png';
        }

        if (!lastNameClickOdd) {
            lastNameClickOdd = true;
            console.log('lastNameSortBtn - odd click');
        }
        else {
            lastNameClickOdd = false;
            console.log('lastNameSortBtn - even click');
        }

        function lastNameComp(curr, next) {
            console.log ('func lastNameComp is run');
            let comp = 0;
            const currLastName = curr.lastName.toUpperCase();
            const nextLastName = next.lastName.toUpperCase();

            if (lastNameClickOdd) {
                if (currLastName > nextLastName)
                    comp = 1;
                if (currLastName < nextLastName)
                    comp = -1;
                return comp;
            }
            else {
                if (currLastName > nextLastName)
                    comp = -1;
                if (currLastName < nextLastName)
                    comp = 1;
                return comp;
            }

        }
        users.sort(lastNameComp);
        constructTable();
        rowsEl();
    })

    /* About sort */
    const aboutSortBtn = document.getElementById('aboutSortBtn');
    let aboutClickOdd = false;
    aboutSortBtn.addEventListener('click', function() {
        for (let i = 0; i < hideBtns.length; i++) {
            hideBtns[i]. src = 'images/visible.png';
        }

        if (!aboutClickOdd) {
            aboutClickOdd = true;
            console.log('aboutSortBtn - odd click');
        }
        else {
            aboutClickOdd = false;
            console.log('aboutSortBtn - even click');
        }

        function aboutComp(curr, next) {
            console.log ('func aboutCopm is run');
            let comp = 0;
            const currAbout = curr.about.toUpperCase();
            const nextAbout = next.about.toUpperCase();

            if (aboutClickOdd) {
                if (currAbout > nextAbout)
                    comp = 1;
                if (currAbout < nextAbout)
                    comp = -1;
                return comp;
            }
            else {
                if (currAbout > nextAbout)
                    comp = -1;
                if (currAbout < nextAbout)
                    comp = 1;
                return comp;
            }

        }
        users.sort(aboutComp);
        constructTable();
        rowsEl();
    })

    /* Eye color sort */
    const eyeColorSortBtn = document.getElementById('eyeColorSortBtn');
    let eyeColorClickOdd = false;
    eyeColorSortBtn.addEventListener('click', function() {
        for (let i = 0; i < hideBtns.length; i++) {
            hideBtns[i]. src = 'images/visible.png';
        }

        if (!eyeColorClickOdd) {
            eyeColorClickOdd = true;
            console.log('eyeColorSortBtn - odd click');
        }
        else {
            eyeColorClickOdd = false;
            console.log('eyeColorSortBtn - even click');
        }

        function eyeColorComp(curr, next) {
            console.log ('func eyeColorCopm is run');
            let comp = 0;
            const currEyeColor = curr.eyeColor.toUpperCase();
            const nextEyeColor = next.eyeColor.toUpperCase();

            if (eyeColorClickOdd) {
                if (currEyeColor > nextEyeColor)
                    comp = 1;
                if (currEyeColor < nextEyeColor)
                    comp = -1;
                return comp;
            }
            else {
                if (currEyeColor > nextEyeColor)
                    comp = -1;
                if (currEyeColor < nextEyeColor)
                    comp = 1;
                return comp;
            }

        }
        users.sort(eyeColorComp);
        constructTable();
        rowsEl();
    })

    /* The next task is to create an edit form. First of all we should 'find' it */
    /* Edit form */
    const form = document.forms[0];
    let secondFormHeader = document.getElementById('secondFormHeader');
    /* Now we need to create ELs on every row
     (in fact the targets of the events will be cells).
     I would like to place them in a function */
    function rowsEl() {
        const rows = output.getElementsByTagName('tr');
        const submit = document.getElementById('submit');
        /* Now going throw all the rows and giving to each ov them an EL */
        for (let i = 0; i < rows.length; i++) {
            let curRow = rows[i];
            curRow.addEventListener('click', function () {
                console.log('click on ' + i + ' row');
                curRow.id = i;
                /* Giving to form inputs the information from current User from array */
                form.elements[0].value = users[i].firstName;
                form.elements[0].placeholder = users[i].firstName;
                form.elements[1].value = users[i].lastName;
                form.elements[0].placeholder = users[i].lastName;
                form.elements[2].value = users[i].about;
                form.elements[2].placeholder = users[i].about;
                form.elements[3].value = users[i].eyeColor;
                form.elements[2].placeholder = users[i].eyeColor;
                form.parentElement.parentElement.style.display = 'flex';
                /* Creating a tip with the number of row */
                secondFormHeader.textContent = '(you are on ' + (i + 1) + ' row now)';
                /* Now we need to process click on submit (save) button */
                submit.addEventListener('click', function (evt) {
                    /* deleting the default action */
                    evt.preventDefault();
                    console.log('submit click. changes to user ' + i);
                    console.log(curRow.id);
                    /* for normal recursion work we must throw away users,
                     we have already processed, so before writing information
                     into user we have to check if we are on the right user */
                    if (i === + curRow.id) {
                        users[i].firstName = form.elements[0].value;
                        users[i].lastName = form.elements[1].value;
                        users[i].about = form.elements[2].value;
                        users[i].eyeColor = form.elements[3].value;
                        constructTable();
                        rowsEl();
                    }
                })
            });
        }
    }
    /* Now we need to add EL to the second button, which send data to server.
     Realising of sending data to server is not required in the task,
     so I will just create  a pattern */
    let send = document.getElementById('send');
    send.addEventListener('click', function (evt) {
        evt.preventDefault();
        /*function of sending data to server */
        if (window.confirm('Send data to server?')) {
            alert('Data Sent');
        }
        else {
            alert('Data send canceled');
        }
    })

    /* The last task is to realise hiding of columns.
     Because of arguments in my first function, it is a bit easy to complete the task */
    /* Hide buttons */
    let hideBtns = document.getElementsByClassName('hideBtn');
    let clickOddBtn0 = false, clickOddBtn1 = false,
        clickOddBtn2 = false, clickOddBtn3 = false;
    /* We need to go throw all the hide buttons and give them ELs */
    for (let i = 0; i < hideBtns.length; i++) {
        hideBtns[i].addEventListener('click', function() {
            for (let i = 0; i < hideBtns.length; i++) {
                hideBtns[i]. src = 'images/visible.png';
            }
            console.log('click on ' + i + ' hide button')
            /* In the EL we will check if the button have already been clicked
             and was it clicked odd or even */
            if (i === 0) {
                if (!clickOddBtn0) {
                    /* If we need to hide a column, we just call function constructTable
                     with one of the arguments value 'false' */
                    constructTable(false, true,
                        true, true);
                    hideBtns[0].src = 'images/hidden.png';
                    clickOddBtn0 = true;
                }
                else {
                    constructTable(true, undefined,
                        undefined, undefined);
                    hideBtns[0].src = 'images/visible.png';
                    clickOddBtn0 = false;
                }
                rowsEl();
            }
            if (i === 1) {
                if (!clickOddBtn1) {
                    constructTable(true, false, true, true);
                    hideBtns[1].src = 'images/hidden.png';
                    clickOddBtn1 = true;
                }
                else {
                    constructTable(undefined, true,
                        undefined, undefined);
                    hideBtns[1].src = 'images/visible.png';
                    clickOddBtn1 = false;
                }
                rowsEl();
            }
            if (i === 2) {
                if (!clickOddBtn2) {
                    constructTable(true, true, false, true);
                    hideBtns[2].src = 'images/hidden.png';
                    clickOddBtn2 = true;
                }
                else {
                    constructTable(undefined, undefined,
                        true, undefined);
                    hideBtns[2].src = 'images/visible.png';
                    clickOddBtn2 = false;
                }
                rowsEl();
            }
            else if (i === 3) {
                if (!clickOddBtn3) {
                    constructTable(true, true, true, false);
                    hideBtns[3].src = 'images/hidden.png';
                    clickOddBtn3 = true;
                }
                else {
                    constructTable(undefined, undefined,
                        undefined, true);
                    hideBtns[3].src = 'images/visible.png';
                    clickOddBtn3 = false;
                }
                rowsEl();
            }
        })
    }
}



/*..................................................*/
/* After loading the AJAX calling function ShowData */
ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});
/* Showing AJAX where to find and how to process file. We will do in asynchronously */
ajax.open('GET', 'data.json', true);
/* sending a request */
ajax.send();