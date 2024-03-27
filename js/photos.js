import {createPhotoObjectArray} from './data.js';

const pictureContainer = document.querySelector('.pictures'); // контейнер для фото пользователей
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон
const photoObjectArray = createPhotoObjectArray();
const listFragment = document.createDocumentFragment(); //пока не разобралась с фрагментом

photoObjectArray.forEach(({id, url, description, comments, likes}) => {
  const similarPicture = pictureTemplate.cloneNode(true); // клонируем шаблон
  similarPicture.dataset.pictureId = id;
  similarPicture.querySelector('.picture__img').src = url;
  similarPicture.querySelector('.picture__img').alt = description;
  similarPicture.querySelector('.picture__comments').textContent = comments.length;
  similarPicture.querySelector('.picture__likes').textContent = likes;
  listFragment.append(similarPicture);
});

pictureContainer.append(listFragment); //вставляем клон шаблона в конец контейнера

export {pictureContainer, photoObjectArray};
