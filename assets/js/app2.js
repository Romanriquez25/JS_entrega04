const propiedadesEnAlquiler = [
 
    { 
        nombre: "casa 1",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 2",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 3",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: true,
        pets: false,
    },
    { 
        nombre: "casa 4",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 5",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 6",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: true,
        pets: false,
    },
    { 
        nombre: "casa 7",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 8",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 9",
        scr:"./assets/img/casa1.jpg",
        descripcion:"casa en arriendo",
        ubicacion:" Direccion: San andres 4613 Renca",
        precio: "valor $ 100000000",
        smoke: true,
        pets: false,
    }
    
];

let properties__containerrent = document.querySelector(".properties__containerrent");

propiedadesEnAlquiler.forEach((propiedad) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${propiedad.scr}" alt="">
    <h1>${propiedad.nombre}</h1>
    <p>${propiedad.descripcion}</p>
    <p>${propiedad.ubicacion}</p>
    <p>${propiedad.precio}</p>
    `;
    if(propiedad.smoke === true){
        card.innerHTML += `<p style="color: green;"> <i class="fa-solid fa-smoking"></i> Permitido Fumar</p>`;
        
    } else {
        card.innerHTML += `<p style="color: red;"><i class="fa-solid fa-ban-smoking"></i> Prohibido Fumar</p>`;
    }
    if(propiedad.pets === true){
        card.innerHTML += `<p style="color: green;"> <i class="fa-solid fa-dog"></i> Se aceptan mascotas</p>`;
    } else {  
        card.innerHTML += `<p style="color: red;"> <i class="fa-solid fa-ban"></i></i> No se aceptan mascotas</p>`;
    }
   
    properties__containerrent.appendChild(card);
    
});