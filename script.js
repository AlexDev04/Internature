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
        let row, cell, text;
        this.constructRow = function (createFirstName = true,
                                      createLastName = true, createAbout = true,
                                      createEyeColor = true) {
            row = document.createElement('tr');

            /* First Name */
            if (createFirstName) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.firstName;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                row.appendChild(cell);
            }

            /* LastName */
            if (createLastName) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.lastName;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                row.appendChild(cell);
            }

            /* About */
            if (createAbout) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.about;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
                row.appendChild(cell);
            }

            /* EyeColor */
            if (createEyeColor) {
                cell = document.createElement('td');
                text = document.createElement('p');
                text.textContent = this.eyeColor;
                cell.appendChild(text);
                cell.classList.add('activeCell');
                row.appendChild(cell);
            } else {
                cell = document.createElement('cell');
                cell.classList.toggle('unactiveCell');
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

    function constructTable() {
        output.innerHTML = '';
        let newRow;
        users.forEach(function (el) {
            newRow = el.constructRow();
            output.appendChild(newRow);
        });
    }
    constructTable();


    /* sorting first name */
    const firstNameSortBtn = document.getElementById('firstNameSortBtn');
    let firstNameClickOdd = false;
    firstNameSortBtn.addEventListener('click', function() {

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
    })

    /* Last name sort */
    const lastNameSortBtn = document.getElementById('lastNameSortBtn');
    let lastNameClickOdd = false;
    lastNameSortBtn.addEventListener('click', function() {

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
    })

    /* About sort */
    const aboutSortBtn = document.getElementById('aboutSortBtn');
    let aboutClickOdd = false;
    aboutSortBtn.addEventListener('click', function() {

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
    })

    /* Eye color sort */
    const eyeColorSortBtn = document.getElementById('eyeColorSortBtn');
    let eyeColorClickOdd = false;
    eyeColorSortBtn.addEventListener('click', function() {

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
    })

}



/*..................................................*/
ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});

ajax.open('GET', 'data.json', true);
ajax.send();
