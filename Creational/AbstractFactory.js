//ayuda a crear colecciones de clases pero sin especificar 
//el tipo de clase en concreto para usar 

//Una Fábrica Abstracta crea objetos que están relacionados 
//por un tema común. En programación orientada a objetos, una fábrica 
//es un objeto que crea otros objetos. Una Fábrica Abstracta ha abstraído 
//un tema que comparten los objetos recién creados.

//JavaScript no admite la herencia basada en clases, por lo que las clases 
//abstractas que se muestran en el diagrama no se utilizan en el ejemplo de JavaScript. 
//Las clases e interfaces abstractas imponen interfaces consistentes en clases derivadas.
//En JavaScript debemos garantizar esta coherencia nosotros mismos asegurándonos de que cada objeto 
//'Concrete' tenga la misma definición de interfaz (es decir, propiedades y métodos) que los demás.

//En el ejemplo tenemos dos Fábricas de Concreto: EmployeeFactoryy VendorFactory. 
//El primero crea Employeeinstancias, el segundo crea Vendorinstancias. Ambos productos son tipos de persona
//(con la misma interfaz) lo que permite al cliente tratarlos igual. Se crea una matriz con dos empleados y dos proveedores.
//Luego se le pide a cada persona que diga qué y quiénes son.

function Employee(name) {
    this.name = name;

    this.say = function () {
        console.log("I am employee " + name);
    };
}

function EmployeeFactory() {

    this.create = function (name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;

    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function VendorFactory() {

    this.create = function (name) {
        return new Vendor(name);
    };
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}