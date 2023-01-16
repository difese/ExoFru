// * элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const minWeightInput = document.querySelector('.minweight__input'); // * поле с минимальным весом
const maxWeightInput = document.querySelector('.maxweight__input'); // * поле с максимальным весом
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const resetButton = document.querySelector('.reset__btn'); // * кнопка сброса

// * список фруктов в JSON формате

// * ВНИМАНИЕ!
// * по крайней просьбе фермера (заказчика) количество "фруктовых" цветов сокращено до 7
// * = ["Каждый Охотник Желает Знать, Где Сидит Фазан"]
// * ! Личи выросло из розово-красного, вступило в коммунистическую партию и стало полностью красным.
// * ! Тамаринд поддался тлетворному влиянию гуавы, вышел из чата светло-коричневых и стал голубым.

// * Для пущей наглядности добавлено ещё 8 фруктов:
// * + питахайя (красный),
// * + папайя (оранжевый), + кумкват (оранжевый)
// * + манго (жёлтый),
// * + фейхоа (зелёный),
// * + гуава (голубой),
// * + авокадо (синий),
// * + маракуйя (фиолетовый)
// * = [РАДУГА*].
//* (* - может быть запрещена в вашей стране!;))
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зелёный", "weight": 35},
  {"kind": "Личи", "color": "красный", "weight": 17},
  {"kind": "Карамбола", "color": "жёлтый", "weight": 28},
  {"kind": "Тамаринд", "color": "голубой", "weight": 22},
  {"kind": "Питахайя", "color": "красный", "weight": 37},
  {"kind": "Папайя", "color": "оранжевый", "weight": 73},
  {"kind": "Кумкват", "color": "оранжевый", "weight": 25},
  {"kind": "Манго", "color": "жёлтый", "weight": 101},
  {"kind": "Фейхоа", "color": "зелёный", "weight": 46},
  {"kind": "Гуава", "color": "голубой", "weight": 9},
  {"kind": "Авокадо", "color": "синий", "weight": 88},
  {"kind": "Маракуйя", "color": "фиолетовый", "weight": 53}
]`;


// * преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  // * удаляем элементы списка фруктов чтобы динамически заполнить данными из fruits

  while (fruitsList.firstChild) {
    fruitsList.removeChild(fruitsList.firstChild);
  }

  // * или так...
  // fruitsList.innerHTML = null;

  // * копируем массив
  // let juicyFruits = fruits.slice();
  // juicyFruits.forEach(function(item, index, array) {
  //   console.log(`item: ${item}, index: ${index}`)
  // })

  for (let i = 0; i < fruits.length; i++) {
    // * выводим в консоль все индексы массива fruits
    // console.log(fruits[i]);

    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

    // * создаём li (DOM-элемент) для фрукта и назначаем ему класс
    const liFruitItem = document.createElement('li');
    liFruitItem.className = 'fruit__item'

    // * создаём div для всех свойств фрукта и назначаем ему класс
    const divFruitInfo = document.createElement('div');
    divFruitInfo.className = 'fruit__info';

    // * в него добавляем блоки div (без классов) для каждого свойства фрукта
    divFruitInfo.innerHTML = `
      <div>index: ${i + 1}</div>
      <div>kind: ${fruits[i].kind}</div>
      <div>color: ${fruits[i].color}</div>
      <div>weight (кг): ${fruits[i].weight}</div>
    `;
    addColorClass(liFruitItem, fruits[i].color);

    // * вкладываем li в ul (фрукт в список фруктов)
    fruitsList.appendChild(liFruitItem);

    // * вкладываем div в li (свойства фрукта во фрукт)
    liFruitItem.appendChild(divFruitInfo);
  }

    // * добавляем li "цветовые" классы - в зависимости от "цвета" фрукта (= цвет рамки карточи фрукта):
    function addColorClass(fruit, color){
    switch (color) {
      case 'красный':
        fruit.classList.add('fruit_red');
      break;
      // case 'розово-красный':
      //   fruit.classList.add('fruit_carmazin');
      // break;
      case 'оранжевый':
        fruit.classList.add('fruit_orange');
      break;
      // case 'светло-коричневый':
      //   fruit.classList.add('fruit_lightbrown');
      // break;
      case 'жёлтый':
        fruit.classList.add('fruit_yellow');
      break;
      case 'зелёный':
        fruit.classList.add('fruit_green');
      break;
      case 'голубой':
        fruit.classList.add('fruit_blue');
      break;
      case 'синий':
        fruit.classList.add('fruit_indigo');
      break;
      case 'фиолетовый':
        fruit.classList.add('fruit_violet');
      break;
      default:
        fruit.classList.add('fruit_grey');
    }
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let resultShuffle = [];

  // * копируем массив fruits (эталон - для сравнения результатов перемешивания)
  // let fruitsShuffle = fruits.slice();
  let fruitsShuffle = JSON.stringify(fruits);

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)

    // * находим случайный элемент (фрукт)
    let randomFruit = getRandomInt(0, fruits.length - 1);
    // console.log(randomFruit);

    // * вырезаем его из fruits и вставляем в result (unshift - в начало, push - в конец)
    // let fruitElement = fruits.splice(randomFruit, 1)[0];
    // resultShuffle.push(fruitElement);
    resultShuffle.unshift(fruits.splice(randomFruit, 1)[0]);
  }

  // * выводим alert если порядок после перемешивания не изменился
  if (fruitsShuffle === JSON.stringify(resultShuffle)) {
    // console.log('Порядок элементов не изменился.');
    alert('Микс не случился - попробуйте перемешать снова!');
  }
  fruits = resultShuffle;
  };

// * кнопка "Перемешать"
shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
  sortTimeLabel.textContent = '-';
});

// /*** ФИЛЬТРАЦИЯ ***/

// * фильтрация массива
const filterFruits = () => {
  let resultFilter = fruits.filter((item) => {
    return item.weight >= minWeightInput.value && item.weight <= maxWeightInput.value;
  });
  fruits = resultFilter;
};

// * кнопка "Фильтровать"
filterButton.addEventListener('click', () => {
  fruits = JSON.parse(fruitsJSON);
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

// const comparationColor = (a, b) => {
//   // TODO: допишите функцию сравнения двух элементов по цвету
// };

// * функция сравнения цвета "Радуга"
const comparationColor = (fruit1, fruit2) => {
  const priorityColor = ['красный','оранжевый','жёлтый','зелёный','голубой','синий','фиолетовый'];
  const priority1 = priorityColor.indexOf(fruit1.color);
  const priority2 = priorityColor.indexOf(fruit2.color);
  return priority1 > priority2;
};

const sortAPI = {
    // TODO: допишите функцию сортировки пузырьком

    // * функция пузырьковой сортировки
    bubbleSort(arr, comparation) {
      // * внешняя итерация по элементам
      for (let i = 0; i < (arr.length - 1); i++) {
      // * внутренняя итерация для перестановки элемента в конец массива
        for (let j = 0; j < (arr.length - 1 - i); j++) {
      // * сравниваем элементы
          if (comparation(arr[j], arr[j + 1])) {
      // * производим обмен элементов
              // let temp = arr[j + 1];
              // arr[j + 1] = arr[j];
              // arr[j] = temp;
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    },

  // TODO: допишите функцию быстрой сортировки

  // * функция быстрой сортировки
  quickSort(arr, comparation) {

    // * функция обмена элементов
    function swap(items, firstIndex, secondIndex) {
      // const temp = items[firstIndex];
      // items[firstIndex] = items[secondIndex];
      // items[secondIndex] = temp;
      [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    }

    // * функция разделитель
    function partition(items, left, right) {
      let pivot = items[Math.floor((right + left) / 2)],
          i = left,
          j = right;
      while (i <= j) {
        while (comparationColor(pivot, items[i])) {
          i++;
        }
        while (comparationColor(items[j], pivot)) {
          j--;
        }
        if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
        }
      }
      return i;
    }

    // * алгоритм быстрой сортировки
    function quickSortAlgorithm(items, left, right) {
      let index;
      if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
          quickSortAlgorithm(items, left, index - 1);
        }
        if (index < right) {
          quickSortAlgorithm(items, index, right);
        }
      }
    }
    quickSortAlgorithm(arr);
  },

  // * выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    console.log(sortTime);
  },
};

// * инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

// * кнопка "Сменить алгоритм сортировки" ('bubbleSort' / 'quickSort')
sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
  sortKind = sortKind === 'bubbleSort' ? 'quickSort' : 'bubbleSort';
  sortKindLabel.textContent = sortKind;
  sortTimeLabel.textContent = '-';
});

// * кнопка "Cортировать"
sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  sortTimeLabel.textContent = 'sorting...';
  console.log(sortTimeLabel.textContent);
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  console.log(sortKind);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  if (kindInput.value != '' && colorInput.value != '' && weightInput.value != '') {
    fruits.push({
      "kind": kindInput.value,
      "color": colorInput.value,
      "weight": weightInput.value
    });
    kindInput.value = '';
    colorInput.value = '';
    weightInput.value = '';
  } else {
    // console.log('Не заполнено одно или несколько полей для нового фрукта.')
    alert('Не заполнены данные для добавления нового фрукта!')
  }
  display();
});

/*** СБРОС ***/

// * заново формирует карточки фруктов из JSON (по индексу), очищает поля ввода
resetButton.addEventListener('click', () => {
  fruits = JSON.parse(fruitsJSON);
  display();
  maxWeightInput.value = '';
  minWeightInput.value = '';
  sortTimeLabel.textContent = '-';
  kindInput.value = '';
  colorInput.value = '';
  weightInput.value = '';
  console.log('Сделан сброс.')
});
