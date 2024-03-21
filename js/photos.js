import {createPhotoObjectArray} from './data.js';

const pictureContainer = document.querySelector('.pictures'); // контейнер для фото пользователей
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон
const photoObjectArray = createPhotoObjectArray();
const listFragment = document.createDocumentFragment(); //пока не разобралась с фрагментом

photoObjectArray.forEach((photo) => {
  const similarPicture = pictureTemplate.cloneNode(true); // клонируем шаблон
  similarPicture.querySelector('.picture__img').src = photo.url;
  similarPicture.querySelector('.picture__img').alt = photo.description;
  similarPicture.querySelector('.picture__comments').textContent = photo.comments.length;
  similarPicture.querySelector('.picture__likes').textContent = photo.likes;
  listFragment.append(similarPicture);
});

pictureContainer.append(listFragment); //вставляем клон шаблона в конец контейнера

export {pictureContainer};
