let $cab = document.getElementsByTagName("h1")[0];
    /* const pedirDatos= async(donde)=>{
          const respuesta= await fetch('http://localhost:3000/api/product') 
          let datos= await respuesta.json();
          console.log(datos)
          donde.innerHTML=datos
      } */
    var data = {
      name: "example3",
      picture: "example.jpg3",
      price: 444,
      category: "computers",
      description: "ordenadore example2"
    };
    const pedirDatos = async (donde) => {
      const respuesta = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      let datos = await respuesta.json();
      console.log(datos);
      donde.innerHTML = datos;
    };
    //pedirDatos($cab);