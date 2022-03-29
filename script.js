const teclas = document.querySelectorAll('.tecla');
let inputNum = document.getElementById('areacalculo');

teclas.forEach((index) => {
    index.addEventListener('click', function() {
        if(index.innerHTML === 'x') {
            index.innerHTML = '*'
        }
        num = index.innerHTML;
        
        if(index.innerHTML === '&lt;') {
            inputNum.innerHTML = inputNum.innerHTML.substring(0, inputNum.innerHTML.length -1)
        }
        else {
            if(index.innerHTML === '*') {
                index.innerHTML = 'x'
            }
    
            if (num === '=') {
                inputNum.innerHTML = eval(inputNum.innerHTML)
            } else{
                inputNum.innerHTML += num
            }
            if(num === 'C') {
                inputNum.innerHTML = ''
            }
        }
    })
});
