console.log("Codigo hecho con mucho ❤️ por Yofrank Salas");
const camisas = [
  {
    id:1,
    selection: "Argentina",
    equipacion: "Primer",
    img: "./img/a1.png",
    texto:
      " La camiseta de Argentina para el Mundial 2026 es una armadura histórica que fusiona la gloria de sus tres títulos mundiales. Su elemento más importante es el degradado en los bastones celestes, el cual entrelaza los tonos exactos de las camisetas campeonas de 1978, 1986 y 2022, creando una línea de tiempo visual. Este concepto de triunfo se corona en el pecho con las tres estrellas doradas que llevan grabados sus respectivos años, uniendo el pasado y el presente en una pieza de arte textil diseñada para defender el título. ",
  },
  {
    id:2,
    selection: "Argentina",
    equipacion: "Segunda",
    img: "./img/a2.jpg",
    texto:
      'La camiseta visitante (suplente) de Argentina para el Mundial 2026, diseñada por Adidas, es un lienzo nocturno que celebra la identidad urbana y la expresión artística de Buenos Aires. Su elemento más importante es el gráfico en espiral de color celeste y azul sobre una base negra, inspirado directamente en el fileteado porteño. Este arte popular argentino se reinventa con dinamismo, envolviendo el cuerpo en un torbellino visual que simboliza la energía creativa y la pasión en movimiento. En la espalda, debajo del cuello, se corona este concepto con la palabra "Argentina" y el sol estilizados con la misma tipografía del fileteado. Además, por primera vez, incorpora un parche de Campeón del Mundo en color blanco que contrasta elegantemente con la oscuridad de la prenda. Esto convierte a la indumentaria en una fusión perfecta entre la mística cultural del país y el orgullo de su jerarquía futbolística. ',
  },
  {
    id:3,
    selection: "Alemania",
    equipacion: "Primer",
    img: "./img/al1.jpg",
    texto:
      'La camiseta local destaca por su base blanca tradicional, protagonizada por un patrón tricolor en forma de "V" y diamantes en negro, rojo y dorado. Este diseño geométrico de estilo zigzag rinde tributo directo a las icónicas equipaciones campeonas de 1990 y 2014, así como al patrón usado en el Mundial de 1994. El concepto artístico central es la estructura y la precisión germana, entrelazando las épocas más gloriosas del fútbol teutón en el pecho.',
  },
  {
    id:4,
    selection: "Alemania",
    equipacion: "Segunda",
    img: "./img/al2.jpg",
    texto:
      'La camiseta de visitante rompe esquemas con una estética fría y nocturna, utilizando una elegante base azul marino profundo inspirada en sus chaquetas de entrenamiento históricas. Su elemento más rupturista es un dinámico patrón en zigzag de color verde menta / turquesa que recorre el cuerpo. El diseño se corona con el nostálgico logotipo Trefoil de Adidas y una inscripción en el dobladillo que reza "Since 1954", transformando la prenda suplente en un homenaje artístico a más de siete décadas de legado compartido.',
  },
  {
    id:5,
    selection: "Brazil",
    equipacion: "Primer",
    img: "./img/b1.jpg",
    texto:
      'La camiseta local marca el regreso a la pureza clásica del "Amarelo Canarinho", inspirándose directamente en la legendaria equipación del Mundial de 1970. Su núcleo artístico es la sutileza de su textura: un patrón geométrico distorsionado basado en las formas de la bandera nacional que recorre todo el cuerpo. Complementada con detalles en tonos Light Menta y azul Teal en el cuello redondo, la indumentaria evoca visualmente la belleza natural del país y el juego vibrante del "Joga Bonito".',
  },
  {
    id:6,
    selection: "Brazil",
    equipacion: "Segunda",
    img: "./img/b2.jpg",
    texto:
      "La camiseta de visitante abandona lo convencional con una propuesta disruptiva en color azul (Old Royal y negro). Su concepto artístico más potente está inspirado en los patrones de advertencia de la rana dardo venenosa de la Amazonia, una de las especies más letales de su ecosistema. A través de un entramado de texturas abstractas y dinámicas en el tejido, el diseño funciona como una metáfora visual del 'peligro inminente' que representa la Seleção para sus rivales en el terreno de juego.",
  },
  { 
    id:7,
    selection: "Colombia",
    equipacion: "Primer",
    img: "./img/c1.png",
    texto:
      "La camiseta local mantiene el tradicional amarillo vibrante como base, pero su mayor hito artístico es una trama sutil visible bajo la luz: una textura repleta de mariposas amarillas. Este patrón rinde un tributo directo al realismo mágico de Gabriel García Márquez, transformando la prenda en un símbolo de esperanza y cultura, enmarcado con franjas rojas y remates azules que evocan la estética nostálgica del Mundial Francia 1998.",
  },
  {
    id:8,
    selection: "Colombia",
    equipacion: "Segunda",
    img: "./img/c2.jpg",
    texto:
      "La camiseta de visitante rompe con el pasado usando un elegante lienzo azul oscuro. Su concepto central es una oda a la biodiversidad oceánica del país, fusionando artísticamente en su tejido los tonos claros del mar Caribe con las profundidades oscuras del océano Pacífico. El contraste final lo aportan vivos detalles en naranja/amarillo neón que simulan los destellos de la fauna marina, representando el espíritu caribeño y la energía inagotable de su gente.",
  },
  {
    id:9,
    selection: "España",
    equipacion: "Primer",
    img: "./img/e1.png",
    texto:
      "La camiseta local destaca por el uso de su tradicional 'Rojo Vivo', enmarcado con mangas de un elegante azul marino oscuro. Su elemento artístico más importante es el minimalismo lineal: finas líneas verticales amarillas (pinstripes) recorren el torso combinadas con detalles punteados, aportando una textura de costura clásica y refinada. El diseño se corona en los hombros, donde las tres tiras adoptan un patrón cromático que recrea fielmente la bandera de España (rojo-amarillo-rojo), entrelazando la elegancia futbolística con la identidad nacional.",
  },
  {
    id:10,
    selection: "España",
    equipacion: "Segunda",
    img: "./img/e2.jpg",
    texto:
      "La camiseta de visitante rompe drásticamente los moldes convencionales al inspirarse de forma directa en el legado literario y manuscrito español. Concebida sobre una base de color crema/blanco roto que simula la tonalidad de una página de un libro antiguo, destaca por una sutil trama de espirales y elementos gráficos en tonos pirita que imitan las ilustraciones de los textos clásicos. Con detalles en rojo oscuro y dorado, la prenda luce orgullosa la palabra 'ESPAÑA' en la nuca con su distintiva Ñ, convirtiendo el uniforme en un lienzo de arte histórico e identitario.",
  },
  {
    id:11,
    selection: "Inglaterra",
    equipacion: "Primer",
    img: "./img/i1.jpg",
    texto:
      "La camiseta local abraza un purismo minimalista sobre su clásica base blanca, pero su verdadero valor artístico reside en la textura: un refinado entramado geométrico tipo jacquard a medida. El diseño introduce sutiles ribetes azul marino en los hombros y paneles laterales en rojo vivo. Su carga conceptual más potente se encuentra en los detalles dorados, destacando una brillante estrella sobre el escudo que simboliza la gloria de 1966, complementada poéticamente en el interior del cuello con el lema monárquico 'Happy and Glorious' (Feliz y Glorioso).",
  },
  {
    id:12,
    selection: "Inglaterra",
    equipacion: "Segunda",
    img: "./img/i2.jpg",
    texto:
      "La camiseta de visitante rompe de forma audaz con la sobriedad al recuperar el icónico color 'Speed Red' como un lienzo de pura energía. El concepto central de esta pieza es la reimaginación del legado mediante un patrón abstracto tejido en la tela que estiliza figuras de leones y estrellas. Con el escudo de los Three Lions centrado en el pecho y contrastes profundos en azul Obsidian, la prenda transforma el uniforme alternativo en una armadura moderna que conecta el fabled pasado inglés con el presente.",
  },
  { 
    id:13,
    selection: "Noruega",
    equipacion: "Primer",
    img: "./img/n1.jpg",
    texto:
      "La camiseta local rinde un directo tributo a la icónica equipación de la selección de 1997. Sobre su tradicional base de color rojo, el núcleo artístico es una reinterpretación monumental de la bandera nacional en el pecho, donde una prominente cruz en azul marino y celeste viene delineada en un nítido color blanco. Lo más destacado de su entramado es que la cruz está rellena con un intrincado patrón de nudos de arte escandinavo tradicional, el cual simboliza la unión y la fortaleza del espíritu noruego.",
  },
  {
    id:14,
    selection: "Noruega",
    equipacion: "Segunda",
    img: "./img/n2.jpg",
    texto:
      'La camiseta de visitante rompe drásticamente con los precedentes históricos mediante una estética radical y sigilosa de estilo "blackout" (completamente negra). El diseño está artísticamente inspirado en los guerreros vikingos y concebido para transmitir una presencia intimidante en el campo de juego. A pesar de su apariencia monocromática, la prenda destaca por su rica textura táctil, incorporando sutiles detalles de nudos nórdicos tejidos en relieve sobre los paneles laterales y los puños, fundiendo la herencia mitológica con la modernidad urbana.',
  },
  {
    id:15,
    selection: "Portugal",
    equipacion: "Primer",
    img: "./img/p1.jpg",
    texto:
      'La camiseta local reinterpreta su clásico e icónico lienzo rojo (Club Red) mediante una audaz textura orgánica. El elemento artístico principal es un patrón ondulado texturizado que emula el oleaje del océano Atlántico, fusionado con dinámicos detalles en un tono verde laguna (Green Lagoon). El diseño rinde tributo a la historia de los grandes navegantes portugueses, traduciendo visualmente la idea de una selección lista para "romper las olas" y agitar el escenario mundial.',
  },
  {
    id:16,
    selection: "Portugal",
    equipacion: "Segunda",
    img: "./img/p2.png",
    texto:
      'La camiseta de visitante expande esta narrativa marina con una propuesta de estética disruptiva y refrescante. Sobre una base predominantemente blanca, el núcleo conceptual se traslada a la zona superior mediante un patrón gráfico de cortes en "V" que entrelaza distintas tonalidades de aquamarina, verde laguna y turquesa. Esta abstracción visual simula el choque de las olas contra la costa, enmarcando el escudo nacional centrado con orgullo en el pecho bajo el lema artístico de “Conectar Héroes”.',
  },
];

