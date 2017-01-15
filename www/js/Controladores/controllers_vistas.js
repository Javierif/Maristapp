angular.module('starter.controllers', [])

    .controller('menuCtrl', function ($scope, $state) {

})

    .controller('loginCtrl', function ($scope, Peticiones, $state, $ionicLoading, $location) {

    $scope.login = function(password) {

        // $state.go("app.bienvenida");

        $ionicLoading.show({
            template: '<i class="icon ion-looping"></i> Conectando con el servidor...'
        });
        var respuesta = Peticiones.login(password);
        respuesta.then(
            function (result) {
                console.log("EL RESULTADO ES " + JSON.stringify(result) + " Y MI RESPUESTA ES " + password) ;
                $ionicLoading.hide();
                if(result.codigo == password) {
                    $location.url("/app/bienvenida");
                } else {
                    window.plugins.toast.showShortBottom("código incorrecto.",
                                                         function (a) {},
                                                         function (b) {});
                }
            },
            function (errorPlayload) {});

    }
})

    .controller('bienvenidaCtrl', function ($scope, Peticiones, $state, $ionicLoading) {
    $scope.titulo = "Bienvenidos a MaristApp";
    $scope.texto = Peticiones.getEjemploBienvenida();
    var respuesta = Peticiones.getBienvenida();
    respuesta.then(
        function (result) {
            console.log("EL RESULTADO ES " + JSON.stringify(result))
            $scope.titulo = result.bienvenida.titulo;
            $scope.texto = result.bienvenida.texto;
        }
    )
})


    .controller('cursosCtrl', function ($scope, Peticiones, $state, $ionicLoading, $ionicPopup, Curso) {
    $scope.cursos = Curso.getCursos();
    var respuesta = Peticiones.getCursos();
    respuesta.then(
        function(result){
            Curso.setCursos(result.cursos);
        }
    );


    $scope.oracion = function(idOracion) {
        console.log("idoracion " + idOracion);
        Curso.setCursoActual(idOracion);
        console.log("Curso actual " + Curso.getCursoActual());
        var respuesta = Peticiones.getOracion("es", Curso.getCursoActual());
        respuesta.then(function (result) {
            if (result.oracion) {
                $state.go("maristapp.oracion");
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: '<b>No hay oración para este día</b>',
                    buttons: [
                        {
                            text: '<b>Aceptar</b>',
                            type: 'button-light'
                        }
                    ]
                });
            }
        });

    }
})



    .controller('lemaCtrl', function ($scope, Peticiones, $state, $ionicLoading) {
    //$scope.lema = Peticiones.getEjemploLema();


    var respuesta  = Peticiones.getLema("es");
    respuesta.then( function(result) {
        console.log("RESULTADO DEL LEMA " + JSON.stringify(result));
        $scope.lema = result;
    });

})

    .controller('buscadorCtrl', function ($scope, Peticiones, $state, $ionicLoading,Oracion) {

    $scope.buscar = function (texto) {
        console.log("DENTRO DE BUSCADOR " + texto)
        $scope.busqueda = Peticiones.getEjemploBusqueda();

        /*var respuesta  = Peticiones.getBusqueda("es",texto);
        respuesta.then( function(result) {
            Oracion.setOraciones(resutl);
            $scope.busqueda = Oracion.getOraciones();
        });*/
    }
    $scope.verOracion = function(oracion) {
        Oracion.setOracionActual(oracion);
        $state.go("maristapp.oracionbusqueda");
    }

})


    .controller('oracionCtrl', function ($scope, Peticiones, $state, $ionicLoading,Curso) {
    $scope.oracion = Peticiones.getEjemploOracion();

    var respuesta  = Peticiones.getOracion("es",Curso.getCursoActual());
    respuesta.then( function(result) {
        console.log("RESULTADO DE LA ORACION " + JSON.stringify(result));
        $scope.oracion = result;
    });

})

    .controller('oracionbusquedaCtrl', function ($scope, Peticiones, Oracion, $state, $ionicLoading,Curso) {
    $scope.oracion = Oracion.getOracionActual();

    var respuesta  = Peticiones.getOracion("es",Curso.getCursoActual());
    respuesta.then( function(result) {
        console.log("RESULTADO DE LA ORACION " + JSON.stringify(result));
        $scope.oracion = result;
    });

})

    .controller('quienessomosCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})
    .controller('evangelioCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

});

