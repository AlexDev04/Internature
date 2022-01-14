function JavaScript() {
    const ajax = new XMLHttpRequest();
    const output = document.getElementById('output');
    /* Вынесем вывод данных в функцию,
     чтобы вручную не писать его для каждого элемента в массиве JSON,
     и не загромождать будущий обработчик событий */
    function showData() {
        let tr, td;
        /* Для расшифровки JSON данных воспользуемся методом responseText*/
        let data = JSON.parse(ajax.responseText);
        console.log(data);

        /*Добавляем сортировку по цвету глаз. Заносим кнопку в константу,
         чтобы в будущем добавить eventListener*/
        const eyeSortBtn = document.getElementById('eyeSortBtn')
        /* Убедимся, что DOM прогрузилась перед добавлением eventListener */
        console.log(eyeSortBtn);
        eyeSortBtn.addEventListener('click', function () {
            /* Для начала очистим поле таблицы от уже выведенного туда JSON */
            output.innerHTML = '';
            console.log('eyeColorSort is running...')
            function eyeColorComp(curr, next) {
                console.log ('eyeColorComp is run');
                let comp = 0;
                const currEye = curr.eyeColor.toUpperCase();
                const nextEye = next.eyeColor.toUpperCase();
                /* Функция должна возвращать 1, если первый элемент больше второго,
                 и -1, если первый элемент меньше второго,
                 что будет позже применено в методе sort */
                if (currEye > nextEye)
                    comp = 1;
                if (currEye < nextEye)
                    comp = -1;
                return comp;
            }

            /* подставляем функцию в метод sort */
            data.sort(eyeColorComp);
            console.log('eyeSort is run')
            /* Конструируем элементы с помощью функции, которую опишем далее */
            constructData();
        });

        /* Начинаем писать функцию конструирование таблицы */
        function constructData() {
            data.forEach((el) => {
                /* Создаем строку */
                tr = document.createElement('tr');

                /* Создаем первую ячейку, в которую заносим имя.
                 получаем его, переходя по структуре 'многоэтажного'
                 объекта к нужной паре ключ-значение */
                td = document.createElement('td');
                td.textContent = el.name.firstName;
                /* Теперь физически заносим ячейку к дочерним элементам строки */
                tr.appendChild(td);

                /* Таким же образом создаем и остальные ячейки */

                td = document.createElement('td');
                td.textContent = el.name.lastName;
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = el.about;
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = el.eyeColor;
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
function checkValidity(){
    console.log('hello')
}