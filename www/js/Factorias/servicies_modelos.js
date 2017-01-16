angular.module("starter.servicies_modelos", [])
    .factory("Curso", function () {
    var cursos =  [{"id":1,"nombre":"1\u00ba Infantil"},{"id":2,"nombre":"2\u00ba Infantil"},{"id":3,"nombre":"3\u00ba Infantil"},{"id":4,"nombre":"1\u00ba Primaria"},{"id":5,"nombre":"2\u00ba Primaria"},{"id":6,"nombre":"3\u00ba Primaria"},{"id":7,"nombre":"4\u00ba Primaria"},{"id":8,"nombre":"5\u00ba Primaria"},{"id":9,"nombre":"6\u00ba Primaria"},{"id":11,"nombre":"1\u00ba E.S.O."},{"id":12,"nombre":"2\u00ba E.S.O."},{"id":13,"nombre":"3\u00ba E.S.O."},{"id":14,"nombre":"4\u00ba E.S.O."},{"id":100,"nombre":"1\u00ba Bachillerato y FP (GM)"},{"id":101,"nombre":"2\u00ba Bachillerato y FP (GS)"}];
    var cursoActual = -1;
    return {
        setCursos: function(oraciones) {
            this.cursos = oraciones;
        },
        setCursoActual: function(id) {
            cursoActual = id;
        },
        getCursoActual: function() {
            return cursoActual;
        },
        getCursos: function() {
            return cursos;
        }
    }


})


.factory("Usuario", function () {
    // Might use a resource here that returns a JSON arra

    var usuario ="";
    return {
        loadusuario: function () {
            var cargado = window.localStorage["usuario"];
            if (cargado != undefined && cargado != "vacio") {
                console.log(JSON.stringify(cargado));
                user = JSON.parse(cargado);
                return true;
            }
            return false;
        },
        saveusuario: function (password) {
            window.localStorage["usuario"] = JSON.stringify(password);
        },
        borrarusuario: function () {
            window.localStorage["usuario"] = "vacio";
        }
    }
})

    .factory("Oracion", function() {
        var oraciones = [];
        var oracionActual = {};
        return {
            getOraciones: function() {
                return oraciones;
            },
            setOraciones: function(oracionesbusqueda) {
                oraciones = oracionesbusqueda;
            },
            getOracionActual: function() {
                return oracionActual;
            },
            setOracionActual: function(oracion) {
                oracionActual = oracion;
            }

        }


})

;
