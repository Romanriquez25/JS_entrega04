


const propiedadesEnVenta = [
 
    { 
        nombre: "casa 1",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 2",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 3",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: true,
        pets: false,
    },
    { 
        nombre: "casa 4",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 5",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 6",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: true,
        pets: false,
    },
    { 
        nombre: "casa 7",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 8",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "casa 9",
        scr:"./assets/img/casa1.jpg",
        descripcion:"Casa en venta",
        ubicacion:"Direcion: San andres 4613 Renca",
        precio: "Valor $100000000",
        smoke: true,
        pets: false,
    }
    
];


let properties__container = document.querySelector(".properties__container");

propiedadesEnVenta.forEach((propiedad) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `

    <div><img src="${propiedad.scr}" alt=""></div>
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
   
    properties__container.appendChild(card);
     
});




