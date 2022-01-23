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
                    console.log('FN');
                    cell = document.createElement('td');
                        text = document.createElement('p');
                        text.textContent = this.firstName;
                    cell.appendChild(text);
                    cell.classList.add('activeCell');
                    row.appendChild(cell);
                }
                else {
                    console.log('noFN');
                    cell = document.createElement('cell');
                    cell.classList.toggle('unactiveCell');
                    row.appendChild(cell);
                }

                /* LastName */
                if (createLastName) {
                    console.log('LN');
                    cell = document.createElement('td');
                        text = document.createElement('p');
                        text.textContent = this.lastName;
                    cell.appendChild(text);
                    cell.classList.add('activeCell');
                    row.appendChild(cell);
                }
                else {
                    console.log('noLN');
                    cell = document.createElement('cell');
                    cell.classList.toggle('unactiveCell');
                    row.appendChild(cell);
                }

                /* About */
                if (createAbout) {
                    console.log('Ab');
                    cell = document.createElement('td');
                        text = document.createElement('p');
                        text.textContent = this.about;
                    cell.appendChild(text);
                    cell.classList.add('activeCell');
                    row.appendChild(cell);
                }
                else {
                    console.log('noAb');
                    cell = document.createElement('cell');
                    cell.classList.toggle('unactiveCell');
                    row.appendChild(cell);
                }

                /* EyeColor */
                if (createEyeColor) {
                    console.log('EC');
                    cell = document.createElement('td');
                        text = document.createElement('p');
                        text.textContent = this.eyeColor;
                    cell.appendChild(text);
                    cell.classList.add('activeCell');
                    row.appendChild(cell);
                }
                else {
                    console.log('noEC');
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
    users.forEach( function (el) {
        newRow = el.constructRow();
        console.log(newRow);
        output.appendChild(newRow);
    });
    let sortBtns = document.getElementsByClassName('sortBtn');
    for (let i = 0; i <= sortBtns.length; i++) {
        curSortBtn = sortBtns[i];
        curSortBtn.addEventListener('click', function() {
            users.sort((cur, next) => {
                if (el1.firstName )
                });
        });
    }

}



/*..................................................*/
ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});

ajax.open('GET', 'data.json', true);
ajax.send();
