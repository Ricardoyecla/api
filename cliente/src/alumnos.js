const alumnos = [
  {
    id: 1,
    nombre: "Charles Leclerc",
  },
  {
    id: 2,
    nombre: "Carlos Sainz",
  },
  {
    id: 3,
    nombre: "Lewis Hamilton",
  },
  {
    id: 4,
    nombre: "George Russell",
  },
  {
    id: 5,
    nombre: "Kevin Magnussen",
  },
  {
    id: 6,
    nombre: "Valtteri Bottas",
  },
  {
    id: 7,
    nombre: "Esteban Ocon",
  },
  {
    id: 8,
    nombre: "Yuki Tsunoda",
  },
  {
    id: 9,
    nombre: "Fernando Alonso",
  },
  {
    id: 10,
    nombre: "Guanyu Zhou",
  },
  {
    id: 11,
    nombre: "Mick Schumacher",
  },
  {
    id: 12,
    nombre: "Lance Stroll",
  },
  {
    id: 13,
    nombre: "Alex Albon",
  },
  {
    id: 14,
    nombre: "Daniel Ricciardo",
  },
  {
    id: 15,
    nombre: "Lando Norris",
  },
  {
    id: 16,
    nombre: "Nicholas Latifi",
  },
  {
    id: 17,
    nombre: "Nico Hulkenberg",
  },
  {
    id: 18,
    nombre: "Sergio Pérez",
  },
  {
    id: 19,
    nombre: "Max Verstappen",
  },
  {
    id: 20,
    nombre: "Pierre Gasly",
  },
];

function Crear_Lista_Alumnos(alumnos){
    const $info_alu=document.getElementById('info_alumnos')

    alumnos.forEach((elemento, posicion) => {
        let $nodo_alumno =document.createElement('div');
          $nodo_alumno.innerHTML=
            `<div>${elemento.nombre}</div><div>${posicion}</div>`;
        $info_alu.appendChild($nodo_alumno)
       
    });
   
  }
