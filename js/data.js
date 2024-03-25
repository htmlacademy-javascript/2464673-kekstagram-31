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
  const arrayResult = [];
  for (let i = 0; i < qtt; i++) {
    const ind = getRandomInteger(1, 6);
    const randomCommentObject = createCommentObject(
      commentId,
      `img/avatar-${ind}.svg`,
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
  const arrayResultFinish = [];
  for (let i = 0; i < 25; i++) {
    const id = i + 1;
    arrayResultFinish.push(
      createPhotoObject(
        id,
        `photos/${id}.jpg`,
        getRandomArreyElement(DESCRIPTION),
        getRandomInteger(15, 200),
        getCommentObjectArrey(getRandomInteger(0, 30))
      )
    );
  }
  return arrayResultFinish;
}
export {createPhotoObjectArray};
