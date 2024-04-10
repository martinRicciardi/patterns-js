//ayuda en situaciones donde es necesario construir dos componentes diferentes y puente que los una,
//este patron es muy inusual, pocas veces es requerido y es bastante dificil.

//El patrón Bridge permite que dos componentes, un cliente y un servicio, 
//trabajen juntos y cada componente tenga su propia interfaz. 
//Bridge es un patrón arquitectónico de alto nivel y su objetivo principal
//es escribir mejor código a través de dos niveles de abstracción. 
//Facilita un acoplamiento muy flojo de objetos. A veces se le denomina patrón de adaptador doble.

//Un ejemplo del patrón Bridge es una aplicación (el cliente) y un controlador 
//de base de datos (el servicio). La aplicación escribe en una API de base de datos bien definida, 
//por ejemplo ODBC, pero detrás de esta API encontrará que la implementación de cada controlador es 
//totalmente diferente para cada proveedor de base de datos (SQL Server, MySQL, Oracle, etc.).
//El patrón Bridge es un gran patrón para el desarrollo de controladores, pero rara vez se ve en JavaScript.

//El objetivo del ejemplo es mostrar que con el patrón Bridge los dispositivos de entrada y salida pueden 
//variar de forma independiente (sin cambios en el código); Los dispositivos están débilmente acoplados por dos 
//niveles de abstracción.(separa la parte del sistema que representa la abstraccion de la parte que implementa la abstraccion)

//JavaScript no admite clases abstractas, por lo tanto, la abstracción y el implementador no están incluidos. 
//Sin embargo, sus interfaces (propiedades y métodos) se implementan consistentemente en RefinedAbstraction y ConcreteImplementor. 
//En nuestro código de ejemplo, la abstracción representa los dispositivos de entrada y el implementador representa los dispositivos de salida.

//Gestures(movimientos de los dedos) y Mouse son dispositivos de entrada muy diferentes, pero sus acciones se asignan a un conjunto común de instrucciones 
//de salida: hacer clic, mover, arrastrar, etc. Screeny Audioson dispositivos de salida muy diferentes, pero responden al mismo conjunto de instrucciones. 
//Por supuesto, los efectos son totalmente diferentes, es decir, actualizaciones de vídeo versus efectos de sonido. El patrón Bridge permite que cualquier 
//dispositivo de entrada funcione con cualquier dispositivo de salida.

// input devices

var Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

// output devices

var Screen = function () {
    this.click = function () { console.log("Screen select"); }
    this.move = function () { console.log("Screen move"); }
    this.drag = function () { console.log("Screen drag"); }
    this.zoom = function () { console.log("Screen zoom in"); }
};

var Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screetch"); }
    this.zoom = function () { console.log("Sound volume up"); }
};

function run() {

    var screen = new Screen();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}

//hace una demostracion de como se relacionan entre si los componentes 