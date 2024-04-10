//evita leer un manual complejo de como funciona una API o libreria.
//Afecta visualmente, no afecta el funcionamiento de la API o libreria.
//otra de sus metas es reducir el acoplamiento 

//nos recomienda proporcionar una interfaz unificada para trabajar con un 
//conjunto de interfaces de un subsistema. Define una interface a mas alto nivel

//El patrón Façade proporciona una interfaz que protege a los clientes 
//de funcionalidades complejas en uno o más subsistemas. Es un patrón 
//simple que puede parecer trivial pero es poderoso y extremadamente útil. 
//A menudo está presente en sistemas construidos en torno a una arquitectura multicapa.

//La intención de Façade es proporcionar una interfaz de alto nivel (propiedades y métodos)
//que haga que un subsistema o conjunto de herramientas sea fácil de usar para el cliente.
//En el servidor, en una aplicación web multicapa, frecuentemente tiene una capa de presentación
//que es un cliente para una capa de servicio. La comunicación entre estas dos capas se realiza a 
//través de una API bien definida. Esta API, o fachada, oculta las complejidades de los objetos 
//comerciales y sus interacciones desde la capa de presentación.
//Otro ámbito donde se utilizan las fachadas es en la refactorización. Suponga que tiene un 
//conjunto confuso o desordenado de objetos heredados que no deberían preocupar al cliente. 
//Puedes ocultar este código detrás de una fachada. The Façade expone solo lo necesario y presenta 
//una interfaz más limpia y fácil de usar.
//Las fachadas se combinan frecuentemente con otros patrones de diseño. Las propias fachadas 
//a menudo se implementan como fábricas únicas.

//El Mortgage objeto es la Fachada en el código de ejemplo. Presenta una interfaz sencilla al cliente con un solo método: applyFor. Pero debajo de esta sencilla API se esconde una complejidad considerable.

//El nombre del solicitante se pasa a la función constructora de hipotecas. Luego applyForse llama al método con el monto del préstamo solicitado. Internamente, este método utiliza servicios de 3 subsistemas separados que son complejos y posiblemente toman algún tiempo procesar; son Bank, Credit, y Background.

//Según varios criterios (extractos bancarios, informes crediticios y antecedentes penales), se acepta o rechaza al solicitante el préstamo solicitado.

var Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

var Bank = function () {
    this.verify = function (name, amount) {
        // complex logic ...
        return true;
    }
}

var Credit = function () {
    this.get = function (name) {
        // complex logic ...
        return true;
    }
}

var Background = function () {
    this.check = function (name) {
        // complex logic ...
        return true;
    }
}

function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");

    console.log(result);
}

//USANDO FACADE

//La intención de Façade es proporcionar una interfaz de alto nivel (propiedades y métodos) que haga que un subsistema o conjunto de herramientas sea fácil de usar para el cliente.
//En el servidor, en una aplicación web multicapa, frecuentemente tiene una capa de presentación que es un cliente para una capa de servicio. La comunicación entre estas dos capas se realiza a través de una API bien definida. Esta API, o fachada, oculta las complejidades de los objetos comerciales y sus interacciones desde la capa de presentación.
//Otro ámbito donde se utilizan las fachadas es en la refactorización. Suponga que tiene un conjunto confuso o desordenado de objetos heredados que no deberían preocupar al cliente. Puedes ocultar este código detrás de una fachada. The Façade expone solo lo necesario y presenta una interfaz más limpia y fácil de usar.
//Las fachadas se combinan frecuentemente con otros patrones de diseño. Las propias fachadas a menudo se implementan como fábricas únicas.