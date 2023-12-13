let a = ''; // first number
let b = ''; // second number
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];   //массив action

// Экран
const out = document.querySelector('.calc-screen p')

// для знака ac 
function clearAll () {
    a =''; // first number and result 
    b = ''; // second number
    sign = ''; //знак
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

// Нажатие кнопки

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return; 
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;
    out.textContent = ''; //очистка экрана
    //получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата клавиша 0-9 или .

    // arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен. Если мы хотим проверить наличие элемента в массиве  и нет необходимости знать его индекс, предпочтительно использовать arr.includes
    if(digit.includes(key)){
        if(b === '' && sign === ''){
            a += key;
            console.log(a, b, sign)
            out.textContent = a;
        }
        else if(a!=='' && b!=='' && finish){

        }
        else{
            b += key;  
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    // если нажата клавиша + - / *
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;  // textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
        console.log(a, b, sign);
        return;
    }
    //нажата =
    if(key === '='){
        if(b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                if(b === '0'){
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}

