//El patrón Builder permite a un cliente construir un objeto complejo 
//especificando únicamente el tipo y el contenido. Los detalles de la construcción están completamente 
//ocultos para el cliente.

//La motivación más común para usar Builder es simplificar el código del cliente que crea objetos complejos. 
//El cliente aún puede dirigir los pasos dados por el Constructor sin saber cómo se realiza el trabajo real. 
//Los constructores frecuentemente encapsulan la construcción de objetos compuestos (otro patrón de diseño de GoF)
//porque los procedimientos involucrados suelen ser repetitivos y complejos.

//AbstractBuilder no se utiliza porque JavaScript no admite clases abstractas. Sin embargo, los diferentes Constructores 
//deben implementar la misma interfaz de varios pasos para que el Director pueda recorrer el proceso de ensamblaje.

//El código JavaScript tiene un Shop(el Director) y dos objetos constructores: CarBuildery TruckBuilder. El método de construcción de 
//Shop acepta una instancia de Builder que luego realiza una serie de pasos de ensamblaje: paso 1 y paso 2. El método get del constructor devuelve 
//los productos recién ensamblados ( Carobjetos y Truckobjetos).

//El cliente tiene control sobre el proceso real de construcción del objeto al ofrecer diferentes constructores a la Tienda.

function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car();
    };

    this.step2 = function () {
        this.car.addParts();
    };

    this.get = function () {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function () {
        this.truck = new Truck();
    };

    this.step2 = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function Car() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 4;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door truck");
    };
}

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}