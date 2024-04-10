//nos ayuda en el caso que tengas numerosos objetos de un
//determinado tipo y nos preocupa el espacio que pueda consumir en memoria

//este patron nos recomienda usar la comparticion
//de datos para crear un numero elevado de objetos 
//de manera eficiente

//El patrón Flyweight conserva la memoria al compartir de manera eficiente una 
//gran cantidad de objetos detallados. Los objetos de peso mosca compartidos son 
//inmutables, es decir, no se pueden cambiar ya que representan las características 
//que se comparten con otros objetos.

//Esencialmente, Flyweight es una "técnica de normalización de objetos" en la que las 
//propiedades comunes se factorizan en objetos de peso mosca compartidos. (Nota: la idea 
//es similar a la normalización del modelo de datos, un proceso en el que el modelador 
//intenta minimizar la redundancia).
//Un ejemplo del patrón Flyweight se encuentra dentro del propio motor JavaScript, que 
//mantiene una lista de cadenas inmutables que se comparten en toda la aplicación.
//Otros ejemplos incluyen caracteres y estilos de línea en un procesador de textos, o 
//'receptores de dígitos' en una aplicación de red telefónica pública conmutada. 
//Encontrará pesos mosca principalmente en aplicaciones de tipo utilidad, como procesadores 
//de texto, programas de gráficos y aplicaciones de red; se utilizan con menos frecuencia en 
//aplicaciones de tipo empresarial basadas en datos.

//En nuestro código de ejemplo estamos construyendo computadoras. Muchos modelos, marcas y 
//combinaciones de procesadores son comunes, por lo que los objetos Flyweight excluyen y 
//comparten estas características.
//Mantiene FlyweightFactoryun conjunto de Flyweightobjetos. Cuando se solicite un Flyweightobjeto
//FlyweightFactory, comprobará si ya existe uno; de lo contrario, se creará y almacenará uno nuevo 
//para referencia futura. Todas las solicitudes posteriores para esa misma computadora devolverán el 
//Flyweightobjeto almacenado.
//Se agregan varias computadoras diferentes a un archivo ComputerCollection. Al final tenemos una lista 
//de 7 Computerobjetos que comparten solo 2 Flyweights. Se trata de pequeños ahorros, pero con grandes 
//conjuntos de datos el ahorro de memoria puede ser significativo.

function Flyweight(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};

var FlyWeightFactory = (function () {
    var flyweights = {};

    return {

        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] =
                    new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();

function ComputerCollection() {
    var computers = {};
    var count = 0;

    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] =
                new Computer(make, model, processor, memory, tag);
            count++;
        },

        get: function (tag) {
            return computers[tag];
        },

        getCount: function () {
            return count;
        }
    };
}

var Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}

function run() {
    var computers = new ComputerCollection();

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: " + computers.getCount());
    console.log("Flyweights: " + FlyWeightFactory.getCount());
}