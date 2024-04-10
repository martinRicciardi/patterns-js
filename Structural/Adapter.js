//El patrón Adaptador traduce una interfaz (las propiedades y métodos de un objeto) a otra.
//Los adaptadores permiten que los componentes de programación funcionen juntos que de otro modo 
//no funcionarían debido a interfaces no coincidentes. El patrón Adaptador también se conoce como Patrón Wrapper.

//Un escenario en el que los adaptadores se utilizan habitualmente es cuando es necesario integrar nuevos componentes 
//y trabajar junto con los componentes existentes en la aplicación.
//Otro escenario es la refactorización en la que partes del programa se reescriben con una interfaz mejorada, 
//pero el código antiguo aún espera la interfaz original.

//El siguiente código de ejemplo muestra un carrito de compras en línea en el que se utiliza un objeto de envío para 
//calcular los costos de envío. El antiguo Shippingobjeto es sustituido por un nuevo y mejorado objeto de Envío que es más 
//seguro y ofrece mejores precios.

//El nuevo objeto tiene un nombre AdvancedShippingy una interfaz muy diferente que el programa cliente no espera. 
//ShippingAdapterpermite que el programa cliente continúe funcionando sin ningún cambio de API al mapear (adaptar) 
//la Shippinginterfaz anterior a la nueva AdvancedShipping.

// old interface

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface

function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {

    var shipping = new Shipping();
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}

//calcula el envio y pasa nuevo precio, el antiguo decia precio sin envio, el nuevo lo agrega