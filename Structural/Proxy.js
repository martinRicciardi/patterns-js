//El patrón Proxy proporciona un objeto sustituto o marcador 
//de posición para otro objeto y controla el acceso a este otro objeto.

//nos propone no modificar el tipo actual el que realiza toda la gestion
//de las nominas para incorporar los requisitos de seguridad, si no crear 
//un objeto nuevo. Los clientes no tienen acceso al objeto original si no 
//una referencia a este objeto nuevo

//En la programación orientada a objetos, los objetos hacen el trabajo 
//que anuncian a través de su interfaz (propiedades y métodos). 
//Los clientes de estos objetos esperan que este trabajo se realice de 
//forma rápida y eficiente. Sin embargo, hay situaciones en las que un 
//objeto está severamente limitado y no puede cumplir con su responsabilidad.
//Normalmente, esto ocurre cuando existe una dependencia de un recurso remoto 
//(lo que genera latencia de red) o cuando un objeto tarda mucho en cargarse.
//En situaciones como éstas, aplica el patrón Proxy y crea un objeto proxy que
//'reemplaza' al objeto original. El Proxy reenvía la solicitud a un objeto de destino.
//La interfaz del objeto Proxy es la misma que la del objeto original y es posible que 
//los clientes ni siquiera sepan que están tratando con un proxy en lugar del objeto real.

//El GeoCoderobjeto simula el servicio de codificación geográfica de Google Maps. 
//En la codificación geográfica, usted proporciona una ubicación (un lugar en la tierra) 
//y le devolverá su latitud/longitud (latlng). Nuestro GeoCodersolo puede resolver 4 
//ubicaciones, pero en realidad son millones, porque involucra países, ciudades y calles.
//El programador decidió implementar un objeto Proxy porque GeoCoderes relativamente lento. 
//El objeto proxy se llama GeoProxy. Se sabe que están llegando muchas solicitudes repetidas 
//(para la misma ubicación). Para acelerar las cosas, GeoProxyse almacenan en caché las ubicaciones
// solicitadas con frecuencia. Si una ubicación aún no está almacenada en caché, se dirige al 
//GeoCoderservicio real y almacena los resultados en la caché.
//Se consultan varias ubicaciones de ciudades y muchas de ellas son para la misma ciudad. 
//GeoProxyconstruye su caché mientras admite estas llamadas. Al final GeoProxy<ha tramitado 11 
//solicitudes pero ha tenido que salir GeoCodersólo 3 veces. Observe que el programa cliente no tiene 
//conocimiento sobre el objeto proxy (llama a la misma interfaz con el método estándar getLatLng).

function GeoCoder() {

    this.getLatLng = function (address) {

        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    return {
        getLatLng: function (address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            console.log(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function () {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
};

function run() {

    var geo = new GeoProxy();

    // geolocation requests

    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    console.log("\nCache size: " + geo.getCount());
    
}