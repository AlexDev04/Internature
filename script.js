/*Оборачиваем весь JS файл в функцию, чтобы
дождавшись прогрузки дерева DOM работать с ним*/
function JavaScript() {

    /* Создадим объект AJAX */
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

        /* Начинаем писать функцию конструирования таблицы */
        let tr, td, colorDiv;
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
                td.classList.add('visibleCol');
                /* Теперь физически заносим ячейку к дочерним элементам строки */
                tr.appendChild(td);

                /* Таким же образом создаем и остальные ячейки */

                td = document.createElement('td');
                td.textContent = el.name.lastName;
                td.classList.add('lastName');
                td.classList.add('visibleCol');
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = el.about;
                td.classList.add('about');
                td.classList.add('visibleCol');
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = el.eyeColor;
                td.classList.add('eyeColor');
                td.classList.add('visibleCol');
                    colorDiv = document.createElement('div');
                    colorDiv.style.backgroundColor = el.eyeColor;
                    colorDiv.id = 'Indicator';
                    colorDiv.style.width = '5px';
                    colorDiv.style.height = '5px';
                    colorDiv.style.display = 'inline-block';
                    colorDiv.style.margin = '3px';
                    colorDiv.style.verticalAlign = 'middle';
                    colorDiv.style.borderRadius = '5px';

                td.appendChild(colorDiv);
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
        hideBtns();
    }

    /* Начнем описание функции, создающей обработчик события для каждой ячейки
    (фактически - для каждого столбца, но с ячейками понятнее) - при клике на нее
    будет открыта форма редактирования строки*/
    function rowsEL() {
        let rows;
        /* Объявим переменную rows, хранящую доступ к каждой строке таблицы */
        rows = output.getElementsByTagName('tr');
        /* Получим доступ к элементу, в который запакована форма */
        let formDiv = document.getElementById('formDiv')
        let form, label, row, p, div, clearBtn;
        for(i=0; i < rows.length; i++) {
            /* Ради удобства объявим переменную row,
             хранящую в себе доступ к текущей строке */
            row = rows[i];
            /* на каждую строку добавляется обработчик событий */
            let rowTargetTd;
            row.addEventListener('click', (evt) => {
                rowTargetTd = evt.target;
                console.log(rowTargetTd);
                /* Слишком подробно процесс конструирования описан не будет,
                 все и так понятно - создается форма */
                formDiv.innerHTML = '';
                formDiv.style.display = 'flex';
                /* Задается вертикальное и горизонтальное положение формы
                 относительно места клика */
                formDiv.style.marginLeft = (window.innerWidth * 0.6) + 'px';
                if (evt.clientY <= (window.innerHeight / 3)) {
                    formDiv.style.marginTop = (evt.pageY) + 'px';
                    console.log('<=/3');
                }
                if (evt.clientY <= (window.innerHeight / 3.5)) {
                    formDiv.style.marginTop = (evt.pageY - 50) + 'px';
                    console.log('<=/3.5');
                }
                else if (evt.clientY >= (window.innerHeight / 4 * 3.5)) {
                    formDiv.style.marginTop = (evt.pageY - 375) + 'px';
                    console.log('>=/4*3.5');
                }
                else if (evt.clientY >= (window.innerHeight / 4 * 3)) {
                    formDiv.style.marginTop = (evt.pageY - 325) + 'px';
                    console.log('>=/4*3.5');
                }
                else if (evt.clientY >= (window.innerHeight / 4 * 2)) {
                    formDiv.style.marginTop = (evt.pageY - 250) + 'px';
                    console.log('>=/4*3');
                }
                else {
                    formDiv.style.marginTop = (evt.pageY - 150) + 'px';
                }
                /* Конструируем форму */
                    p = document.createElement('p');
                    p.textContent = 'Форма редактирования содержимого строки';
                    p.id = 'formHead';
                formDiv.appendChild(p);
                    div = document.createElement('div');
                    div.id = 'inFormDiv';
                        form = document.createElement('form');

                            /* Имя */
                            label = document.createElement('label');
                            label.textContent = 'Имя';
                                inputFirstName = document.createElement('input');
                                inputFirstName.type = 'text';
                                inputFirstName.required = true;
                                inputFirstName.placeholder =
                                    rowTargetTd.parentElement.children[0].textContent;
                                inputFirstName.value =
                                    rowTargetTd.parentElement.children[0].textContent;
                            label.appendChild(inputFirstName);
                        form.appendChild(label);

                            /* Фамилия */
                            label = document.createElement('label');
                            label.textContent = 'Фамилия';
                                inputLastName = document.createElement('input');
                                inputLastName.type = 'text';
                                inputLastName. required = true;
                                inputLastName.placeholder =
                                    rowTargetTd.parentElement.children[1].textContent;
                                inputLastName.value =
                                    rowTargetTd.parentElement.children[1].textContent;
                            label.appendChild(inputLastName);
                        form.appendChild(label);

                            /* Описание */

                            label = document.createElement('label');
                            label.textContent = 'Описание';
                                clearBtn = document.createElement('button');
                                clearBtn.addEventListener('click', () => {
                                    clearBtn.nextElementSibling.value = '';
                                });
                                clearBtn.className = 'clearBtn';
                                clearBtn.textContent = 'очистить';
                            label.appendChild(clearBtn);
                                inputAbout = document.createElement('textarea');
                                inputAbout.type = 'text';
                                inputAbout. required = true;
                                inputAbout.placeholder =
                                    rowTargetTd.parentElement.children[2].textContent;
                                inputAbout.value =
                                    rowTargetTd.parentElement.children[2].textContent;
                            label.appendChild(inputAbout);
                        form.appendChild(label);

                            /* Цвет глаз */
                            label = document.createElement('label');
                            label.textContent = 'Цвет глаз';
                                inputEyeColor = document.createElement('input');
                                inputEyeColor.type = 'text';
                                inputEyeColor. required = true;
                                inputEyeColor.placeholder =
                                    rowTargetTd.parentElement.children[3].textContent;
                                inputEyeColor.value =
                                    rowTargetTd.parentElement.children[3].textContent;
                            label.appendChild(inputEyeColor);
                        form.appendChild(label);

                            let submit = document.createElement('input');
                            submit.type = 'submit';
                            submit.id = 'submit';
                            console.log(submit);
                            /* Добавляем возможность заносить редактирование в таблицу.
                             Для того ,чтобы в дальнейшем разработчик смог брать
                             измененную пользователем информацию и заносить ее
                             в JSON необходимо создать обработчик события на выходе
                             из страницы, а как событие добавить непосредственно сбор
                             информации из таблицы, что будет вполне удобно.
                             Процесс будет похож на вывод JSON в таблицу HTML,
                             только наоборот */
                            submit.addEventListener('click',
                                (evt) => {
                                evt.preventDefault();
                                formDiv.style.display = 'none';
                                rowTargetTd.parentElement.children[0].innerHTML = '';
                                    rowTargetTd.parentElement.children[0].innerHTML =
                                        inputFirstName.value;
                                rowTargetTd.parentElement.children[1].innerHTML = '';
                                    rowTargetTd.parentElement.children[1].innerHTML =
                                        inputLastName.value;
                                rowTargetTd.parentElement.children[2].innerHTML = '';
                                    rowTargetTd.parentElement.children[2].innerHTML =
                                        inputAbout.value;
                                rowTargetTd.parentElement.children[3].innerHTML = '';
                                    rowTargetTd.parentElement.children[3].innerHTML =
                                        inputEyeColor.value;
                                /*Снова создаем div, осуществляющий дублирование цвета глаз */
                                let colorDiv = document.createElement('div');
                                colorDiv.style.backgroundColor = inputEyeColor.value;
                                colorDiv.id = 'Indicator';
                                colorDiv.style.width = '5px';
                                colorDiv.style.height = '5px';
                                colorDiv.style.display = 'inline-block';
                                colorDiv.style.margin = '3px';
                                colorDiv.style.verticalAlign = 'middle';
                                colorDiv.style.borderRadius = '5px';
                                rowTargetTd.parentElement.children[3].appendChild(colorDiv);
                                });
                        form.appendChild(submit);
                    div.appendChild(form);

                formDiv.appendChild(div);
            });
        }

    }
    function hideBtns() {
        let sortRow = document.getElementById('closers');
        let curImg;
        let rows = document.getElementsByTagName('tr');
        sortRow.addEventListener('click', function(evt) {
            curImg = evt.target;
            console.log (curImg);
            let appropTd;
            for (i = 1; i < rows.length; i++) {
                appropTd = rows[i].children[+curImg.id];
                if (appropTd.classList.contains('visibleCol')) {
                    appropTd.classList.remove('visibleCol');
                    appropTd.classList.add('hiddenCol');
                    curImg.src = 'images/hidden.png';
                }
                else {
                    appropTd.classList.remove('hiddenCol');
                    appropTd.classList.add('visibleCol');
                    curImg.src = 'images/visible.png';
                }
            }

        })
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