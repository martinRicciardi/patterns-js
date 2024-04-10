//sirve para al ir creando clases dinamicamente que añade 
//funcionalidad a objetos ya existentes.

//El patrón Decorador extiende (decora) el comportamiento de
//un objeto dinámicamente. La capacidad de agregar un nuevo 
//comportamiento en tiempo de ejecución se logra mediante un 
//objeto Decorador que "se envuelve" alrededor del objeto original. 
//Varios decoradores pueden agregar o anular funciones al objeto original.

//Un ejemplo de decorador es la gestión de seguridad donde los objetos 
//comerciales reciben acceso adicional a información privilegiada según
//los privilegios del usuario autenticado. Por ejemplo, un gerente de recursos
//humanos se pone a trabajar con un objeto de empleado al que se le ha añadido 
//(es decir, está decorado con) el registro salarial del empleado para que se pueda 
//ver la información salarial.
//Los decoradores brindan flexibilidad a los lenguajes escritos estáticamente al permitir 
//cambios en tiempo de ejecución en lugar de la herencia que tiene lugar en el momento de
//la compilación. JavaScript, sin embargo, es un lenguaje dinámico y la capacidad de extender 
//un objeto en tiempo de ejecución está integrada en el propio lenguaje.
//Por esta razón, el patrón Decorador es menos relevante para los desarrolladores de JavaScript. 
//En JavaScript, los patrones Extend y Mixin incluyen el patrón Decorator. 

//En el código de ejemplo, un Userobjeto está decorado (mejorado) por un DecoratedUserobjeto. 
//Amplía al Usuario con varias propiedades basadas en direcciones. La interfaz original debe 
//permanecer igual, lo que explica por qué user.namese asigna a this.name. Además, el saymétodo 
//de DecoratedUser oculta el saymétodo de Usuario.
//El propio JavaScript es mucho más eficaz a la hora de ampliar objetos dinámicamente con datos 
//y comportamientos adicionales.

var User = function (name) {
    this.name = name;

    this.say = function () {
        console.log("User: " + this.name);
    };
}

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

function run() {

    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
}

//el ejemplo de una persona de recursos humanos con acceso a la info del empleado es claro y muy bueno