function Lista(){
    this.usuariosRojos=[];
    this.usuariosAzules=[];
}

Lista.prototype = {
    constructor: Lista,
    aniadirUsuarioRojo: function(usuario){
        this.usuariosRojos.push(usuario);
    },
    aniadirUsuarioAzul : function(usuario){
        this.usuariosAzules.push(usuario);
    }
};

module.exports = Lista;