function JavaScript() {

    const ajax = new XMLHttpRequest();
    const output = document.getElementById('output');


    /* Вынесем вывод данных в функцию,
     чтобы вручную не писать его для каждого элемента в массиве JSON,
     и не загромождать будущий обработчик событий */
    function showData() {

        /* Для расшифровки JSON данных воспользуемся методом responseText*/
        let data = JSON.parse(ajax.responseText);
        console.log(data);

        /*Добавляем сортировку по цвету глаз. Заносим кнопку в константу,
         чтобы в будущем добавить eventListener*/
        const eyeSortBtn = document.getElementById('eyeSortBtn')
        /* зададим, что eyeSortBtn на данный момент не нажата нечетный раз,
         для того, чтобы в будущем реализовать систему четных и нечетных кликов */
        let eyeSortClickedOdd = false;
        /* Убедимся, что DOM прогрузилась перед добавлением eventListener */
        console.log(eyeSortBtn);

        eyeSortBtn.addEventListener('click', function () {

            /* Добавим возможность сортировки в обратном порядке
             по кождому второму нажатию */
            if (!eyeSortClickedOdd) {
                eyeSortClickedOdd = true;
                console.log('eyeSortBtn - нечетный клик');
            }
            else {
                eyeSortClickedOdd = false;
                console.log('eyeSortBtn - четный клик');
            }


            /* Для начала очистим поле таблицы от уже выведенного туда JSON */
            output.innerHTML = '';
            console.log('eyeColor sort is running...')
            function eyeColorComp(curr, next) {
                console.log ('func eyeColorComp is run');
                let comp = 0;
                const currEye = curr.eyeColor.toUpperCase();
                const nextEye = next.eyeColor.toUpperCase();
                /* Функция должна возвращать 1, если первый элемент больше второго,
                 и -1, если первый элемент меньше второго,
                 что будет позже применено в методе sort */
                if (eyeSortClickedOdd) {
                    if (currEye > nextEye)
                        comp = 1;
                    if (currEye < nextEye)
                        comp = -1;
                    return comp;
                }
                else {
                    if (currEye > nextEye)
                        comp = -1;
                    if (currEye < nextEye)
                        comp = 1;
                    return comp;
                }

            }
            /* подставляем функцию в метод sort */
            data.sort(eyeColorComp);
            console.log('eyeColor sort is run')
            /* Конструируем элементы с помощью функции, которую опишем далее */
            constructData();
        });


        /* Повторяем абсолютно то же самое для других элементов */

        /* Сортируем содержимое столбца about */
        const aboutSortBtn = document.getElementById('aboutSortBtn');
        let aboutSortClickedOdd = false;
        console.log(aboutSortBtn);
        aboutSortBtn.addEventListener('click', function () {
            if (!aboutSortClickedOdd) {
                aboutSortClickedOdd = true;
                console.log('aboutSortBtn - нечетный клик');
            }
            else {
                aboutSortClickedOdd = false;
                console.log('aboutSortBtn - четный клик');
            }
            output.innerHTML = '';
            console.log('about sort is running...')
            function aboutComp(curr, next) {
                console.log ('func aboutComp is run');
                let comp = 0;
                const currAbout = curr.about.toUpperCase();
                const nextAbout = next.about.toUpperCase();
                if (aboutSortClickedOdd) {
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
            data.sort(aboutComp);
            console.log('about sort is run')
            /* Конструируем элементы с помощью функции, которую опишем далее */
            constructData();
        });

        /* Сортируем содержимое столбца firstName */
        const firstNameSortBtn = document.getElementById('firstNameSortBtn');
        let firstNameSortClickedOdd = false;
        console.log(firstNameSortBtn);
        firstNameSortBtn.addEventListener('click', function () {
            if (!firstNameSortClickedOdd) {
                firstNameSortClickedOdd = true;
                console.log('firstNameSortBtn - нечетный клик');
            }
            else {
                firstNameSortClickedOdd = false;
                console.log('firstNameSortBtn - четный клик');
            }
            output.innerHTML = '';
            console.log('firstName sort is running...')
            function firstNameComp(curr, next) {
                console.log ('firstNameComp is run');
                let comp = 0;
                const currFirstName = curr.name.firstName.toUpperCase();
                const nextFirstName = next.name.firstName.toUpperCase();
                if (firstNameSortClickedOdd) {
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

            data.sort(firstNameComp);
            console.log('firstName sort is run')
            /* Конструируем элементы с помощью функции, которую опишем далее */
            constructData();
        });

        /* Сортируем содержимое столбца lastName */
        const lastNameSortBtn = document.getElementById('lastNameSortBtn');
        let lastNameSortClickedOdd = false;
        console.log(lastNameSortBtn);
        lastNameSortBtn.addEventListener('click', function () {
            if (!lastNameSortClickedOdd) {
                lastNameSortClickedOdd = true;
                console.log('lastNameSortBtn - нечетный клик');
            }
            else {
                lastNameSortClickedOdd = false;
                console.log('lastNameSortBtn - четный клик');
            }
            output.innerHTML = '';
            console.log('lastName sort is running...')
            function lastNameComp(curr, next) {
                console.log ('lastNameComp is run');
                let comp = 0;
                const currLastName = curr.name.lastName.toUpperCase();
                const nextLastName = next.name.lastName.toUpperCase();
                if (lastNameSortClickedOdd) {
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

            data.sort(lastNameComp);
            console.log('lastName sort is run')
            /* Конструируем элементы с помощью функции, которую опишем далее */
            constructData();
        });

        /* Начинаем писать функцию конструирование таблицы */
        let tr, td;
        function constructData() {
            data.forEach((el) => {
                /* Создаем строку */
                tr = document.createElement('tr');

                /* Создаем первую ячейку, в которую заносим имя.
                 получаем его, переходя по структуре 'многоэтажного'
                 объекта к нужной паре ключ-значение */
                td = document.createElement('td');
                td.textContent = el.name.firstName;
                td.classList.add('name');
                /* Теперь физически заносим ячейку к дочерним элементам строки */
                tr.appendChild(td);

                /* Таким же образом создаем и остальные ячейки */

                td = document.createElement('td');
                td.textContent = el.name.lastName;
                td.classList.add('lastName');
                tr.appendChild(td);

                td = document.createElement('td');
                //td.textContent = (el.about.substr(0,60)) + '...';
                td.textContent = el.about;
                td.classList.add('about');
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = el.eyeColor;
                td.classList.add('eyeColor');
                tr.appendChild(td);

                /* Помещаем строку в output */
                output.appendChild(tr);
            });
        }
        /* Собственно физически конструируем таблицу
         вызовом только что заданной функции */
        constructData();
    }


    /* Добавляем код, который вызовет функцию showData,
     когда выполнится загрузка. Он необходим,
     т.к. мы будем выполнять асинхронную загрузку */
    ajax.addEventListener('readystatechange', function () {
        /* 'Ловим' момент получения запрошенного файла
         readystate == 4 означает, что запрошенный файл полностью загружен
         status == 200 означает, что запрос обработан, и запрошенный файл выслан*/
        if (this.readyState == 4 && this.status == 200)
            showData();
    });

    /* Выполняем загрузку более быстрым, чем POST,
     методом GET, указывая источник и значение true, означающее,
     что будет произведена асинхронная загрузка */
    ajax.open('GET', 'data.json', true);
    ajax.send();
}


/* Функция для проверки eventListener и прочего содержимого,
 создана, чтобы в случае неполадок понять какое действие происходит,
 а какое нет (помогло с eyeColor) */
function checkValidity(){
    console.log('hello')
}