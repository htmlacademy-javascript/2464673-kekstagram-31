import {createPhotoObject} from './util.js';
import {createCommentObject} from './util.js';
import {getRandomInteger} from './util.js';
import {getRandomArreyElement} from './util.js';
import {DESCRIPTION} from './util.js';
import {MESSAGES} from './util.js';
import {NAMES} from './util.js';

// переменная, которая хранит число id
let commentId = 0;

// функция, которая создает массив комментариев к фото
const getCommentObjectArrey = (qtt) => {
  let arrayResult = [];
  for (let i = 0; i < qtt; i++) {
    let randomCommentObject = createCommentObject(
      commentId,
      'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      getRandomArreyElement(MESSAGES),
      getRandomArreyElement(NAMES)
    );
    commentId++;
    arrayResult.push(randomCommentObject);
  }
  return arrayResult;
};

// функция, которая создает массив фото-объектов
function createPhotoObjectArray() {
  let arrayResultFinish = [];
  for (let i = 0; i < 25; i++) {
    let id = i + 1;
    arrayResultFinish.push(
      createPhotoObject(
        id,
        'photos/' + id + '.jpg',
        getRandomArreyElement(DESCRIPTION),
        getRandomInteger(15, 200),
        getCommentObjectArrey(getRandomInteger(0, 30))
      )
    );
  }
  return arrayResultFinish;
}
