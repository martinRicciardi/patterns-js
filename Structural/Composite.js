//propone el uso de composiciones para tratar de manera uniforme elementos individuales como grupales.
//de esta manera, que al cliente le sea indiferente.

//El patrón Compuesto permite la creación de objetos con propiedades que son elementos primitivos o una 
//colección de objetos. Cada elemento de la colección puede contener otras colecciones, creando estructuras profundamente anidadas.

//Un control de árbol es un ejemplo perfecto de un patrón compuesto. Los nodos del árbol contienen un objeto individual (nodo hoja) 
//o un grupo de objetos (un subárbol de nodos).
//Todos los nodos del patrón compuesto comparten un conjunto común de propiedades y métodos que admiten objetos individuales y 
//colecciones de objetos. Esta interfaz común facilita enormemente el diseño y la construcción de algoritmos recursivos que iteran 
//sobre cada objeto de la colección compuesta.

//En nuestro ejemplo se crea una estructura de árbol a partir de Node objetos. Cada nodo tiene un nombre y 4 métodos: add, remove, 
//getChildy hasChildren. Los métodos se agregan al Node prototipo. Esto reduce los requisitos de memoria ya que estos métodos ahora 
//son compartidos por todos los nodos. Node es completamente recursivo y no hay necesidad de objetos Componente u Hoja separados.
//Un pequeño árbol compuesto se construye agregando nodos a los nodos principales. Una vez completado, invocamos traverseel cual itera 
//sobre cada nodo en el árbol y muestra su nombre y profundidad (mostrando sangría).

var Node = function (name) {
    this.children = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

function run() {
    var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    traverse(1, tree);
}