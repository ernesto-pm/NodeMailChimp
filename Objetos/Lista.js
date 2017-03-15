function Lista(){
    this.usuariosRojos=[];
    this.usuariosAzules=[];
}

Lista.prototype = {
    constructor: Lista,
    aniadirUsuarioRojo: function(usuario){
        if(indexOfId(this.usuariosRojos,usuario.id) == -1){
            this.usuariosRojos.push(usuario);
        }
    },
    aniadirUsuarioAzul : function(usuario){
        if(indexOfId(this.usuariosAzules,usuario.id) == -1){
            this.usuariosAzules.push(usuario);
        }
    }
};

function indexOfId(array,id){
    for(let i=0;i<array.length;i++){
        if(array[i].id === id){
            return i;
        }
    }
    return -1;
}

module.exports = Lista;