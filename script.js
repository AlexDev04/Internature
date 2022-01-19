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
            /* Сразу же вызываем функцию, задающую окно создание формы по клику,
            чтобы eventListener нашел смозданные в DOM объекты */
            rowsEL();
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
            rowsEL();
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
            rowsEL();
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
            rowsEL();
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
        /* Сразу же вызовем функцию установки обработчика событий,
         чтобы в него занеслись созданные ячейки */
        rowsEL();

    }

    /* Начнем описание функции, создающей обработчик события для каждой ячейки
    (фактически - для каждого столбца, но с ячейками понятнее) - при клике на нее
    будет открыта форма редактирования строки*/
    function rowsEL() {
        rows = null;
        /* Объявим переменную rows, хранящую доступ к каждой строке таблицы */
        rows = output.getElementsByTagName('tr');
        /* Получим доступ к элементу, в который запакована форма */
        let formDiv = document.getElementById('formDiv')
        let input, form, label, row, p, div, clearBtn;
        for(i=0; i < rows.length; i++) {
            /* Ради удобства объявим переменную row,
             хранящую в себе доступ к текущей строке */
            row = rows[i];
            /* на каждую строку добавляется обработчик событий */
            row.addEventListener('click', (evt) => {
                console.log(evt.target);
                /* Слишком подробно процесс конструирования описан не будет,
                 все и так понятно - создается форма */
                formDiv.innerHTML = '';
                /* Задается вертикальное и горизонтальное положение формы
                 относительно места клика */
                formDiv.style.marginLeft = (window.innerWidth * 0.6) + 'px';
                if (evt.clientY <= (window.innerHeight / 3.5)) {
                    formDiv.style.marginTop = (evt.pageY) + 'px';
                }
                else if (evt.clientY >= (window.innerHeight / 4 * 3)) {
                    formDiv.style.marginTop = (evt.pageY - 300) + 'px';
                }
                else {
                    formDiv.style.marginTop = (evt.pageY - 150) + 'px';
                }
                    p = document.createElement('p');
                    p.textContent = 'Форма редактирования содержимого строки';
                formDiv.appendChild(p);
                    div = document.createElement('div');
                    div.id = 'inFormDiv';
                        form = document.createElement('form');

                            /* Имя */
                            label = document.createElement('label');
                            label.textContent = 'Имя';
                                input = document.createElement('input');
                                input.type = 'text';
                                input.required = true;
                                input.placeholder =
                                    evt.target.parentElement.children[0].textContent;
                                input.value =
                                    evt.target.parentElement.children[0].textContent;
                            label.appendChild(input);
                        form.appendChild(label);

                            /* Фамилия */
                            label = document.createElement('label');
                            label.textContent = 'Фамилия';
                                input = document.createElement('input');
                                input.type = 'text';
                                input. required = true;
                                input.placeholder =
                                    evt.target.parentElement.children[1].textContent;
                                input.value =
                                    evt.target.parentElement.children[1].textContent;
                            label.appendChild(input);
                        form.appendChild(label);

                            /* Описание */

                            label = document.createElement('label');
                            label.textContent = 'Описание';
                                clearBtn = document.createElement('button');
                                clearBtn.addEventListener('click', () => {
                                    clearBtn.nextElementSibling.value = '';
                                });
                                clearBtn.class = 'clearBtn';
                            label.appendChild(clearBtn);
                                input = document.createElement('input');
                                input.type = 'text';
                                input. required = true;
                                input.placeholder =
                                    evt.target.parentElement.children[2].textContent;
                                input.value =
                                    evt.target.parentElement.children[2].textContent;
                            label.appendChild(input);
                        form.appendChild(label);

                            /* Цвет глаз */
                            label = document.createElement('label');
                            label.textContent = 'Цвет глаз';
                                input = document.createElement('input');
                                input.type = 'text';
                                input. required = true;
                                input.placeholder =
                                    evt.target.parentElement.children[3].textContent;
                                input.value =
                                    evt.target.parentElement.children[3].textContent;
                            label.appendChild(input);
                        form.appendChild(label);

                            input = document.createElement('input');
                            input.type = 'submit';
                            input.id = 'submit';
                        form.appendChild(input);
                    div.appendChild(form);

                formDiv.appendChild(div);
            });
        }
    }

    /* Добавляем код, который вызовет функцию showData,
     когда выполнится загрузка. Он необходим,
     т.к. мы будем выполнять асинхронную загрузку */
    ajax.addEventListener('readystatechange', function () {
        /* 'Ловим' момент получения запрошенного файла
         readystate == 4 означает, что запрошенный файл полностью загружен
         status == 200 означает, что запрос обработан, и запрошенный файл выслан*/
        if (this.readyState === 4 && this.status === 200)
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