
const propiedadesEnVenta = [
 
    { 
        nombre: "casa1",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa2",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa3",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: true,
        pets: false,
    },
   
    
];


let properties__containerindex = document.querySelector(".properties__containerindex");



propiedadesEnVenta.forEach((propiedad) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
     <a href="propiedades__venta.html"><img src="${propiedad.scr}" alt="">
    <h2>${propiedad.nombre}</h2>
    <p>${propiedad.descripcion}</p>
    <p>${propiedad.ubicacion}</p>
    <p>${propiedad.precio}</p></a>
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
   
    properties__containerindex.appendChild(card);
     
});

const propiedadesEnalquiler = [
 
    { 
        nombre: "casa1",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa2",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa3",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"San andres 4613 Renca",
        precio: 100000000,
        smoke: true,
        pets: false,
    },
   
    
];


let properties__containerindex2 = document.querySelector(".properties__containerindex2");



propiedadesEnalquiler.forEach((propiedad) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
     <a href="propiedades__arriendo.html"><img src="${propiedad.scr}" alt="">
    <h2>${propiedad.nombre}</h2>
    <p>${propiedad.descripcion}</p>
    <p>${propiedad.ubicacion}</p>
    <p>${propiedad.precio}</p></a>
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
   
    properties__containerindex2.appendChild(card);
     
});