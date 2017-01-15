angular.module('starter.controllers', [])

    .controller('menuCtrl', function ($scope, $state) {

})

    .controller('loginCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

    $scope.login = function(password) {
        $ionicLoading.show({
            template: '<i class="icon ion-looping"></i> Conectando con el servidor...'
        });
        var respuesta = Peticiones.login(password);
        respuesta.then(
            function (result) {
                $ionicLoading.hide();
                if(result.codigo == password) {
                    $state.go("app.bienvenida");
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
        function(result) {
            console.log("RESUTALDO BIENVENIDA ES " + result);
            $scope.result = result;
        }
    )
})


    .controller('cursosCtrl', function ($scope, Peticiones, $state, $ionicLoading,Curso) {
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
        $state.go("maristapp.oracion");
    }
})



    .controller('lemaCtrl', function ($scope, Peticiones, $state, $ionicLoading) {
    $scope.lema = Peticiones.getEjemploLema();


    var respuesta  = Peticiones.getLema("es");
    respuesta.then( function(result) {
        //alert("RESULTADO DEL LEMA " + result);
        $scope.lema = result;
    });

})

    .controller('buscadorCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

    $scope.buscar = function(texto) {
        $scope.busqueda = Peticiones.getEjemploBusqueda();

        var respuesta  = Peticiones.getBusqueda(texto);
        respuesta.then( function(result) {
            //alert("RESULTADO DEL LEMA " + result);
            $scope.busqueda = result;
        });
    }

})


    .controller('evangelioCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})


    .controller('oracionCtrl', function ($scope, Peticiones, $state, $ionicLoading,Curso) {
    $scope.oracion = Peticiones.getEjemploOracion();

    var respuesta  = Peticiones.getOracion("es",Curso.getCursoActual());
    respuesta.then( function(result) {
        //alert("RESULTADO DE LA ORACION " + result);
        $scope.oracion = result;
    });

})


    .controller('quienessomosCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

});

