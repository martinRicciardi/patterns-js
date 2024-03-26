//singleton permite restringir la creacion de objetos
//pertenecientes a una clase o el valor de un tipo a un unico objeto
//su objetivo consiste en garantizar que una clase solo tenga 
//una instancia y proporcionar un punto de acceso global a ella

let logsInstance;

class Logs {
    constructor(data){
        if(!logsInstance){
            logsInstance = this;
            this._data = data
        }else{
            return logsInstance
        }
    }

    get data(){
        return this._data
    }
}

console.log(new Logs("hello")._data)
console.log(new Logs("hello2")._data)
console.log(new Logs("hell3")._data)
console.log(new Logs("hello4"))

//la clase lee si ya hay una instancia de logueo, si no la hay la crea
//si ya existe entra al mismo espacio de memoria y retorna la misma, mejora la velocidad de la pagina

//RESUMIDO: un patron que mejora la velocidad y optimizacion de la aplicacion