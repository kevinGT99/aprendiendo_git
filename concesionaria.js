let autos = require('./autos');
const concesionaria = {
autos: autos,
buscarPorPatente: function (patente) {
    return this.autos.find(auto   => auto.patente === patente);
},
venderAuto: function(patente){
    let auto = this.buscarPorPatente(patente)
    auto.vendido = false
    return auto
},
buscarAuto: function (patente){
    let buscarAuto = this.autos.filter(auto => auto.patente == patente)
    if(buscarAuto.length > 0){
    return buscarAuto[0]
}else{
    return null
}
},  
venderAuto: function     (patenteauto){
    let auto = this.buscarAuto(patenteauto)
    auto.vendido = true
    return auto
},
autosParaLaVenta: function(){
    return this.autos.filter(auto => auto.vendido == false)
},
autosNuevos: function(){
    let autos = this.autosParaLaVenta()
    return autos.filter(auto => auto.km < 100)
},
listaDeVentas: function(){
    let lista = []
    let autosvendidos =         this.autos.filter(autovendido => autovendido.vendido == true)
    autosvendidos.forEach(auto => {
    lista.push(auto.precio)
})
    return lista
},
totalDeVentas: function(){
    if(this.listaDeVentas() > 0){
    return this.listaDeVentas().reduce((precio, precioOtro) => precio + precioOtro)
}else{
    return 0
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
},
autosQuePuedeComprar: function (persona) {
    let listaDeAutos = [];
    let autosParaComprar = this.autosParaLaVenta().forEach((element) => {
    if (this.puedeComprar(element, persona) === true) {
    listaDeAutos.push(element);
}
});
    return listaDeAutos;
},
};