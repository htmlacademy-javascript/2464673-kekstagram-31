

// функция для проверки строки
const checkLength = (string, lengthMax) => string.length <= lengthMax;

сonsole.log(checkLength('стронгjhtgyu', 32));




// функция для проверки на палидром
const isPalindrome = (string) => {

  string = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for(let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return string === reversed;
};

console.log(isPalindrome('топот'));

