const maxValue = 100;
const minValue = 25;
const scaleStep = 25;

const scaleSmallerBtn = document.querySelector('.scale__control--smaller');//кнопка уменьшения масштаба
const scaleBiggerBtn = document.querySelector('.scale__control--bigger');//кнопка увеличения масштаба
const scaleValue = document.querySelector('.scale__control--value');//инпут, в котором стоит цифра текущего масштаба
const picturePreview = document.querySelector('.img-upload__preview').querySelector('img');//превью фотки


//-parseFloat() принимает строку в качестве аргумента и возвращает десятичное число
// не понимаю что здесть происходит
let currentValue = parseFloat(scaleValue.value);

//-функция, которая увеличивает превью
//Свойство style получает и устанавливает инлайновые стили элемента, то есть те, что записываются через HTML-атрибут style.
//метод transform() позволяет вам масштабировать, поворачивать, двигать и скручивать текущий контекст.
//НЕ понимаю почему parseFloat(scaleValue.value) не заментяется переменной currentValue
const scaleBiggerImg = () => {
  scaleValue.value = `${currentValue += scaleStep}%`;//в значение поля scaleValue записывается строка вида: 75% (число с процентом)
  picturePreview.style.transform = `scale(${parseFloat(scaleValue.value) / 100})`; //превьюшке добавляется css стиль непосредственно в HTML-разметку (style="transform: scale(0.5);")
};

//-функция, которая уменьшает превью
const scaleSmallerImg = () => {
  scaleValue.value = `${currentValue -= scaleStep}%`;
  picturePreview.style.transform = `scale(${parseFloat(scaleValue.value) / 100})`; // scale(75 / 100)
};

//функция - контроль, ограничивает увеличение превью
const scaleBiggerControl = () => {
  if(currentValue === maxValue) {
    return false;
  }
  scaleBiggerImg(); //запускает увеличение, если изначально размер меньше 100
};

//функция - контроль, ограничивает уменьшение превью
const scaleSmallerControl = () => {
  if(currentValue === minValue) {
    return false;
  }
  scaleSmallerImg();
};

scaleBiggerBtn.addEventListener('click', scaleBiggerControl);// подумать как удалять обработчики
scaleSmallerBtn.addEventListener('click', scaleSmallerControl);

export { picturePreview };
