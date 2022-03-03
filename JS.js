var listaPalabras = ['ÑAÑAS','ANOLE','ANSAR','ANOTO','ANOTE','ANOTA','ANONA','ANOLO','ANOLA','ANSIA'];
// var PalabraBuscada = getRandomItem()
//var PalabraBuscada = "ayuda";
var PalabraBuscada;
var n = 0;
var intentos = 0;
var score = 0;

function ocultarCasillas() {
    for(let i=1;i<6;i++){
        $('#p' + i).css('display','none');
    }
}
function NoTab() {
    $(".input").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.input').focus();
        }
  });
}
function MostrarCasillas() {
    $('#p' + n).children().prop('disabled', true);
    n++;
    $('#p' + n ).css('display','block');
    
}
function ComprobarPalabra() {
    inputs = $('#p' + n).children();
    var palabra = [];
    var posicionesCorrectas = 0;
    for (i = 0; i < 5; i++) {
        palabra[i] = inputs.eq(i).val();
        for (j = 0; j < 5; j++) {
            console.log('PalabraBuscada[j]: ' + PalabraBuscada[j]);
            if (palabra[i] == PalabraBuscada[j]) {
                if (i == j) {
                    inputs.eq(i).css('background-color', '#198754');
                    posicionesCorrectas++;
                    if(posicionesCorrectas == 5) return true;
                    break;
                }
                else {
                    inputs.eq(i).css('background-color', '#ffc107');
                    }
            }
        }
    }
}

function palabraAleatoria() {
    var rand = Math.floor(Math.random() * listaPalabras.length);
    palabraBuscada = listaPalabras[rand];
    console.log(palabraBuscada);
}

function Ganar() {
    inputs = $('#p' + intentos).children();
        var palabra = [];
  for (i = 0; i < 5; i++) {
        palabra += inputs.eq(i).val();
    }

    if (palabra == palabraBuscada){
        let mensajeGanador = '<h2 class="alert alert-success text-center" role="alert">Enhorabuena, has ganado';
        mensajeGanador += '<br><button class="btn-success btn-sm" onclick="window.location.reload();">Volver a jugar</button></h2>';
        $('#mensaje').append(mensajeGanador);
        return true;
    } 
    else return false;
}
//function Perder(){
   
//    $('#p' + intentos).children().prop('disabled', true);
    
//    let mensajePerdedor = '<h2 class="alert alert-warning text-center" role="alert">Lo siento, no tienes más intentos';
//    mensajePerdedor += '<br><button class="btn-success btn-sm" onclick="window.location.reload();">Volver a jugar</button></h2>';
//    $('#mensaje').append(mensajePerdedor);
              
//}
