let $cab = document.getElementsByTagName("h1")[0];
let $bAnadir = document.getElementById("bAnadir");

$bAnadir.addEventListener("click", () => {
  let $nombre=document.getElementById('iNombre');
  let $foto=document.getElementById('iFoto');
  let $precio=document.getElementById('iPrecio')
  let $categoria=document.getElementById('iCategoria')
  let $descripcion=document.getElementById('iDescripcion')

  var data = {
    name: $nombre.value,
    picture: $foto.value,
    price: $precio.value,
    category: $categoria.value,
    description: $descripcion.value
  };
  console.log(data)
  enviarDatos(data);
});

/* const pedirDatos= async(donde)=>{
          const respuesta= await fetch('http://localhost:3000/api/product') 
          let datos= await respuesta.json();
          console.log(datos)
          donde.innerHTML=datos
} */

const enviarDatos = async (producto) => {
  const respuesta = await fetch("http://localhost:3000/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });
  let datos = await respuesta.json();
  console.log(datos);
  mostarProducto(datos);
};

function mostarProducto(producto) {
  let $producto = document.getElementById("producto");
  $producto.innerHTML = `
          <li>
              Producto añadido: 
              ${producto.product.name}
              ${producto.product.price}
              ${producto.product.description}
              ${producto.product.category}
              ${producto.product.picture}
          </li>
      `;
}

//pedirDatos($cab);

//EnviarDatos($cab);
