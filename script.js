let input = document.querySelector('.txt');
const button = document.querySelector('.but');
const button2 = document.querySelector('.corbut')
button2.style.display = 'none';

button.onclick = function(){
    let b = input.value;
    if (b !== 'ordinary guy'){
        document.querySelector('.txt').value = "";
        alert ("Неправильный пароль!");
    }
    else {
        alert ("Правильно!?");
        input.style.display = 'none';
        button.style.display = 'none';
        button2.style.display = '';
    }
}