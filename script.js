const ajax = new XMLHttpRequest();
function showData() {
    let data = JSON.parse(ajax.responseText);
    console.log(data);
    //data[1] = new User(this.name.firstName, this,name.lastName, this.about, this.eyeColor);

    function User (firstName, lastName, about, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
        
    }

    data.forEach( function (el) {
        console.log(
            new User(el.name.firstName, el.name.lastName, el.about, el.eyeColor)
        );
    });

    //console.log(User);
}

ajax.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200)
        showData();
});


ajax.open('GET', 'data.json', true);
ajax.send();
