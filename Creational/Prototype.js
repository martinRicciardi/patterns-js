//lo que hace es "haceme un objeto igual a este"

//El patrón de prototipo crea nuevos objetos, 
//pero en lugar de crear objetos no inicializados, 
//devuelve objetos que se inicializan con valores que 
//copió de un objeto prototipo (o ejemplo). El patrón Prototipo 
//también se conoce como patrón Propiedades.

//Un ejemplo de dónde resulta útil el patrón Prototipo es la 
//inicialización de objetos comerciales con valores que coinciden 
//con los valores predeterminados en la base de datos. 
//El objeto prototipo contiene los valores predeterminados que se 
//copian en un objeto comercial recién creado.
//Los lenguajes clásicos rara vez usan el patrón Prototipo, pero 
//JavaScript, al ser un lenguaje prototipo, usa este patrón en la 
//construcción de nuevos objetos y sus prototipos.

//En el código de ejemplo tenemos un CustomerPrototypeobjeto que 
//clona objetos dado un objeto prototipo. Su función constructora 
//acepta un prototipo de tipo Cliente. Llamar al clonemétodo generará 
//un nuevo Customerobjeto con sus valores de propiedad inicializados 
//con los valores del prototipo.

//Esta es la implementación clásica del patrón Prototype, pero JavaScript
//puede hacerlo de manera mucho más efectiva utilizando su función de 
//prototipo incorporada.

function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone(); //clona el objeto original totalmente
    customer.say();
}