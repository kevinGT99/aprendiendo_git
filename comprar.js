const autos = require("./autos");

let personas = [
{
    nombre: "Marcos",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000,
},
{
    nombre: "Luis",
    capacidadDePagoEnCuotas: 100,
    capacidadDePagoTotal: 100000000,
},
];

let concesionaria = {
autos: autos,
personas: personas,

buscarAuto: function (patenteauto) {
    let buscarAuto = this.autos.filter((auto) => auto.patente == patenteauto);
    if (buscarAuto.length > 0) {
    return buscarAuto[0];
} else {
    return null;
}
},

venderAuto: function (patenteauto) {
    let auto = this.buscarAuto(patenteauto);
    auto.vendido = true;
    return auto;
},

autosParaLaVenta: function () {
    return this.autos.filter((auto) => auto.vendido == false);
},

autosNuevos: function () {
    let autos = this.autosParaLaVenta();
    return autos.filter((auto) => auto.km < 100);
},

listaDeVentas: function () {
let lista = [];
let autosvendidos = this.autos.filter(
(autoVendido) => autoVendido.vendido == true
);
autosvendidos.forEach((auto) => {
lista.push(auto.precio);
});
    return lista;
},

totalDeVentas: function () {
    if (this.listaDeVentas() > 0) {
    return this.listaDeVentas().reduce(
        (precio, precioIngresado) => precio + precioIngresado
);
} else {
    return 0;
}
},
puedeComprar: function (auto, persona) {
    let capacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas;
    let capacidadDePagoTotal = persona.capacidadDePagoTotal;
    let cuotas = auto.cuotas;
    let precioAuto = auto.precio;
    let valorCuota = precioAuto / cuotas;
    console.log(persona);
    if (
    capacidadDePagoTotal > precioAuto &&
    capacidadDePagoEnCuotas > valorCuota
    ) {
    return true;
    } else {
    return false;
}
}
};
function autosQuePuedeComprar (persona){
let lista = [];
let autos = this.autosParaLaVenta();
    for (let i = 0; i < autos.length; i++) {
    if (this.puedeComprar(autos.auto) (persona) == true); 
    {
    lista.push(autos.auto)
};
    return lista;
}
};
console.log(autos("Luis"));