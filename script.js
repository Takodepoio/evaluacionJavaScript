let nombre = prompt('Dame tu nombre');

let edad = prompt('Dame tu edad');

edad = Number(edad);

let estudias = prompt('estudias si o no?');

if(estudias == 'si' || estudias == 'yes' || estudias == 'sí' ){
    estudias = true;
    console.log(`Hola soy ${nombre} y tengo ${edad} años y sí estudie`);    

    console.log(`${nombre} sí estudiaste, aprobaras la materia`);

    alert(`Hola soy ${nombre} y tengo ${edad} años y sí estudie`);

    alert(`${nombre} sí estudiaste, aprobaras la materia`);
} else if (estudias == 'no') {
    estudias = false;

    console.log(`Hola soy ${nombre} y tengo ${edad} años y no estudié`);

    console.log(`${nombre} voy a reprobar porque no estudie`);

    alert(`Hola soy ${nombre} y tengo ${edad} años y al parecer no estudie`);

    alert(`${nombre} no estudiaste, reprobaras la materia`);
} else {

    console.log(`Hola soy ${nombre} y tengo ${edad} y no entendí la pregunta más simple del mundo`);

    console.log(`${nombre} soy mensito`);

    alert(`Hola soy ${nombre} y tengo ${edad} y no entendí la pregunta más simple del mundo`);

    alert(`${nombre} eres mensito`);


}

