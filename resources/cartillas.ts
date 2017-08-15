/**
 * name
 */
class HolaMundo {
    fichas:{
        mes: number,
        fichasSemanas: {
            semana: number,
            objetivos: {
                tipo:'VidaFamilia'|'JugandoAprendo'|'CuentameCuento',
                titulo:string,
                numcard:number,
                logros:string[],
                flag:boolean
            }[],
        }[]
    }[];
    constructor(parameters) {
        console.log("hola mundo");
        this.fichas = [
            {
                mes:1,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:1,titulo:'OBSERVO A MI BEBE',logros:[],flag:false}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:2,titulo:'¿CÓMO CALMO A MI BEBE?',logros:[],flag:false}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:3,titulo:'¿COMO ES MI BEBE?',logros:[],flag:false}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:4,titulo:'CONVERSO CON MI BEBE',logros:[],flag:false}
                        ]
                    }
                ]
            },
            {
                mes:2,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:5,titulo:'ME GUSTA  QUE MAMA ME ABRACE',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:94,titulo:'JUEGA CON TU BEBE DEMOSTRÁNDOLE TU AMOR Y CARIÑO',logros:['Mamá juega con su bebe demostrándole amor : cargándolo, arrullándolo, meciéndolo despacio demostrando alegría y entusiasmo'],flag:true},
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:6,titulo:'ME GUSTA  CUANDO CANTAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:95,titulo:'¿COMO TE PERCIBE TU BEBÉ?',logros:['Mamá atiende tranquila a su bebe y lo hace sentir bien.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:8,titulo:'EL SUEÑO DE TU BEBE',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:96,titulo:'MI  BEBE ME ESCUCHA SIEMPRE',logros:['El bebé se siente feliz cuando escucha a mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:7,titulo:'ME GUSTA TU DELICADEZA',logros:[],flag:false},
                            {tipo:'VidaFamilia',numcard:94,titulo:'JUEGA CON TU BEBE DEMOSTRÁNDOLE TU AMOR Y CARIÑO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:94,titulo:'JUEGA CON TU BEBE DEMOSTRÁNDOLE TU AMOR Y CARIÑO',logros:['El bebé se siente feliz cuando escucha a mamá.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:3,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:10,titulo:'IMITAR LOS SONIDOS QUE HACE MI BEBE',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:97,titulo:'JUGANDO CON MÍ BEBE.',logros:['El niño/a fija su mirada con muchos interés en los objetos que están cerca de él.','Observa con interés las actividades que realizan las personas a su alrededor','Explora el ambiente en confianza según sus posibilidades'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:10,titulo:'IMITAR LOS SONIDOS QUE HACE ÉL BEBE',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:98,titulo:'MIS OJITOS',logros:['Sigue con la mirada a su cuidador o lo objetos que se le muestra.','Expresa sus emociones, deseos y/o necesidades utilizando variados movimientos corporales y gestuales (agita brazos, estira piernas, mueve cabeza, frunce el ceño)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:11,titulo:'¡BUUU!',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:99,titulo:'MANITO  MANITO',logros:['Reconoce los gestos, la voz de su cuidador y sonidos familiares, respondiendo con la mirada, mímica o movimientos.','Mueve libremente y con energía brazos y piernas (p.e. juega activamente con manos y pies)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:11,titulo:'¡BUUU!',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:100,titulo:'SUENA LA SONAJA',logros:['El niño/a busca la sonaja con la mira o movimientos, sonidos o gestos frente al sonido de la misma.','Mueve libremente y con energía brazos y piernas (p.e. juega activamente con manos y pies)','Coge objetos pequeños (que entran en su mano) utilizando la presión palmar'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:4,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:12,titulo:'CARAS GRACIOSAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:101,titulo:'QUIERO TOCAR LO QUE VEO',logros:['El niño/a Intenta alcanzar objetos con su mano, aunque aún no pueda sujetarlos.','Estira sus brazos para alcanzar objetos que llamen su atención'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:12,titulo:'CARAS GRACIOSAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:102,titulo:'OBSERVO  MI ENTORNO',logros:['El niño/a gira la cabeza o cuerpo  para seguir le movimiento del juguete que la mama le presenta','Observa con interés las actividades que realizan las personas a su alrededor.','Expresa sus emociones, deseos y/o necesidades utilizando variados movimientos corporales y gestuales (agita brazos, estira piernas, mueve cabeza, frunce el ceño)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:13,titulo:'DESCUBRO MI CUERPO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:103,titulo:'AGARRAR Y SOLTAR',logros:['El niño/a  sostiene la sonaja por un momento breve.','El bebe sostiene y mueve la sonaja por unos segundos.','Manipula objetos que tiene en sus manos vivenciando espontáneamente las características de los objetos: forma, peso, textura, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:13,titulo:'DESCUBRO MI CUERPO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:104,titulo:'EXPLORAR LA SONAJA',logros:['El niño/a coge la sonaja y se lo lleva a la boca para chuparla o morderla','El niño/a sostiene y mueve la sonaja por unos segundos.','Coge objetos pequeños (que entran en su mano) utilizando la prensión palmar.','Manipula objetos que tiene en sus manos vivenciando espontáneamente las características de los objetos: forma, peso, textura, temperatura'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:5,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:14,titulo:'MIS PRIMEROS DESCUBRIMIENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:105,titulo:'ALCANZAR LA SONAJA QUE ESTÁ LEJOS',logros:['Intenta alcanzar objetos con su mano, cuando su mama se lo muestra.','Estira sus brazos para alcanzar objetos que llamen su atención','Coge objetos pequeños (que entran en su mano) utilizlando la prensión palmar','Coge objetos que están a su alcance con ambas manos y se lo lleva a la boca.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:14,titulo:'MIS PRIMEROS DESCUBRIMIENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:106,titulo:'DESCUBRO EL ARO DE JEBE',logros:['El niño/a coge el aro y se lo lleva a la boca para chuparlo o morderlo.','Estira sus brazos para alcanzar objetos que llamen su atención','Coge objetos pequeños (que entran en su mano) utilizando la prensión palmar.','Intenta alcanzar objetos con su mano, aunque aún se le escapen'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:15,titulo:'METO  MIS MANOS Y MIS PIES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:107,titulo:'HAGO SONAR LA SONAJA',logros:['El niño/a  coge la sonaja y la mueve para que suene.','Estira sus brazos para alcanzar objetos que llamen su atención','Coge objetos que están a su alcance con ambas manos y se lo lleva a la boca','Manipula objetos que tiene en sus manos vivenciando espontáneamente las características de los objetos: forma, peso, textura, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:15,titulo:'METO  MIS MANOS Y MIS PIES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:107,titulo:'HAGO SONAR LA SONAJA',logros:['Produce con los objetos diversos sonidos que le son agradables','Estira sus brazos para alcanzar objetos que llamen su atención.','Coge objetos que están a su alcance con ambas manos y se lo lleva a la boca'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:6,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:16,titulo:'COSQUILLITAS Y PATADITAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:108,titulo:'DISFRUTAMOS DE LA MÚSICA  JUNTOS',logros:['El niño/a se divierte en los brazos de mama al ritmo de la música que ella le canta.','Reconoce a la persona que lo cuida.','Ubica fácilmente la procedencia de un sonido (voltea la cabeza, se desplaza hacia él)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:16,titulo:'COSQUILLITAS Y PATADITAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:109,titulo:'MIRA COMO RUEDA',logros:['El niño/a observa la botella que su cuidador hacer rodar delante de él.','Observa con interés las acciones que realizan las personas a su alrededor (niños jugando, personas conversando, etc.).'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:17,titulo:'SIENTO  EL AGUA Y EL JABÓN',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:110,titulo:'¡ENCUÉNTRAME¡',logros:['El niño/a se divierte y expresa emociones cuando la mama se tapa o destapa la cara.','Reconoce a la persona que lo cuida.','Pasa un objeto de una mano a otra.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:17,titulo:'SIENTO  EL AGUA Y EL JABÓN',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:111,titulo:'AGITO LAS MARACAS',logros:['El niño/a coge y explora las marcas, las hace sonar o se las lleva a la boca.','Observa con interés las acciones que realizan las personas a su alrededor (niños jugando, personas conversando, etc.)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:112,titulo:'SALUDO AL BEBE',logros:['El niño/a observa con atención el juego que el cuidador hace con los títeres','Observa con interés las acciones que realizan las personas a su alrededor (niños jugando, personas conversando, etc.).','Pasa un objeto de una mano a otra.','Ubica fácilmente la procedencia de un sonido (voltea la cabeza, se desplaza hacia él)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:7,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:18,titulo:'MMMM, ¿QUÉ ES?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:113,titulo:'GOLPEO EL ARO',logros:['El niño/a observa cómo se mueve el aro e intenta o lo alcanza a golpear  con la mano.','Observa con interés las acciones que realizan las personas a su alrededor (niños jugando, personas conversando, etc.)','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Pasa un objeto de una mano a otra'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:18,titulo:'MMMM, ¿QUÉ ES?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:114,titulo:'TE VEO  Y NO TE VEO',logros:['El niño/a se divierte y juega con su mama a taparse la cara con el pañuelo','Reconoce a la persona que lo cuida.','Se pasa un objeto de una mano a otra.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:19,titulo:'ME GUSTAN TUS CARICIAS TU VOZ',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:115,titulo:'AGITAR LA SONAJA CON FUERZA',logros:['El niño/a hace sonar la sonaja moviéndola en diferentes direcciones','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:116,titulo:'SACO LOS CUBOS DEL RECIPIENTE',logros:['El niño/a Introduce y saca objetos pequeños de un recipiente (con todos los dedos)','Pasa un objeto de una mano a otra.','Recoge objetos pequeños arrastrando los dedos (movimientos rastrillo).','Realiza diversas acciones con y entre los objetos:  los golpea entre sí, los frota, los saca y los mete de un recipiente, etc.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:19,titulo:'ME GUSTAN TUS CARICIAS TU VOZ',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:116,titulo:'SACO LOS CUBOS DE RECIPIENTE',logros:['Introduce y saca objetos pequeños de un recipiente (con todos los dedos)','Pasa un objeto de una mano a otra.','Recoge objetos pequeños arrastrando los dedos (movimientos rastrillo).','Realiza diversas acciones con y entre los objetos:  los golpea entre sí, los frota, los saca y los mete de un recipiente, etc.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:8,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:20,titulo:'SE QUIÉNES SON',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:117,titulo:'ATRAPO EL ARO',logros:['El niño/a Se desplaza intentado coger el aro','Observa la trayectoria de los objetos que lanza o deja caer experimentando (de manera intuitiva) la noción de profundidad.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Observa con interés las actividades que realizan las personas a su alrededor (niños jugando, personas conversando, etc.)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:20,titulo:'SE QUIÉNES SON',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:118,titulo:'JUGANDO CON LA PELOTA DE TRAPO',logros:['El niño/a de desplaza  intentado coger la pelota','Observa la trayectoria de los objetos que lanza o deja caer experimentando (de manera intuitiva) la noción de profundidad.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:119,titulo:'¿A DÓNDE SE FUE MI JUGUETE?',logros:['El niño/a se encuentra el juguete que está escondido debajo del pañuelo','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:21,titulo:'CUÉNTAME HISTORIAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:120,titulo:'VOLTEO EL RECIPIENTE CON LOS CUBOS',logros:['El niño/a voltea el recipiente para que caigan los cubos.','Pasa un objeto de una mano a otra.','Observa la trayectoria de los objetos que lanza o deja caer experimentando (de manera intuitiva) la noción de profundidad.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:22,titulo:'NUESTRAS CANCIONES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:121,titulo:'GOLPEO LAS MARACAS COMO TAMBOR',logros:['El niño/a golpea las maracas contra un recipiente como si fuera tambor y se divierte con los sonidos que hace.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Pasa un objeto de una mano a otra.','Ubica fácilmente la procedencia de un sonido (voltea la cabeza, se desplaza hacia él).','Reacciona a través del movimiento y/o emitiendo sonidos al reconocer melodías conocidas (balancea su cuerpo, moviendo la cabeza)'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:9,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:23,titulo:'SUCIO O LIMPIO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:122,titulo:'ATRAPO LA PELOTA',logros:['El niño/a  atrapa o intenta atrapar la pelota.','Observa la trayectoria de objetos que lanza o deja caer experimentando (de manera intuitiva) la noción de profundidad.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El bebé disfruta la canción.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:23,titulo:'SUCIO O LIMPIO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:123,titulo:'RUEDO LA BOTELLA HACIA TI',logros:['El niño/a observa con atención e intenta coger la botella mientras rueda.','Pasa un objeto de una mano a otra.','Observa la trayectoria de objetos que lanza o deja caer experimentando (de manera intuitiva) la noción de profundidad.','Realiza diversas acciones con y entre los objetos: los golpea entre sí, los frota, los saca y los mete de un recipiente, etc.','Explora el ambiente con confianza, según sus posibilidades'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El niño/a  disfruta de la canción y trata de imitar algunos sonidos.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:24,titulo:'QUIERO TOCAR  LO QUE COMO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:124,titulo:'SACO AFUERA LOS BLOQUES',logros:['El niño/a saca los cubos del recipiente.','Recoge objetos pequeños arrastrando los dedos (movimientos de rastrillo).','Pasa un objeto de una mano a otra.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Realiza diversas acciones con y entre los objetos: los golpea entre sí, los frota, los saca y los mete de un recipiente, etc'],flag:true},
                            {tipo:'JugandoAprendo',numcard:125,titulo:'EL COLLAR DE AROS',logros:['El niño/a Explora los objetos con manos y/o boca.','Observa con interés las actividades que realizan las personas a su alrededor (niños jugando, personas conversando, etc.)','Pasa un objeto de una mano a otra.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:24,titulo:'QUIERO TOCAR  LO QUE COMO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:126,titulo:'APAREZCO Y DESAPAREZCO',logros:['Observa con atención a mamá, mientras esta hace aparecer y desaparecer al juguete.','Pasa un objeto de una mano a otra.','Explora los objetos con manos y/o boca descubriendo las características de los objetos por intuición:  textura, peso, forma, temperatura.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El niño señala imágenes que ve.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:10,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:25,titulo:'EXPLORO LOS OBJETOS DEL HOGAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:127,titulo:'JALO EL ARO',logros:['El niño/a jala el aro para acercarlo a él.','Explora los objetos con las manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Se ubica en el espacio y establece relaciones entre su cuerpo y los objetos: se dirige a alcanzar lo que desea, se meta en cajas, acomodando su cuerpo de acuerdo a sus posibilidades.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño  conoce y señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:25,titulo:'EXPLORO LOS OBJETOS DEL HOGAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:129,titulo:'EXPLORO DOS TEXTURAS DIFERENTES',logros:['El niño/a se mantiene sentado sin ayuda mientras juega con las pelotas.','Pasa un objeto de una mano a otra (6-9m).','Realiza diversas acciones con y entre los objetos: los golpea entre sí, los frota, los saca y los mete de un recipiente, etc. (6-9m).','Ubica fácilmente la procedencia de un sonido (voltea la cabeza, se desplaza hacia él) (6-9m).','Imita la entonación del adulto al escuchar conversaciones (6-9m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:128,titulo:'GATEO POR EL TÚNEL',logros:['Se desplaza gateando por el túnel.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Explora el ambiente con confianza, según sus posibilidades.','Se ubica en el espacio y establece relaciones entre su cuerpo y los objetos: se dirige a alcanzar lo que desea, se meta en cajas, acomodando su cuerpo de acuerdo a sus posibilidades.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El niño  conoce y señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:26,titulo:'ACCIONES DE CORTESÍA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:131,titulo:'GOLPEO LOS CUBOS',logros:['El niño/a golpe el cubo disfrutando de los sonidos que hace.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Escucha diversos sonidos e intenta imitarlos vocalizando con claridad dos sílabas ("dada", "papa", etc.).','Se mantiene sentado y sin ayuda mientras juega','Utiliza "sus" palabras otorgándoles significado.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño conoce y señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:26,titulo:'ACCIONES DE CORTESÍA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:126,titulo:'ATRAPO LA BOTELLA',logros:['El niño/a se dirige a alcanzar la botella mientras mama la va empujando.','Explora el ambiente con confianza, según sus posibilidades.','Explora los objetos con las manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Manipula un objeto para producir un resultado esperado para él, presiona una tecla, empuja una pelota para que ruede, suelta un objeto para escuchar el sonido, jala un mantel para alcanzar un objeto, golpea la torre con su mano para que caiga, etc.','Se desplaza gateando.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño conoce y señala imágenes que ve.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:11,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:22,titulo:'NUESTRAS CANCIONES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:132,titulo:'EL ARO SUBE Y BAJA',logros:['El niño/a Juega con el aro, subiéndolo y bajándolo.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Reconoce personas u objetos familiares buscándolas con la mirada cuando se las nombran.','Explora los objetos con las manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño  conoce y señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:22,titulo:'NUESTRAS CANCIONES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:133,titulo:'ENCUENTRO EL JUGUETE QUE NO VEO',logros:['El niño/a Encuentra el juguete escondido debajo del pañuelo','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Reconoce personas u objetos familiares buscándolas con la mirada cuando se las nombran.','Manipula un objeto para producir un resultado esperado para él, presiona una tecla, empuja una pelota para que ruede, suelta un objeto para escuchar el sonido, jala un mantel para alcanzar un objeto, golpea la torre con su mano para que caiga, etc.','Se mantiene sentado y sin ayuda mientras juega.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:134,titulo:'EL COLLAR Y EL RECIPIENTE',logros:['Introduce y saca el collar de un recipiente utilizando los dedos índice y pulgar.','Reconoce personas u objetos familiares buscándolas con la mirada cuando se las nombran.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Se mantiene sentado y sin ayuda mientras juega.','Manipula diversos recipientes interesándose en el interior de estos (noción de contenido) a partir de su propio cuerpo y diversos objetos: introduce su cabeza en una caja para observar su contenido, se mete dentro de una canasta, etc.'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['El niño  conoce y señala imágenes que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:27,titulo:'ME DIVIERTO CON LA MÚSICA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:135,titulo:'RUEDO EL TARRO',logros:['El niño/a rueda el tarro para que haga sonido y disfruta del mismo.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Se para con apoyo.','Da algunos pasos hacia adelante con apoyo.','Escucha diversos sonidos e intenta imitarlos vocalizando con claridad dos sílabas ("dada", "papa", etc.).'],flag:true},
                            {tipo:'CuentameCuento',numcard:-1,titulo:'LIBRO DE TELA',logros:['Disfruta de canciones que mama le canta'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:27,titulo:'ME DIVIERTO CON LA MÚSICA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:128,titulo:'GATEO POR EL TÚNEL',logros:['Se desplaza gateando por el túnel.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Explora el ambiente con confianza según sus posibilidades.','Explora los objetos con las manos y/o boca descubriendo las características de los objetos por intuición: textura, peso, forma, temperatura.','Se ubica en el espacio y establece relaciones entre su cuerpo y los objetos: se dirige a alcanzar lo que desea, se mete en cajas acomodando su cuerpo de acuerdo a sus posibilidades.'],flag:true},
                            {tipo:'CuentameCuento',numcard:0,titulo:'CANCIÓN',logros:['El niño/a baila al compás de la música que mama le canta.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:12,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:28,titulo:'¿DÓNDE ESTÁ MÍ…?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:128,titulo:'GATEO POR EL TÚNEL',logros:['El niño/a  Se desplaza gateando por el túnel.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Explora el ambiente con confianza, según sus posibilidades.'],flag:true},
                            {tipo:'CuentameCuento',numcard:256,titulo:'LOS OBJETOS- Libro 1',logros:['El niño/a observa con atención y señala objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:29,titulo:'DÉJAME INTENTARLO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:136,titulo:'ENCESTO LAS PELOTAS',logros:['Lanza objetos a distancia corta.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Manipula un objeto para producir un resultado esperado para él, presiona una tecla, empuja una pelota para que ruede, suelta un objeto para escuchar el sonido, jala un mantel para alcanzar un objeto, golpea la torre con su mano para que caiga, etc','Hace rodar una pelota con ambas mano.','Se ubica en el espacio y establece relaciones entre su cuerpo y los objetos: se dirige a alcanzar lo que desea, se mete en cajas acomodando su cuerpo de acuerdo a sus posibilidades'],flag:true},
                            {tipo:'CuentameCuento',numcard:241,titulo:'6 OBJETOS',logros:[' El niño observa y nombra algunos objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:30,titulo:'MI PLATO LLENO  Y DESPUÉS VACÍO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:133,titulo:'ENCUENTRO EL JUGUETE QUE NO VEO',logros:['Observa un objeto que se oculta debajo del pañuelo.','Reconoce personas u objetos familiares buscándolas con la mirada cuando se las nombran.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Se mantiene sentado y sin ayuda mientras juega.','Manipula un objeto para producir un resultado esperado para él, presiona una tecla, empuja una pelota para que ruede, suelta un objeto para escuchar el sonido, jala un mantel para alcanzar un objeto, golpea la torre con su mano para que caiga, etc.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'MIS EMOCIONES – Libro 2',logros:['El niño describe imágenes del cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:31,titulo:'CUENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:138,titulo:'JUEGO CON 6  CUBOS',logros:['El niño/a levanta el recipiente para encontrar el cubo que esta debajo del mismo.','Reconoce personas u objetos familiares buscándolas con la mirada cuando se las nombran.','Se mantiene sentado y sin ayuda mientras juega.','Manipula un objeto para producir un resultado esperado para él, presiona una tecla, empuja una pelota para que ruede, suelta un objeto para escuchar el sonido, jala un mantel para alcanzar un objeto, golpea la torre con su mano para que caiga, etc.','Señala un objeto conocido cuando se lo nombra.'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA 2: 9 OBJETOS - ',logros:[' El  niño mira y conoce objetos.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:13,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:32,titulo:'CONTAR HISTORIAS INVENTADAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:139,titulo:'COLOCO OBJETOS DENTRO DE LA BOTELLA',logros:['El niño coloca con precisión objetos dentro de la botella.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Imita acciones rutinarias que realiza el adulto (barrer, lavar, planchar, etc.)','Colabora colocando los objetos en su lugar cuanto se lo piden.'],flag:true},
                            {tipo:'CuentameCuento',numcard:256,titulo:'LIBRO 1: LOS OBJETOS',logros:['El  niño mira y conoce objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:33,titulo:'CADA COSA EN SU LUGAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:140,titulo:'EMPUJO  EL JUGUETE',logros:['Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: bordos, caminitos, etc.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'LIBRO 2 : MIS EMOCIONES',logros:['El niño reconoce sus emociones.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:34,titulo:'LA BASURA TAMBIÉN TIENE SU LUGAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:133,titulo:'ENCESTO LAS PELOTAS',logros:['Lanza la pelota hacia el recipiente desde una distancia corta.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:141,titulo:'EL TITERE APARECE Y DESAPARECE',logros:['El Niño/a busca el juguete escondido.','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.'],flag:true},
                            {tipo:'CuentameCuento',numcard:241,titulo:'LAMINA 1:6 OBJETOS',logros:['El  niño mira y conoce objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:35,titulo:'CUENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:138,titulo:'JUEGO CON 4 CUBOS',logros:['Encuentra los cubos ocultos','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA 2: 9 OBJETOS',logros:['El niño conoce objetos  y para qué sirven'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:14,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:36,titulo:'DE LAS ACCIONES A LAS PALABRAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:143,titulo:'ENCUENTRO  MI JUGUETE DEBAJO DEL PAÑUELO CORRECTO',logros:['Busca objetos totalmente ocultos','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:256,titulo:'LIBRO 1: LOS OBJETOS',logros:['El niño conoce objetos  y para qué sirven.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:37,titulo:' “HACER COMO SI …”',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:258,titulo:'ME ESCONDO',logros:['Se desplaza por el espacio y reconoce cuando está dentro o afuera.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:-2,titulo:'LIBRO 3:  LOS ANIMALES',logros:['El niño reconoce y nombra los animales que observa.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:38,titulo:'BAILAMOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:145,titulo:'RUEDO EL TARRO DISTINTOS SUPERFICIES',logros:['Rueda el tarro en diferentes superficies siguiendo indicaciones de mamá.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:241,titulo:'LAMINA 1:6 OBJETOS',logros:['El niño reconoce y nombra objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:39,titulo:'LOS ALIMENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:144,titulo:'ME ESCONDO',logros:['Se desplaza por el espacio y reconoce cuando está dentro o afuera','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota"'],flag:true},
                            {tipo:'JugandoAprendo',numcard:146,titulo:'HAGO TORRES DE 6 CUBOS',logros:['Coloca los cubos uno encima de otro','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA 2 : NUEVE  OBJETOS',logros:['El niño reconoce y nombra objetos, identificando para qué sirven.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:15,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:40,titulo:'¿QUÉ HACEN LAS PERSONAS?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:147,titulo:'SONIDO… SILENCIO',logros:['El niño controla el movimiento de las maracas identificando el sonido y silencio.','Comprende el sentido del NO (p.e. detiene una acción cuando se le dice NO).'],flag:true},
                            {tipo:'JugandoAprendo',numcard:146,titulo:'HAGO TORRES CON SEIS CUBOS',logros:['Coloca los cubos uno encima de otro','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".','Utiliza palabras o fragmentos de palabra para designar personas u objetos conocidos: "Tata" para indicar abuelo, "pan" cuando quiere pan, etc.','Señala un objeto conocido cuando se lo nombra (10-12 m)','Utiliza "sus" palabras otorgándoles significado  (10-12 m).'],flag:true},
                            {tipo:'CuentameCuento',numcard:256,titulo:'LIBRO 1: LOS OBJETOS',logros:['El niño reconoce y nombra  objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:41,titulo:'NUESTRAS DANZAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:148,titulo:'ENCAJO EL VASO PEQUEÑO DENTRO DEL MAS GRANDE',logros:['Encaja el vaso pequeño dentro del vaso grande.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Intenta hacer cosas por sí mismo (ej. Intenta guardar los juguetes, abrocharse el abrigo aunque no lo logre, quitarse la ropa, abrir el lavamanos, manejar la cuchara, beber de una taza, etc.).','Realiza movimientos de mayor precisión con sus manos.  P.E. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:140,titulo:'EMPUJO EL JUGUETE',logros:['Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: bordos, caminitos, etc.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Utiliza palabras o fragmentos de palabra para designar personas u objetos conocidos: "Tata" para indicar abuelo, "pan" cuando quiere pan, etc.','Señala un objeto conocido cuando se lo nombra (10-12 m).','Utiliza "sus" palabras otorgándoles significado  (10-12 m).'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA 2 : NUEVE  OBJETOS',logros:['El niño aprende el nombre de los objetos y para qué sirven.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:42,titulo:'CARITA REDONDA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:149,titulo:'LLENAMOS TODAS LAS BOTELLAS',logros:['Llena la botella con mucha precisión haciendo uso de objetos de diferente tamaño.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA  3:DOCE  OBJETOS',logros:['El niño reconoce animales y objetos  de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:43,titulo:'ESPEJITO ESPEJITO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:150,titulo:'ROMPECABEZAS 1',logros:['Encaja las piezas del rompe cabezas.','-Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Realiza movimientos de mayor precisión con sus manos.  P.E. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'CuentameCuento',numcard:258,titulo:'LIBRO 3 : LOS ANIMALES',logros:['El niño escucha y reconoce sonidos de los animales de su entorno.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:16,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:40,titulo:'¿QUÉ HACEN LAS PERSONAS?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:151,titulo:'ENSARTO LOS AROS',logros:['Ensarta los aros en el tubo siguiendo indicaciones de mama.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Realiza movimientos de mayor precisión con sus manos.  P.E. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:152,titulo:'HAGO TORRES CON OCHO CUBOS',logros:['Coloca 08 cubos uno encima de otro','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA 3:DOCE OBJETOS',logros:['El niño reconoce y menciona  animales y objetos de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:41,titulo:'NUESTRAS DANZAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:153,titulo:'ARRASTRO EL GUSANO',logros:['Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: bordos, caminitos, etc. Jalando el gusanito.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'JugandoAprendo',numcard:151,titulo:'ENSARTO  LOS AROS',logros:['Ensarta los aros en el tubo con precisión siguiendo indicaciones de mama.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Realiza movimientos de mayor precisión con sus manos.  P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA 2 : NUEVE  OBJETOS',logros:['El niño conoce y mencionan  objetos y para qué sirven.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:42,titulo:'CARITA REDONDA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:154,titulo:'JALO EL COLECTIVO',logros:['Imita sonidos de animales y objetos que conoce):  guau, titi, etc','Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: Césped, arena, etc.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'JugandoAprendo',numcard:153,titulo:'ARRASTRO EL GUSANO',logros:['Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: bordos, caminitos, etc. Jalando el gusanito ','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:248,titulo:'LIBRO  3 : LOS ANIMALES',logros:['El niño escucha y conoce sonidos de los animales de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:43,titulo:'ESPEJITO ESPEJITO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:155,titulo:'CUIDO AL BEBE Y RECONOZCO LAS PARTES DEL CUERPO',logros:['Reconoce y señala  partes de su cuerpo y de otra persona.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'JugandoAprendo',numcard:144,titulo:'ME ESCONDO',logros:['Se desplaza por el espacio y reconoce cuando está dentro o afuera ','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'LIBRO 2 : MIS EMOCIONES',logros:['El niño reconoce sus  emociones.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:17,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:40,titulo:'¿QUÉ HACEN LAS PERSONAS?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:156,titulo:'MI JUGUETE DEBAJO DE LOS PAÑUELOS',logros:['El niño busca los juguetes debajo de los pañuelos','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'JugandoAprendo',numcard:152,titulo:'HAGO TORRES CON OCHO CUBOS',logros:['Coloca 08 cubos uno encima de otro','Señala un objeto conocido cuando se lo nombra (10-12 m)','Utiliza "sus" palabras otorgándoles significado  (10-12 m)','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'CuentameCuento',numcard:256,titulo:'LIBRO 1: LOS OBJETOS',logros:['El niño conoce y nombra  objetos.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:41,titulo:'NUESTRAS DANZAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:157,titulo:'RUEDO LAS PELOTAS POR EL TUBO',logros:['Realiza movimientos de mayor precisión con sus manos.  P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan','Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: Césped, arena, etc.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:158,titulo:'ROMPECABEZAS 2',logros:['El niño encaja las piezas del rompe cabezas','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Realiza movimientos de mayor precisión con sus manos.  P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.','Mantiene la atención cuando le narran cuentos muy cortos.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'LIBRO 2 : MIS EMOCIONES',logros:['El niño reconoce emociones a través de diversos gestos.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:42,titulo:'CARITA REDONDA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:159,titulo:'ENCAJO EL CUBO PEQUEÑO DENTRO DEL GRANDE',logros:['Encaja el vaso pequeño dentro del vaso grande.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Intenta hacer cosas por sí mismo (ej. Intenta guardar los juguetes, abrocharse el abrigo aunque no lo logre, quitarse la ropa, abrir el lavamanos, manejar la cuchara, beber de una taza, etc.)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:136,titulo:'ENCESTO LAS PELOTAS',logros:['El niño lanza la pelota hacia el cesto desde una distancia corta','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: Césped, arena, etc.','Lanza objetos a distancia corta (10-12 m).'],flag:true},
                            {tipo:'CuentameCuento',numcard:242,titulo:'LAMINA :2 NUEVE OBJETOS',logros:[' El niño aprende el nombre de los objetos y para qué sirven.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:43,titulo:'ESPEJITO ESPEJITO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:160,titulo:'EMPUJO EL JUGUETE HACIENDO ”VRUM”',logros:['Imita sonidos de animales y objetos que conoce:  guau, titi, etc','Se desplaza caminando y manteniendo el equilibrio, sobre diferentes superficies: césped, arena, etc.','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota".'],flag:true},
                            {tipo:'JugandoAprendo',numcard:158,titulo:'ROMPECABEZAS 2',logros:['Encaja las piezas del rompecabezas.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Pasa páginas gruesas de un libro 2 ó 3 a la vez.','Mantiene la atención cuando le narran cuentos'],flag:true},
                            {tipo:'CuentameCuento',numcard:258,titulo:'LIBRO 3 :LOS ANIMALES',logros:['El niño escucha y conoce sonidos de los animales de su entorno.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:18,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:44,titulo:'FUERA DEL PAÑAL',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:161,titulo:'ARRIBA LAS MARACAS',logros:['El niño imita los movimientos que hace mama usando las marcas y se divierte con ellas moviéndola en diferentes direcciones.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'LIBRO 2 : MIS EMOCIONES',logros:['El niño reconoce emociones a través de diversos gestos '],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:45,titulo:'CONOZCO LAS PARTES  DE MI CUERPO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:162,titulo:'COLOCA  Y SACA TODOS LOS OBJETOS DE LA BOTELLA',logros:['El niño coloca objetos diferentes en la botella cuando su mama le indica.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA 3 : DOCE OBJETOS',logros:[' El niño reconoce los animales y objetos de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:46,titulo:'CADA  PARTE HACE ALGO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:163,titulo:'ENCAJO DOS CUBOS Y DOS VASOS LÓGICOS',logros:['El niño encaja el cubo chico en el cubo grande y el vaso chico en el vaso grande.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Intenta hacer cosas por sí mismo (ej. Intenta guardar los juguetes, abrocharse el abrigo aunque no lo logre, quitarse la ropa, abrir el lavamanos, manejar la cuchara, beber de una taza, etc.)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:158,titulo:'ROMPECABEZAS 2 FLORES EN UNA MACETA',logros:['Encaja las piezas del rompe cabezas','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Realiza movimientos de mayor precisión con sus manos.  P.E. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'CuentameCuento',numcard:259,titulo:'LIBRO 4: EL BEBE TIENE HAMBRE',logros:['El niño escucha historias sencillas de la vida cotidiana.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:47,titulo:'IGUALES Y DIFERENTES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:164,titulo:'JALO EL GUSANO HACIA MI',logros:['Resuelve problemas utilizando sus experiencias previas','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan'],flag:true},
                            {tipo:'CuentameCuento',numcard:258,titulo:'LIBRO 3 :LOS ANIMALES',logros:['El niño escucha y reconoce sonidos de los animales de su entorno.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:19,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:47,titulo:'IGUALES  Y DIFERENTES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:165,titulo:'LANZO LAS ALMOHADAS',logros:['Lanza las almohadas hacia el cesto.','Diferencia características notorias entre los objetos: grande-pequeño, duro-blando, frío-caliente'],flag:true},
                            {tipo:'CuentameCuento',numcard:244,titulo:'LAMINA 4 : QUINCE OBJETOS',logros:['El niño nombra los alimentos que ve.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:48,titulo:'LO QUE ES IGUAL LO PONEMOS JUNTO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:166,titulo:'ROMPECABEZAS 3:',logros:['Encaja las piezas del rompecabezas','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Reconoce objetos cotidianos y significativos en ilustraciones'],flag:true},
                            {tipo:'CuentameCuento',numcard:260,titulo:'LIBRO 5 : EL POLO SUCIO',logros:['El niño escucha una historia sobre  limpio, sucio y mojado.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:49,titulo:'ESTO ES GRANDE  Y ESTO ES PEQUEÑO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:167,titulo:'MIS CARRITOS “VRUM, VRUM”',logros:['Imita el sonido de los carritos mientras juega con ellos.','Juega cerca a otros niños realizando acciones similares o utilizando materiales','Imita sonidos onomatopéyicos (de animales y objetos que conoce): guau, guau, titi, etc. (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:168,titulo:'¿CÓMO HACEN LOS ANIMALES?',logros:['Imita el sonido que hace los animales que él conoce.',' Imita sonidos onomatopéyicos (de animales y objetos que conoce): guau, guau, titi, etc. (13-18 m)','Se mantiene sentado y sin apoyo mientras juega (10-12 m'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA 3 : DOCE OBJETOS',logros:['El niño reconoce  características  de los animales y objetos de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:50,titulo:'DIGO EL NOMBRE DE LOS ALIMENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:169,titulo:'PASEO EN EL COLECTIVO',logros:['El niño representa actividades de su vida diaria jugando en el colectivo','Realiza movimientos de mayor precisión con sus manos. P.e. abotona, desabotona, sube y baja cierres, arruga papeles, , troza con ambas manos','Encaja varias piezas en un tablero, adecuando sus manos y dedos'],flag:true},
                            {tipo:'JugandoAprendo',numcard:166,titulo:'ROMPECABEZAS 3',logros:['El niño encaja las piezas del rompecabezas.','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Reconoce objetos cotidianos y significativos en ilustraciones'],flag:true},
                            {tipo:'JugandoAprendo',numcard:170,titulo:'HAGO UNA FILA DE CUBOS',logros:['El niño hace una fila con los cubos y lo empuja hacia adelante.','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, maneja el carro, carga la wawa en la lliclla, etc) utilizando objetos diversos para completar sus juegos de imitación.'],flag:true},
                            {tipo:'CuentameCuento',numcard:257,titulo:'LIBRO 2 MIS EMOCIONES',logros:['El niño reconoce emociones a través de diversos gestos.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:20,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:51,titulo:'DIGO LAS CARACTERÍSTICAS DE LOS ALIMENTOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:171,titulo:'MI JUGUETE EN EL PUÑO DE LA MAMA',logros:['El niño busca la mano de su mama, que está escondido debajo del pañuelo.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','En sus conversaciones se puede distinguir 10 palabras como mínimo','Comprende indicaciones sencillas realizando la acción: entrega la pelota ante la indicación "dame la pelota", busca la mano ante la indicación "búscala", etc. (13-18 m).'],flag:true},
                            {tipo:'CuentameCuento',numcard:260,titulo:'LIBRO 1 : POLO SUCIO',logros:['El niño escucha una historia sobre limpio, sucio y mojado.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:52,titulo:'LOS ALIMENTOS TIENEN COLOR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:162,titulo:'ME DIVIERTO JALANDO EL GUSANITO',logros:['Corre en distintas direcciones jalando el gusanito.','Jala los objetos de un lugar a otro.'],flag:true},
                            {tipo:'CuentameCuento',numcard:261,titulo:'LIBRO  6 :VAMOS A LA FERIA',logros:['El niño escucha una historia de la vida cotidiana'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:53,titulo:'ME AYUDAS A BARRER',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:173,titulo:'LOS ANIMALES HACEN UNA FILA',logros:['El niño coloca a los animales uno al lado de otro mencionando su nombre.','Pregunta el nombre de los objetos que acaba de conocer y los repite','En sus conversaciones se puede distinguir 10 palabras como mínimo.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:173,titulo:'¿A DÓNDE SE FUERON LOS ANIMALES?',logros:['Busca los animales, cuando su mama lo esconde.'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA 3 : DOCE OBJETOS',logros:['El niño reconoce los animales y objetos  de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:54,titulo:'ME AYUDAS A LIMPIAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:155,titulo:'CUIDO AL BEBE Y APRENDO LAS PARTES DEL CUERPO',logros:['Reconoce las partes gruesas y finas de su cuerpo','Demuestra sentido rítmico moviéndose espontáneamente ante la música.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:166,titulo:'ROMPECABEZAS 3',logros:['El niño encaja las piezas del rompecabezas.','Resuelve problemas utilizando sus experiencias previas: gira la manija para abrir una puerta, jala para destapar algo, encaja una pieza simple.','Reconoce objetos cotidianos y significativos en ilustraciones'],flag:true},
                            {tipo:'CuentameCuento',numcard:-3,titulo:'LIBRO 5 : ÉL BEBE TIENE HAMBRE',logros:['El niño escucha una historia '],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:21,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:55,titulo:'MI CUERPO SE ESTÁ MOVIENDO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:174,titulo:'ENCUENTRO MI JUGUETE DEBAJO DE  PAÑUELOS ARRUGADOS',logros:['Busca objetos conocidos aunque no los tenga a la vista.','Resuelve problemas utilizando sus experiencias previas.'],flag:true},
                            {tipo:'CuentameCuento',numcard:244,titulo:'LAMINA  4: 15 OBJETOS',logros:['El niño menciona características y utilidad de los alimentos.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:56,titulo:'CUANDO ME ASEO  APRENDO MÁS PARTES DE MI CUERPO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:175,titulo:'ENCAJO  TODOS LOS CUBOS Y LOS VASOS LÓGICOS',logros:['El niño encaja todos los cubos y vasos lógicos.','Realiza movimientos de mayor precisión con sus manos. P.e.: abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:177,titulo:'ROMPECABEZAS  4',logros:['Encaja las piezas del rompecabezas.','Encaja una pieza en una base fija (una figura con contorno regular) adecuando sus manos y dedos (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:260,titulo:'LIBRO  5: EL POLO SUCIO',logros:['El niño escucha una historia sobre limpio, sucio y mojado..'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:57,titulo:'MI ROPA TIENE COLOR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:176,titulo:'EL COLECTIVO AVANZA Y SE DETIENE',logros:['El niño jala el colectivo en diferentes direcciones.','Diferencia características notorias entre los objetos: grande-pequeño, duro-blando, frío-caliente.','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, maneja el carro, carga la wawa en la lliclla, etc.) utilizando objetos diversos para completar sus juegos de imitación.'],flag:true},
                            {tipo:'CuentameCuento',numcard:259,titulo:'LIBRO 4: EL BEBE TIENE HAMBRE',logros:[' El niño escucha historias de la vida cotidiana.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:58,titulo:'¿ESTÁ LLENO O VACÍO?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:157,titulo:'RUEDO LAS PELOTAS POR EL TUBO',logros:['El niño hace rodar la pelota por el tubo inclinado.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:177,titulo:'ROMPECABEZAS 4',logros:['Encaja piezas del rompecabezas.','Encaja una pieza en una base fija (una figura con contorno regular) adecuando sus manos y dedos (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:261,titulo:'LIBRO 6: VAMOS A LA FERIA',logros:['El niño  escucha  una historia sobre la vida cotidiana.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:22,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:59,titulo:'ENCUENTRO TESOROS POR DONDE CAMINO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:178,titulo:'EXPERIMENTANDO CON NOCIONES “ENCIMA  Y DEBAJO”',logros:['El niño coloca encima o debajo  de la mesa.','Muestra interés e iniciativa en la relación con los adultos, repitiendo acciones que le agradan.','Comprende indicaciones sencillas realizando la acción:  Entrega la pelota ante la indicación "dame la pelota", empuja el juguete, etc. (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:259,titulo:'LIBRO 4: ÉL BEBE TIENE HAMBRE',logros:['El niño  escucha  una historia sobre la vida cotidiana.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:60,titulo:'SIMÓN DICE…',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:173,titulo:'LOS ANIMALES  HACEN UNA FILA',logros:['El niño coloca a los animales uno al lado de otro mencionando su nombre.','Pregunta el nombre de los objetos que acaba de conocer y los repite.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:177,titulo:'ROMPECABEZAS  4',logros:['Encaja las piezas del rompecabezas.','Encaja una pieza en una base fija (una figura con contorno regular) adecuando sus manos y dedos (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:243,titulo:'LAMINA 3:12 OBJETOS',logros:['El niño reconozca  los animales y objetos  de su entorno.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:61,titulo:'OTRO SIMÓN DICE …',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:179,titulo:'CAMINO SIN  CHOCARME',logros:['El niño camina entre las almohadas sin chocarse','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, maneja el carro, carga la wawa en la lliclla, etc.) utilizando objetos diversos para completar sus juegos de imitación.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS BLOQUES  DE DIFERENTES  FORMAS',logros:['El niño diferencia el bloque según su tamaño.','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, maneja el carro, carga la wawa en la lliclla, etc.) utilizando objetos diversos para completar sus juegos de imitación.'],flag:true},
                            {tipo:'CuentameCuento',numcard:244,titulo:'LAMINA 4: 15 ALIMENTOS',logros:['El niño menciona    las características   de los alimentos.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:62,titulo:'LLAMEMOS A …',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:136,titulo:'ENCESTO LAS PELOTAS',logros:['Lanza la pelota hacia una dirección determinada','Lanza objetos a distancia corta (10-12 m'],flag:true},
                            {tipo:'JugandoAprendo',numcard:177,titulo:'ROMPECABEZAS 4',logros:['Encaja piezas del rompecabezas.','Encaja una pieza en una base fija (una figura con contorno regular) adecuando sus manos y dedos (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:181,titulo:'JUEGO CON DIEZ CUBOS',logros:['Coloca cubos uno encima de otro','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:260,titulo:'LIBRO 5: EL POLO SUCIO',logros:['El niño escucha  una historia sobre limpio, sucio y mojado.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:23,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:63,titulo:'VEO, VEO.',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:182,titulo:'EL  COLECTIVO VA LEJOS Y DEJA A TODOS LOS PASAJEROS',logros:['El niño representa actividades de su vida diaria jugando con el carrito.','Jala los objetos de un lugar a otro.'],flag:true},
                            {tipo:'CuentameCuento',numcard:244,titulo:'LAMINA 4: 15 OBJETOS',logros:['El niño menciona  las características de  animales.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:63,titulo:'VEO, VEO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:183,titulo:'ROMPECABEZAS 5',logros:['Encaja las piezas del rompecabezas','Diferencia características notorias entre los objetos: grande-pequeño, duro-blando, frío-caliente'],flag:true},
                            {tipo:'CuentameCuento',numcard:260,titulo:'EL POLO SUCIO',logros:['El niño sigue la secuencia  de la historia reconociendo  limpio, sucio y mojado.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:64,titulo:'MI BANDA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:184,titulo:'SOY FUERTE',logros:['El niño identifica la diferencia entre pesado y liviano','Camina manteniendo el equilibrio sobre diferentes planos sin caerse:  Inclinado, ondulado, etc.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:181,titulo:'JUEGO CON DIEZ CUBOS',logros:['Coloca cubos uno encima de otro','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:261,titulo:'LIBRO 6:VAMOS A LA FERIA',logros:['El niño  nombra los alimentos más comunes  y las acciones de ir a comprarlos.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:64,titulo:'MI BANDA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:185,titulo:'ME  DIVIERTO JALANDO EL GUSANITO RÁPIDO Y LENTO',logros:['Corre en distintas direcciones jalando el gusanito.','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:186,titulo:'ROMPECABEZAS 6',logros:['Coloca cubos uno encima de otro','En sus conversaciones se puede distinguir 10 palabras como mínimo.','Comprende indicaciones sencillas realizando la accion (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:259,titulo:'LIBRO 4: EL BEBE TIENE HAMBRE',logros:['El niño escucha historias y describe las situaciones  del  cuento.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:24,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:65,titulo:'JUGAMOS A BAÑAR LOS MUÑECOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:187,titulo:'DERRUMBO LA PARED',logros:['Lanza un objeto hacia la pared de cubos para derrumbarla.','Realiza movimientos de mayor precisión con sus manos. P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos'],flag:true},
                            {tipo:'JugandoAprendo',numcard:188,titulo:'TÍTERE CONVERSADOR',logros:['Se expresa por medio de frases de dos o tres palabras.','Conoce algunas reglas básicas aunque no siempre las sigue (p.e.: no empujar al amigo, esperar su turno, guardar al terminar de jugar)','En sus conversaciones se puede distinguir 10 palabras como mínimo'],flag:true},
                            {tipo:'CuentameCuento',numcard:245,titulo:'ESCENA 1: LA POSTA MEDICA',logros:['El niño reconoce las acciones realizadas en una posta médica y quienes trabajan ahí.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:66,titulo:'GRANDE  PEQUEÑO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:189,titulo:'HACEMOS UN SOBRE',logros:['Garabetea libremente.','Realiza movimientos de mayor precisión con sus manos. P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos'],flag:true},
                            {tipo:'JugandoAprendo',numcard:190,titulo:'¿DÓNDE ESTÁ MI  CARRO?',logros:['El niño representa actividades de su vida diaria jugando con el carrito.','Se desplaza por el espacio reconociendo la ubicación de los objetos (sabe dónde se guardan los juguetes, arriba-abajo la ubicación de los muebles).'],flag:true},
                            {tipo:'CuentameCuento',numcard:261,titulo:'LIBRO 6: VAMOS A LA FERIA',logros:['El niño  nombra los alimentos más comunes y las acciones de ir a comprarlos.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:67,titulo:'ESTO USA PAPA  Y ESTO USA MAMA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:191,titulo:'JUEGO  A COSTAR AL  BEBE',logros:['El niño representa actividades de su vida diaria jugando con el muñeco.','Reconoce las partes gruesas y finas de su cuerpo'],flag:true},
                            {tipo:'JugandoAprendo',numcard:192,titulo:'LOTERÍA  1: LA FLOR DE TAPAS',logros:['Agrupa objetos iguales.','Reconoce objetos cotidianos y significativos en ilustraciones.'],flag:true},
                            {tipo:'CuentameCuento',numcard:262,titulo:'LIBRO 7: MI DÍA',logros:['El niño identifica y reconoce las actividades que se realizan durante el día.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:68,titulo:'¿QUÉ RARO?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:193,titulo:'LA FLOR DE TAPAS',logros:['Resuelve problemas utilizando sus experiencias previas','Realiza movimientos de mayor precisión con sus manos. P.e. abotona, desabotona, sube y baja cierres, arruga papeles, troza con ambas manos.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:194,titulo:'ROMPECABEZAS 7',logros:['Encaja varias piezas en un tablero adecuando sus manos y dedos.','Reconoce las partes gruesas y finas de su cuerpo','En sus conversaciones se puede distinguir 10 palabras como mínimo.'],flag:true},
                            {tipo:'CuentameCuento',numcard:246,titulo:'ESCENA 2:LA CHACRA',logros:['El niño describe actividades que realiza su familia en la chacra.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:25,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:69,titulo:'CONOZCO LOS NOMBRES DE LAS PRENDAS DE VESTIR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:195,titulo:'HAGO UN COLLAR',logros:['Ensarta cuentas con orificios grandes.','Realiza movimientos de mayor precisión con sus dedos. P.e. abotona, desabotona, abrocha, desabrocha, sube y baja cierres, rasga con los dedos, abolilla, inserta objetos en ranura.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS BLOQUES  DE DIFERENTES FORMAS',logros:['Transforma los objetos con creatividad durante el juego','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m).','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS  DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'CuentameCuento',numcard:274,titulo:'ESCENA 3: LA PLAZA PRINCIPAL /LA PESCA',logros:['La mamá le cuente una historia de la plaza de su pueblo al niño.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:70,titulo:'¿QUÉ COSAS  FALTAN?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:188,titulo:'TÍTERE CONVERSADOR',logros:['Se expresa utilizando frases de 2 o 3  palabras','Sigue reglas básicas: Guardar juguetes, pasar de un espacio a otro cuando se le indique, no pegar al otro, etc.'],flag:true},
                            {tipo:'CuentameCuento',numcard:245,titulo:'ESCENA 1: LA POSTA MEDICA',logros:['El niño escucha y relaciona el relato de la posta medica'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:71,titulo:'¿QUÉ SERÁ?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:182,titulo:'EL COLECTIVO VA LEJOS  Y DEJA A TODOS LOS PASAJEROS',logros:['El niño representa actividades de su vida diaria jugando con el carrito.','Dramatiza situaciones conocidas, que contienen pequeños argumentos.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:193,titulo:'LOTERÍA 1: LA FLOR DE TAPAS',logros:['Resuelve problemas utilizando sus experiencias previas','Nombra objetos familiares que observa en ilustraciones'],flag:true},
                            {tipo:'JugandoAprendo',numcard:194,titulo:'ROMPECABEZAS  7',logros:['Encaja varias piezas en un tablero adecuando sus manos y dedos.','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:262,titulo:'LIBRO 7: MI DÍA',logros:['El niño reconoce y asocia las rutinas del día.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:76,titulo:'¿QUÉ  SERÁ? ',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:198,titulo:'JUEGO LA COMIDITA',logros:['Dramatiza situaciones conocidas de vida diaria jugando a la comidita','Colabora con iniciativa en tareas sencillas: guardar juguetes, botar basura, poner platos en la mesa, etc.','Relaciona objetos según su función: peine para peinarse, taza para tomar, etc.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:194,titulo:'ROMPECABEZAS 7',logros:['Encaja varias piezas en un tablero adecuando sus manos y dedos.','En sus conversaciones se puede distinguir 10 palabras como mínimo.'],flag:true},
                            {tipo:'CuentameCuento',numcard:263,titulo:'LIBRO 8: A MARÍA LE GUSTA JUGAR',logros:['El niño asocia las escena con su vida cotidiana'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:26,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:72,titulo:'RECORDANDO LO QUE HICE HOY',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:199,titulo:'CONSTRUYO CORRALES  PARA LOS ANIMALES',logros:['Utiliza diferentes objetos para hacer un corral para los animales','Mantiene la atención cuando le narra cuentos muy cortos (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:263,titulo:'LIBRO 8: A MARÍA LE GUSTA JUGAR',logros:['El niño asocia las escenas con su vida cotidiana.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:72,titulo:'RECORDANDO LO QUE HICE HOY',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:200,titulo:'MIS CARROS VAN Y VAN',logros:['Dramatiza situaciones conocidas de vida diaria jugando  con el carrito','Diferencia características notorias entre objetos: grande-pequeño (19-24 m).'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS  PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'EXPERIMENTO CON LA CRAYOLA',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:245,titulo:'ESCENA 1: LA POSTA MEDICA',logros:['El niño escucha y relaciona el relato de la posta medica'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:73,titulo:'¿DÍA, TARDE  O NOCHE?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:201,titulo:'LA CASITA DE TAPAS',logros:['Realiza movimientos de mayor precisión con sus manos para armar una casita  con tapas.','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:202,titulo:'LOTERÍA 2: MUEBLES',logros:['Coloca figuras que corresponden en la lámina ','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'LIBRO 9 JUAN PREGUNTA ¿CÓMO ES',logros:['El niño escucha las explicaciones y el ¿Por qué? de las cosas.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:73,titulo:'¿DÍA, TARDE O NOCHE?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:203,titulo:'ROMPECABEZAS 8',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:246,titulo:'ESCENA 2: LA CHACRA',logros:['El niño escucha y relaciona el relato de la chacra de lo que realiza papá y mamá.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:27,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:74,titulo:'AYUDO  A TENER LIMPIA MI ROPITA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:204,titulo:'JUEGO CON ÉL BEBE  Y HABLO SOBRE LAS PRENDAS DE  VESTIR',logros:['Dramatiza situaciones de su vida diaria, mientras juega con el muñeco','Realiza movimientos de mayor precisión con sus dedos. P.e. abotona, desabotona, abrocha, desabrocha, sube y baja cierres, rasga con los dedos, abolilla, insera objetos en ranuras'],flag:true},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS BLOQUES DE DIFERENTES FORMAS',logros:['Transforma los objetos con creatividad durante el juego.','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m).','Se expresa por medio de frases de dos o tres palabras (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:262,titulo:'LIBRO 7: MI DÍA',logros:['El niño reconoce y asocia las rutinas del día.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:74,titulo:'AYUDO A TENER LIMPIA MI ROPITA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:263,titulo:'LIBRO 8: A MARÍA LE GUSTA JUGAR',logros:['El niño asocia las escena con su vida cotidiana'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:75,titulo:'AYUDO A ORDENAR LA ROPA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:202,titulo:'LOTERÍA  2',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos.','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:247,titulo:'ESCENA 3: LA PLAZA PRINCIPAL/LA PESCA',logros:['Que la mamá le cuente una historia de la plaza de su pueblo.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:75,titulo:'AYUDO A ORDENAR LA ROPA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:198,titulo:'JUEGO  A LA COMIDITA',logros:['Dramatiza situaciones conocidas de su vida diaria jugando a la comidita','Colabora con iniciativa en tareas sencillas: guarda juguetes, botar la basura, poner platos en la mesa, etc.','Relaciona objetos según su función: peine para peinarse, taza para tomar, etc.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:203,titulo:'ROMPECABEZAS  8',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'LIBRO 9: JUAN PREGUNTA ¿CÓMO ES?',logros:['El niño escuche las explicaciones y el ¿Por qué? De las cosas.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:28,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:76,titulo:'¿ESTO ES TUYO?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:205,titulo:'HAGO UN COLLAR DE COLORES',logros:['Ensarta cuentas en con orificios pequeños.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'JUAN PREGUNTA ¿CÓMO ES?',logros:['El niño escucha las explicaciones y el ¿Por qué? de las cosas.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:76,titulo:'¿ESTO ES TUYO?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:206,titulo:'¿QUÉ HAY  DENTRO DE LA BOLSA?',logros:['Sigue indicaciones de la mama  mientras juega.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'CuentameCuento',numcard:248,titulo:'ESCENA 4: LA FIESTA PATRONAL',logros:['El niño escucha y relaciona el relato de la fiesta patronal.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:77,titulo:'AYUDO A COCINAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:202,titulo:'MIS CARROS VAN Y VAN',logros:['El niño diferencia el carro grande y el carro pequeño.'],flag:true},
                            {tipo:'CuentameCuento',numcard:208,titulo:'LOTERÍA 3: 6 OBJETOS FAMILIARES',logros:['Encaja varias piezas en un tablero, según la lámina.','Relaciona objetos según su función: peine para peinarse, taza para tomar, etc.','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:246,titulo:'ESCENA 2: LA CHACRA',logros:['El niño escucha y relaciona el relato de la chacra de lo que realiza papá y mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:77,titulo:'AYUDO A COCINAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:207,titulo:'PREPARAMOS  LA MESA PARA COMER',logros:['Relaciona la función de los objetos mientras se prepara la mesa para comer.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:203,titulo:'ROMPECABEZAS 8',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'LIBRO 8: A MARÍA LE GUSTA JUGAR',logros:['El niño asocia las escenas con su vida cotidiana.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:29,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:78,titulo:'A GUARDAR A GUARDAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:209,titulo:'LOS PASAJEROS DE COLORES SE PASEAN',logros:['Transforma los objetos con creatividad durante el juego.','Encaja varias piezas en un tablero, adecuando sus manos y dedos'],flag:true},
                            {tipo:'CuentameCuento',numcard:265,titulo:'LIBRO 10 MARÍA PREGUNTA ¿DÓNDE  ESTÁ?',logros:['El niño escucha atentamente el cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:78,titulo:'A GUARDAR',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:201,titulo:'LA CASITA DE TAPAS',logros:['Realiza movimientos de mayor precisión con sus manos para armar una casita  con tapas.','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:203,titulo:'ROMPECABEZAS 8',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos.','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:262,titulo:'LIBRO 7: MI DÍA',logros:['El niño reconoce y asocia las rutinas del día.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:79,titulo:'ACOMPAÑA A MAMA EN LA CHACRA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:210,titulo:'SACO UNO, SACO TODOS',logros:['Diferencia entre lleno y vacío – mucho – y poco.','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:208,titulo:'LOTERÍA 3: 6 OBJETOS FAMILIARES',logros:['Encaja objetos según la lámina','Relaciona objetos según su función: peine para peinarse, taza para tomar, etc.','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:274,titulo:'ESCENA 3: LA PLAZA PRINCIPAL / LA PESCA',logros:['El niño escucha y relaciona el relato de la plaza principal.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:79,titulo:'ACOMPAÑA A MAMA EN LA CHACRA.',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS BLOQUES  DE DIFERENTES FORMAS',logros:['Transforma los objetos con creatividad durante el juego','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m).','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:211,titulo:'LOTERIA 4',logros:['Encaja objetos según la lámina','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:211,titulo:'ESCENA 4: LA FIESTA  PATRONAL',logros:['El niño escucha y relaciona el relato de la fiesta patronal.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:30,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:80,titulo:'¡QUE LINDA LA NATURALEZA!',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:212,titulo:'JUEGO A BAÑAR A LA MUÑECA',logros:['Dramatiza situaciones conocidas de su vida diaria mientras baña a la muñeca','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, baña a la muñeca, imita el carro) utilizando diversos objetos para completar sus juegos de imitación (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento.','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:265,titulo:'LIBRO 10 MARÍA PREGUNTA ¿DÓNDE  ESTÁ?',logros:['El niño escucha atentamente.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:80,titulo:'QUE LINDA LA NATURALEZA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:213,titulo:'IMITO A MAMA',logros:['Imita las acciones que hace mama.','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:214,titulo:'ROMPECABEZAS',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Describe escenas sencillas que observa en una lámina'],flag:true},
                            {tipo:'CuentameCuento',numcard:249,titulo:'SECUENCIA 1: CAMBIO DE ROPA',logros:['Mamá describe al niño  los pasos de cambiarse de ropa.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:81,titulo:' “EL LÍDER”',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'CuentameCuento',numcard:215,titulo:'LOTERÍA 5',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:250,titulo:'SECUENCIA 2 EL CEPILLADO DE LOS DIENTES',logros:['El niño observa los pasos de cepillado de dientes'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:81,titulo:'EL LÍDER”',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:216,titulo:'MI CARRO SE PASEA',logros:['Transforma los objetos con creatividad durante el juego','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:217,titulo:'ROMPECABEZAS 10',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Se expresa por medio de frases de dos o tres palabras'],flag:true},
                            {tipo:'CuentameCuento',numcard:252,titulo:'SECUENCIA 4 SEMBRAMOS PARA COMER',logros:['El niño observa y escucha  los pasos de sembrando.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:31,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:82,titulo:'¿POR DÓNDE NOS FUIMOS?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:218,titulo:'LOS ANIMALES ESTÁN  CERCA Y LEJOS  DE SU CASA',logros:['Corre en diferentes direcciones sin caerse ni chocarse.','Transforma los objetos con creatividad durante el juego: Utiliza una manta como capa, etc'],flag:true},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS BLOQUES DE DIFERENTES  FORMAS',logros:['Transforma los objetos con creatividad durante el juego','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:266,titulo:'LIBRO 11:  MARÍA Y JUAN JUEGAN CON LOS COLORES',logros:['El niño(a) conversa con mamá y describe imágenes.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:82,titulo:'¿POR DÓNDE  NOS FUIMOS?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:219,titulo:'EL COLECTIVO HACE LO QUE LE PEDIMOS',logros:['El niño hace correr o parar al carrito cuando mamá le indica.','Comprende indicaciones sencillas realizando la acción'],flag:true},
                            {tipo:'JugandoAprendo',numcard:220,titulo:'MIS CARROS  VAN POR EL CAMINO',logros:['Transforma los objetos con creatividad durante el juego','Realiza movimientos de mayor precisión con sus dedos. P.e. abotona, desabotona, abrocha, desabrocha, sube y baja cierres, rasga con los dedos, abolilla, insera objetos en ranuras','Construye diversas formas: con bloques, piezas de construcción'],flag:true},
                            {tipo:'CuentameCuento',numcard:247,titulo:'ESCENA 3:  LA PLAZA PRINCIPAL ',logros:['La niña(o) observa imágenes y conversa con mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:83,titulo:'MANO  SOBRE LA MANO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:221,titulo:'HAGO UN COLLAR CON TODAS LAS TAPAS',logros:['Ensarta cuentas en con orificios pequeños','Apila objetos uno encima de otros con más de tres elementos (13-18 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:215,titulo:'LOTERÍA 5',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'LIBRO 9 JUAN PREGUNTA ¿CÓMO ES?',logros:['El niño describe imágenes  del cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:83,titulo:'MANO SOBRE  LA MANO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:222,titulo:'MUEVO LA ALMOHADA',logros:['Mantiene por breves momentos el equilibrio parado en un pie','Comprende indicaciones sencillas realizando la acción (13-18 m).'],flag:true},
                            {tipo:'JugandoAprendo',numcard:217,titulo:'ROMPECABEZAS 10',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Se expresa por medio de frases de dos o tres palabras'],flag:true},
                            {tipo:'CuentameCuento',numcard:248,titulo:'ESCENA 5: LA FIESTA PATRONAL',logros:['El niño observa imágenes y conversa con mamá.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:32,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:84,titulo:'SEMILLAS DE COLORES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS  DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'JugandoAprendo',numcard:223,titulo:'ROMPECABEZAS 11',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Se expresa por medio de frases de dos o tres palabras'],flag:true},
                            {tipo:'CuentameCuento',numcard:255,titulo:'SECUENCIA 7: VAMOS A PASTOREAR',logros:['El niño mira y describe la secuencia de  imágenes'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:84,titulo:'SEMILLAS DE COLORES',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:218,titulo:'LOS ANIMALES ESTÁN CERCA Y LEJOS DE SU CASA',logros:['Corre en diferentes direcciones sin caerse ni chocarse.','Transforma los objetos con creatividad durante el juego: Utiliza una manta como capa, etc.'],flag:true},
                            {tipo:'JugandoAprendo',numcard:224,titulo:'LOTERÍA 6',logros:['Utiliza cuantificadores como mucho-poco, uno-ninguno.','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:250,titulo:'SECUENCIA 5:  COMPRAMOS PESCADO CON PAPÁ',logros:['El niño conversa con mamá y Describe  la secuencia. '],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:85,titulo:'JUGAMOS CON LA PELOTA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:225,titulo:'ADIVINA QUE  ES',logros:['Reconoce un objeto a partir del olor, sabor, textura, sonido aún sin verlo','Busca objetos conocidos aunque no los tenga a la vista (19-24m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:197,titulo:'DIBUJA CON MAMÁ',logros:['Garabatea libremente con mayor control de su movimiento.','Nombra objetos familiares que observa en ilustraciones'],flag:true},
                            {tipo:'CuentameCuento',numcard:266,titulo:'SECUENCIA 6: LAVAMOS LA ROPA',logros:['El niño escucha con atención lo que le cuenta mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:85,titulo:'JUGAMOS CON LA PELOTA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:201,titulo:'LA CASITA DE TAPAS',logros:['Coloca las tapas siguiendo la lámina de la casita.','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:224,titulo:'LOTERÍA 6:  MUCHOS POCOS',logros:['Utiliza cuantificadores como mucho-poco, uno-ninguno','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:251,titulo:'SECUENCIA 3: TEJEMOS UNA CHOMPA',logros:['Mamá describe lámina  contando la historia de la chompa.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:33,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:86,titulo:'COMO LOS CONEJITOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:226,titulo:'HAGO DISTINTOS COLLARES',logros:['Ensarta cuentas en con orificios pequeños','Comprende indicaciones sencillas realizando la acción (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:227,titulo:'LOTERÍA 7',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento.','Expresa de manera comprensible sus vivencias'],flag:true},
                            {tipo:'CuentameCuento',numcard:255,titulo:'SECUENCIA 7: VAMOS A PASTOREAR',logros:['El niño mira y describe la secuencia de  imágenes'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:86,titulo:'COMO LOS CONEJITOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:228,titulo:'EL CARRO  VA LEJOS POR EL CAMINO',logros:['Transforma los objetos con creatividad durante el juego','Construye diversas formas: con bloques, piezas de construcción'],flag:true},
                            {tipo:'JugandoAprendo',numcard:180,titulo:'JUEGO CON LOS  BLOQUES DE DIFERENTES FORMAS',logros:['El Transforma los objetos con creatividad durante el juego','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:250,titulo:'SECUENCIA 2: EL CEPILLADO DE LOS DIENTES',logros:['Mamá conversa con el niño(a) acerca del aseo.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:87,titulo:'LAS CHAPADAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:229,titulo:'¿CUÁNTOS PASAJEROS HAY EN EL COLECTIVO?',logros:['Transforma los objetos con creatividad durante el juego','Dramatiza situaciones conocidas, que contienen pequeños argumentos'],flag:true},
                            {tipo:'CuentameCuento',numcard:223,titulo:'ROMPECABEZAS 11',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:266,titulo:'LIBRO 11: MARÍA Y JUAN JUEGAN CON COLORES',logros:['El niño(a) conversa con mamá y describe imágenes.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:87,titulo:'LAS CHAPADAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:230,titulo:'COCINAMOS',logros:['Dramatiza situaciones conocidas de su vida diría mientras juegan a la cocinita.','Juega representando actividades cotidianas de la vida diaria utilizando objetos diversos para completar sus juegos de imitación (19-24 m)','Imita acciones rutinarias que realiza el adulto como: barrer, planchar, cocinar, etc. (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:227,titulo:'LOTERÍA  7',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:251,titulo:'SECUENCIA 3: TEJEMOS UNA CHOMPA ',logros:['Mamá describe lámina  contando la historia de la chompa.'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:34,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:88,titulo:'TOCO, TOCO  LO QUE NOMBRO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'JugandoAprendo',numcard:231,titulo:'¿QUÉ SERÁ?',logros:['Reconoce un objeto a partir del olor, sabor, textura, sonido aún sin verlo','Busca objetos conocidos aunque no los tenga a la vista (19-24m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:265,titulo:'LIBRO 10: MARÍA PREGUNTA ¿DÓNDE ESTÁ?',logros:['El niño(a) Conversa con su mamá'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:88,titulo:'TOCA, TOCA LO QUE NOMBRO',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:232,titulo:'¿CÓMO SE SIENTE ÉL BEBE?',logros:['Expresa de manera comprensible sus vivencias diarias.','Dramatiza situaciones conocidas, que contienen pequeños argumentos'],flag:true},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento','Nombra objetos familiares que observa en ilustraciones'],flag:true},
                            {tipo:'CuentameCuento',numcard:266,titulo:'LIBRO 11: MARÍA Y JUAN JUEGAN CON COLORES',logros:['El niño(a) conversa con mamá y describe imágenes.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:89,titulo:'VEO, VEO ¿QUÉ VEZ?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:233,titulo:'EL GUSANO DE TAPITAS',logros:['Realiza movimientos de mayor precisión con sus dedos.','Comprende indicaciones sencillas realizando la acción (13-18 m) un poco forzada Comprende indicaciones sencillas realizando la acción (13-18 m) '],flag:true},
                            {tipo:'CuentameCuento',numcard:252,titulo:'SECUENCIA 4:  SEMBRAMOS PARA COMER',logros:['El niño mira la lámina y relaciona con el trabajo de papá.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:89,titulo:'VEO, VEO ¿QUÉ VEZ?',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:234,titulo:'ROMPECABEZAS12: LA NIÑA',logros:['Expresa de manera comprensible sus vivencias diarias','Comprende indicaciones sencillas realizando la acción (13-18 m) un poco forzada'],flag:true},
                            {tipo:'JugandoAprendo',numcard:227,titulo:'LOTERÍA 7 LAS ACCIONES DEL PERRO',logros:['El niño observa las acciones del perro y empareja con las cartillas.'],flag:true},
                            {tipo:'CuentameCuento',numcard:253,titulo:'SECUENCIA 5 COMPRAMOS PESCADO CON PAPÁ',logros:['El niño conversa con mamá y Describe  la secuencia. '],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:35,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:90,titulo:'ENSALADA DE FRUTAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:235,titulo:'LOS  ANIMALES  EN EL CAMPO',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:254,titulo:'SECUENCIA 6: LAVAMOS LA ROPA',logros:['El niño escucha con atención lo que le cuenta mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:90,titulo:'ENSALADA DE  FRUTAS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:236,titulo:'LOTERÍA 8',logros:['Repite juego de palabras, rimas, canciones sencillas','Imita sonidos onomatopéyicos (de animales y objetos que conoce)(13-18 m)','Se expresa por medio de frases de dos o tres palabras(19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:252,titulo:'SECUENCIA 4: SEMBRAMOS PARA COMER',logros:['Mamá conversa con el niño(a) acerca  de los alimentos que siembra y cosecha.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:91,titulo:'AYER HOY',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:237,titulo:'LE DOY DE COMER A LA MUÑECA',logros:['Dramatiza situaciones conocidas, que contienen pequeños argumentos','Se expresa por medio de frases de dos o tres palabras (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:234,titulo:'ROMPECABEZAS 12',logros:['Expresa de manera comprensible sus vivencias o comprende indicaciones sencillas'],flag:true},
                            {tipo:'CuentameCuento',numcard:263,titulo:'LIBRO 8: A MARÍA LE GUSTA JUGAR',logros:['El niño observa las imágenes y conversa con mamá.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:91,titulo:'AYER , HOY',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'JugandoAprendo',numcard:236,titulo:'LOTERÍA 8',logros:['Nombra objetos familiares que observa en ilustraciones','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:262,titulo:'LIBRO 7: MI DÍA',logros:['El niño conversa con mamá  acerca del cuento'],flag:true}
                        ]
                    }
                ]
            },
            {
                mes:36,
                fichasSemanas:[
                    {
                        semana:1,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:92,titulo:'AYUDO  A SERVIR LA MESA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:235,titulo:'LOS  ANIMALES  EN EL CAMPO',logros:['Imita el sonido de los animales','Imita sonidos onomatopéyicos (de animales y objetos que conoce)(13-18 m)','Se expresa por medio de frases de dos o tres palabras(19-24 m)','En sus conversaciones se puede distinguir 10 palabras como mínimo (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:236,titulo:'LOTERÍA  8',logros:['Nombra objetos familiares que observa en ilustraciones','Reconoce objetos cotidianos y significativos en ilustraciones (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:264,titulo:'LIBRO 9: JUAN PREGUNTA ¿CÓMO ES?',logros:['El niño conversa con mamá y disfruta del cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:2,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:92,titulo:'AYUDO A SERVIR LA MESA',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:238,titulo:'JUEGO A LA MAMÁ  Y  EL PAPÁ',logros:['Dramatiza situaciones conocidas, que contienen pequeños argumentos','Juega representando actividades de la vida cotidiana (da de comer a la muñeca, maneja el carro) utilizando objetos diversos para completar sus juegos de imitación (19-24 m)','Imita acciones rutinarias que realiza el adulto (13-18 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:239,titulo:'LOTERÍA  9: CANTIDAD',logros:['Utiliza cuantificadores como mucho-poco, uno-ninguno','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'CuentameCuento',numcard:265,titulo:'LIBRO 10: MARÍA PREGUNTA ¿DÓNDE ESTÁ?',logros:['El niño conversa con mamá y disfruta del cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:3,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:93,titulo:'UN ALMUERZO PARA MIS INVITADOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:233,titulo:'EL GUSANITO  DE TAPITAS',logros:['Realiza movimientos de mayor precisión con sus dedos.','Comprende indicaciones sencillas realizando la acción (13-18 m) un poco forzada','Agrupa objetos iguales (19-24 m)'],flag:true},
                            {tipo:'JugandoAprendo',numcard:234,titulo:'ROMPECABEZAS 12',logros:['Encaja varias piezas en un tablero, adecuando sus manos y dedos','Comprende indicaciones sencillas realizando la acción (13-18 m) un poco forzada'],flag:true},
                            {tipo:'JugandoAprendo',numcard:240,titulo:'ADIVINO Y EMPAREJO',logros:['Reconoce un objeto a partir del olor, sabor, textura, sonido, aún sin verlo','Busca objetos conocidos aunque no los tenga a la vista (19-24'],flag:true},
                            {tipo:'CuentameCuento',numcard:266,titulo:'LIBRO 11: MARÍA Y JUAN JUEGAN CON COLORES',logros:['El niño conversa con mamá y disfruta del cuento.'],flag:true}
                        ]
                    },
                    {
                        semana:4,
                        objetivos:[
                            {tipo:'VidaFamilia',numcard:93,titulo:'UN ALMUERZO PARA MIS INVITADOS',logros:[],flag:false},
                            {tipo:'JugandoAprendo',numcard:197,titulo:'DIBUJO CON MAMA',logros:['Garabatea libremente con mayor control de su movimiento','Nombra objetos familiares que observa en ilustraciones'],flag:true},
                            {tipo:'JugandoAprendo',numcard:196,titulo:'MIS PRIMEROS DIBUJOS',logros:['Garabatea libremente con mayor control de su movimiento','Dice el nombre a sus dibujos, pinturas y modelados y los explica'],flag:true},
                            {tipo:'CuentameCuento',numcard:255,titulo:'SECUENCIA 7: VAMOS A PASTOREAR',logros:['El niño conversa con mamá y disfruta del cuento.'],flag:true}
                        ]
                    }
                ]
            }
        ];
    }
}