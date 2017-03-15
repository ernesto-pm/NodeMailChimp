function Usuario(id,email,nombre,apellido){
    this.id = id;
    this.email = email;
    this.nombre = nombre;
    this.apellido = apellido;
}

Usuario.prototype = {
    constructor: Usuario
};

module.exports = Usuario;