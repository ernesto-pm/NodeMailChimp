function Lista(){
    this.usuariosRojos=[];
    this.usuariosAzules=[];
}

Lista.prototype = {
    constructor: Lista,
    aniadirUsuarioRojo: function(usuario){
        if(this.usuariosRojos.indexOf(usuario.id) == -1){
            this.usuariosRojos.push(usuario);
        }
    },
    aniadirUsuarioAzul : function(usuario){
        this.usuariosAzules.push(usuario);
    }
};

module.exports = Lista;