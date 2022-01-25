const ajax = new XMLHttpRequest();
/*..................................................*/

function showData() {
    let data = JSON.parse(ajax.responseText);
    console.log(data);
    const output = document.getElementById('output');

    function User(firstName, lastName, about, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
        let row, cell, text, colorDiv;
        this.constructRow = function (createFirstName = true,
                                      createLastName = true,
                                      createAbout = true,
                                      createEyeColor = true) {
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

    let users = [];
    let curUser;
    data.forEach(function (el) {
        curUser = new User(el.name.firstName, el.name.lastName, el.about, el.eyeColor);
        users.push(curUser);
        //newRow = curUser.constructRow();
        //console.log(newRow);
        //output.appendChild(newRow);
    });
    console.log(users);

    function constructTable( firstName, lastName, about, eyeColor) {
        output.innerHTML = '';
        let newRow;
        users.forEach(function (el) {
            newRow = el.constructRow(firstName, lastName, about, eyeColor);
            output.appendChild(newRow);
        });
    }
    constructTable();
    rowsEl();


    /* sorting first name */
    const firstNameSortBtn = document.getElementById('firstNameSortBtn');
    let firstNameClickOdd = false;
    firstNameSortBtn.addEventListener('click', function() {
        for (let i = 0; i < hideBtns.length; i++) {
            hideBtns[i]. src = 'images/visible.png';
        }

        if (!firstNameClickOdd) {
            firstNameClickOdd = true;
            console.log('firstNameSortBtn - odd click');
        }
        else {
            firstNameClickOdd = false;
            console.log('firstNameSortBtn - even click');
        }

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

        users.sort(firstNameComp);
        constructTable();
        rowsEl();
    })

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

    /* Edit form */
    const form = document.forms[0];
    function rowsEl() {
        let rows = output.getElementsByTagName('tr');
        let targetTd;
        for (let i = 0; i < rows.length; i++) {
            rows[i].addEventListener('click', function (evt) {
                targetTd = evt.target;
                form.elements[0].value = users[i].firstName;
                form.elements[0].placeholder = users[i].firstName;
                form.elements[1].value = users[i].lastName;
                form.elements[0].placeholder = users[i].lastName;
                form.elements[2].value = users[i].about;
                form.elements[2].placeholder = users[i].about;
                form.elements[3].value = users[i].eyeColor;
                form.elements[2].placeholder = users[i].eyeColor;
                form.parentElement.style.display = 'grid';
            });
        }
    }

    /* Hide buttons */
    let hideBtns = document.getElementsByClassName('hideBtn');
    let clickOddBtn0 = false, clickOddBtn1 = false,
        clickOddBtn2 = false, clickOddBtn3 = false;
    for (let i = 0; i < hideBtns.length; i++) {
        hideBtns[i].addEventListener('click', function() {
            for (let i = 0; i < hideBtns.length; i++) {
                hideBtns[i]. src = 'images/visible.png';
            }

            if (i === 0) {
                if (!clickOddBtn0) {
                    constructTable(false);
                    hideBtns[i].src = 'images/hidden.png';
                    clickOddBtn0 = true;
                }
                else {
                    constructTable();
                    hideBtns[i].src = 'images/visible.png';
                    clickOddBtn0 = false;
                }
                rowsEl();
            }
            if (i === 1) {
                if (!clickOddBtn1) {
                    constructTable(true, false);
                    hideBtns[i].src = 'images/hidden.png';
                    clickOddBtn1 = true;
                }
                else {
                    constructTable();
                    hideBtns[i].src = 'images/visible.png';
                    clickOddBtn1 = false;
                }
                rowsEl();
            }
            if (i === 2) {
                if (!clickOddBtn2) {
                    constructTable(true, true, false);
                    hideBtns[i].src = 'images/hidden.png';
                    clickOddBtn2 = true;
                }
                else {
                    constructTable();
                    hideBtns[i].src = 'images/visible.png';
                    clickOddBtn2 = false;
                }
                rowsEl();
            }
            else if (i === 3) {
                if (!clickOddBtn3) {
                    constructTable(true, true, true, false);
                    hideBtns[i].src = 'images/hidden.png';
                    clickOddBtn3 = true;
                }
                else {
                    constructTable();
                    hideBtns[i].src = 'images/visible.png';
                    clickOddBtn3 = false;
                }
                rowsEl();
            }
        })
    }
}



/*..................................................*/
ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});

ajax.open('GET', 'data.json', true);
ajax.send();