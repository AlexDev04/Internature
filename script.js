const ajax = new XMLHttpRequest();
/*..................................................*/

function showData() {
    let data = JSON.parse(ajax.responseText);
    console.log(data);
    const output = document.getElementById('output');
    function User (firstName, lastName, about, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
        this.constructRow = function(createFirstName = true,
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
                }
                else {
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
                }
                else {
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
                }
                else {
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
                }
                else {
                    cell = document.createElement('cell');
                    cell.classList.toggle('unactiveCell');
                    row.appendChild(cell);
                }
        return row;
        }
    }
    let users = [];
    data.forEach( function (el) {
        curUser = new User(el.name.firstName, el.name.lastName, el.about, el.eyeColor);
        users.push(curUser);
        //newRow = curUser.constructRow();
        //console.log(newRow);
        //output.appendChild(newRow);
    });
    console.log(users);
    users.forEach( function (el) {
        newRow = el.constructRow();
        output.appendChild(newRow);
    });

    /* sorting first name */
    const firstNameSortBtn = document.getElementById('firstNameSortBtn');
    let firstNameClickOdd = true;
    firstNameSortBtn.addEventListener('click', function() {
        users.sort ((cur, next) => {
            if(firstNameClickOdd) {
                //firstNameClickOdd = false;
                if(cur.firstName.toUpperCase() < next.firstName.toUpperCase()) {
                    return -1;
                }
                else if (cur.firstName.toUpperCase() > next.firstName.toUpperCase()) {
                    return 1;
                }
                //else {return 0}
            }
            else {
                //firstNameClickOdd = true;
                if(cur.firstName.toUpperCase() < next.firstName.toUpperCase()) {
                    return 1;
                }
                else if (cur.firstName.toUpperCase() > next.firstName.toUpperCase()) {
                    return -1;
                }
                //else {return 0}
            }
        })
        output.innerHTML = '';
        users.forEach( function (el) {
            newRow = el.constructRow();
            output.appendChild(newRow);
        });
    })


}



/*..................................................*/
ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});

ajax.open('GET', 'data.json', true);
ajax.send();
