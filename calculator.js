let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

for (item of btn) {
  item.addEventListener('click', (e) => {
    btntext = e.target.innerText;
    if (btntext == 'x') {
      btnText = '*';
    }

    if (btntext == '÷') {
      btntext = '/'
    }
    
    if (btntext == 'AC') {
      screen.value = "";
      btntext = "";
    }
    screen.value += btntext;
  })
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value,2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function exp() {
  screen.value = Math.exp(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value,2);
}

function pi() {
  screen.value = Math.PI;
}

function e() {
  screen.value = Math.E;
}

function fact() {
  let i, num, f;
  f = 1;
  num=screen.value;
  for(i=1; i <= num; i++)  
  {
    f=f*i;
  }
  i = i - 1;
  
  screen.value = f;
}

function backspace() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function round() {
  screen.value = Math.round(screen.value);
}

function floor() {
  screen.value = Math.floor(screen.value);
}

function ceil() {
  screen.value = Math.ceil(screen.value);
}

function random() {
  screen.value = Math.random();
}

function clear() {
  screen.value = "";
}

  function equal(){
    var splitScreen = screen.value.split('%',2);
    if(splitScreen.length > 1){
        screen.value=eval(splitScreen[0] + '/100*' + splitScreen[1]);
    }else{
        screen.value=eval(screen.value);
    }
}
