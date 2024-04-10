//nos ayuda a crear objetos donde alguno de sus componentes puede variar segun la situacion.

//Un método de fábrica crea nuevos objetos según las instrucciones del cliente. Una forma de 
//crear objetos en JavaScript es invocando una función constructora con el nuevo operador. 
//Sin embargo, hay situaciones en las que el cliente no sabe, o no debería, cuál de varios objetos candidatos crear una instancia. 
//El método Factory permite al cliente delegar la creación de objetos sin dejar de mantener el control sobre qué tipo crear una instancia.

//El objetivo clave del Método Factory es la extensibilidad. Los métodos de fábrica se utilizan con frecuencia en aplicaciones que gestionan, 
//mantienen o manipulan colecciones de objetos que son diferentes pero que al mismo tiempo tienen muchas características (es decir, métodos y propiedades)
//en común. Un ejemplo sería una colección de documentos con una combinación de documentos Xml, documentos Pdf y documentos Rtf.

//En este ejemplo de JavaScript, el Factoryobjeto crea cuatro tipos diferentes de empleados. Cada tipo de empleado tiene una tarifa por hora diferente. 
//El createEmployeemétodo es el método de fábrica real. El cliente le indica a la fábrica qué tipo de empleado crear pasando un 
//argumento de tipo al método de fábrica.

//El AbstractProduct en el diagrama no está implementado porque Javascript no admite clases o interfaces abstractas. Sin embargo, aún debemos asegurarnos 
//de que todos los tipos de empleados tengan la misma interfaz (propiedades y métodos).

//Se crean cuatro tipos diferentes de empleados; todos están almacenados en la misma matriz. Se pide a cada empleado que diga quién es y su tarifa por hora.

var Factory = function () {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

function run() {

    var employees = [];
    var factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}

//en simples terminos nos ayuda a mantener toda la creacion 
//de objetos en un solo lugar, se usa en CRUD. Basicamente 
//es el sistema de modelo y controlador que uso en mongo, pero de forma vanilla