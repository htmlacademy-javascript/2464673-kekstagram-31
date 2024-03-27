import {pictureContainer} from './photos.js';
//переменные
const bigPictureSection = document.querySelector('.big-picture'); //большое окно, которое мы будем заполнять данными
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img img'); //адрес изображения
const likesCount = bigPictureSection.querySelector('.likes-count'); //Количество лайков
const commentsCountShow = bigPictureSection.querySelector('.social__comment-shown-count');//количество показанных комментариев
//const socialCommentTotalCount = bigPictureSection.querySelector('.social__comment-total-count'); //Общее количество комментариев к фотографии
const socialComments = bigPictureSection.querySelector('.social__comments'); //блок для комментариев
const socialCaption = bigPictureSection.querySelector('.social__caption'); //блок с опис комментариев
const socialCommentCount = bigPictureSection.querySelector('.social__comment-count'); //блок счетчик комментариев надо скрыть +hidden
const newCommentsLoader = bigPictureSection.querySelector('.comments-loader');//загрузка новых комментариев надо скрыть +hidden
const userModalCanselElement = bigPictureSection.querySelector('.big-picture__cancel'); //кнопка закрытия полноэкранного просмотра

//добавляем обработчик нажатия на крестик на большом фото
const onBigPictureCancelClick = () => {
  closePhoto();
};

//если мы нажали escape только в это случае делаем closePhoto
const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePhoto();
  }
};

//функция, которая заполняет большое фото
const openBigPicture = (pictureId) => {
  const currentPhoto = pictureContainer.find((photo) => photo.id === Number(pictureId)); //находим объект = id
  const socialCommentsFragment = document.createDocumentFragment();//создаем фрагмент - ящик для комментариев
  //дальше, заполняем адрес, лайки, комменты и пр.
  bigPictureImg.src = currentPhoto.url; //подставляем адрес картинки
  likesCount.textContent = currentPhoto.likes; // подставляем количество лайков
  commentsCountShow.textContent = currentPhoto.comments.length; // подставляем длину комментов
  socialComments.innerHTML = ''; // очищаем поле для комментов

  currentPhoto.comments.forEach((comment) => { //проходимся по комментариям через .forEach
    const userCommentElement = socialComments.cloneNode(true); //записываем в новую переменную клон блока комментов, не понимаю зачем клонировать
    userCommentElement.querySelector('.social__picture').src = comment.avatar; //добавляем аватар комментатора
    userCommentElement.querySelector('.social__picture').alt = comment.name; // добавляем имя комментатора
    userCommentElement.querySelector('.social__text').textContent = comment.message; //добавляем сам коммент

    socialCommentsFragment.append(userCommentElement);//добавляем заполненный li во фрагмент
  });

  socialComments.append(socialCommentsFragment); // дабавляем фрагмент в блок комментов

  socialCaption.textContent = currentPhoto.description; //добавляем описание
  socialCommentCount.classList.add('hidden');//скрываем блок счетчиков
  newCommentsLoader.classList.add('hidden');//скрываем блок загрузки новых комментариев

  bigPictureSection.classList.remove('hidden'); // открываем большое окно для просмотра фото
  userModalCanselElement.addEventListener('click', onBigPictureCancelClick); //навешиваем обработчик по клику на крестик закрытия фото
  document.body.classList.add('modal-open'); //добавляем класс, чтобы не прокручивался фон
  document.addEventListener('keydown', onEscKeydown);// добавляем обработчик событий для закрытия фото по нажатию esc
};


// основная функция, которая открывает. на контейнер где все фото вешаем обработчик с target
const openPicture = () => {
  pictureContainer.addEventListener('click', (evt) => {
    //проверка, что точно нажали по пикчер либо на эл внутри по отношению к нему
    const currentPhoto = evt.target.closest('.picture');

    //проверка - тот ли элемент
    if (currentPhoto) {
      evt.preventDefault();
      //если trye тогда вызываем функцию и добавляем по id (data-picture-id (html)  === dataset.pictureId (js)
      openBigPicture(currentPhoto.dataset.pictureId);
    }
  });
};


//функция закрытия большого фото
function closePhoto() {
  bigPictureSection.classList.add('hidden'); //добавляем класс, который скрывает окно
  userModalCanselElement.removeEventListener('click', onBigPictureCancelClick); // удаляем обработчик закрытия по клику на крестик
  document.removeEventListener('keydown', onEscKeydown); // удаляем обработчик закрытия по нажатию esc
}


export { openPicture };