//formateamos el objeto para q nos devuelva un elemento html para poder insertar
const camisitasTasclaro = camisas.map((camisa) => {
    return `<article class="targeta-glosario">   	
				<img class="camisita" src="${camisa.img}" alt="Camisa de ${camisa.selection}" loading="lazy">	
                    <p hidden>id: ${camisa.id}
				    <p>
                      ${camisa.texto}
                    </p>
			</article>`
}).join("");

// lo mismo aca recuperamos el contenedor donde vamos a ingresar los datos de la camisa
const camisasContainer = document.getElementById("contenedor-glosario");
camisasContainer.innerHTML = camisitasTasclaro;

const divImagenCompleta = document.querySelector(".completa");
// const imgCompleta = document.querySelector(".tarjetaCompleta img");

//recuperamos cada imagen para anadirle un evento de escucha
const tarjetCatalogo = document.querySelectorAll(".targeta-glosario");
tarjetCatalogo.forEach((camisa) => {
  camisa.addEventListener("click", (e)=>{
    ///e.target.closest nos permite recuperar el elemento que padre que hace match con la busqueda
    const tarjeta = e.target.closest(".targeta-glosario")
    if(tarjeta){
      //si la tarjeta existe
      const parrafoId = tarjeta.querySelector("p[hidden]")
      //buscamos el elemento hiiden que este caso es el id
      const textoCompleto = parrafoId.textContent
      //accedemos al contenido
      const id = textoCompleto.replace("id:","").trim()
      //reemplazamos el texto del id con un texto en blanco y eliminamos los espacios con la funcion trim()
      const camisaEncontrada = camisas.find((elemento) => elemento.id === parseInt(id))
    //   console.log(camisaEncontrada)
      divImagenCompleta.style.display = "flex"
      divImagenCompleta.innerHTML = ` 
      <div class="tarjetaCompleta">
        <div class="cardTarjetica">
          <img id="img-complete" src="${camisaEncontrada.img}" alt="Imagen Completa">
          <p style="color:white;" hidden>id: ${camisaEncontrada.id}
          <p style="color:white;">Seleccion: ${camisaEncontrada.selection}
          <p style="color:white;font-size:0.8rem;">${camisaEncontrada.texto}</p>
			    <span id="equis">&times;</span> 
        </div>
      </div>
      `;
      //evento para cerrar la imagen con el elemento span
    const botonSalir = document.getElementById("equis");
    botonSalir.addEventListener("click", () => {
    divImagenCompleta.style.display = "none";
});
    }
  })
});




//logica para filtrar camisa por busqueda
const btnBuscar = document.getElementById("busqueda");
btnBuscar.addEventListener("input",(e)=>{
    
    let camisasFiltradas = camisas.filter((camisa) =>{
        if(camisa.selection.toLowerCase().includes(e.target.value.toLowerCase()))return true;
    });
    if(camisasFiltradas.length === 0) return camisasContainer.innerHTML = `<h3>No se encontraror resultados...</h3>`
    return camisasContainer.innerHTML = camisasFiltradas.map((camisa) =>{
        return `<article class="targeta-glosario">   	
				<img class="camisita" src="${camisa.img}" alt="Camisa de ${camisa.selection}" loading="lazy">	
				    <p>
                      ${camisa.texto}
                    </p>
			</article>`
    }).join("");
})


