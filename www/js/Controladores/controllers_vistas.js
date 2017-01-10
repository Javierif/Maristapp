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
    $scope.texto = "MaristApp es la aplicaci\u00f3n m\u00f3vil y web para los centros educativos\u00a0maristas de las provincias Compostela, Ib\u00e9rica, L'Hermitage y Mediterr\u00e1nea. En ella encontrar\u00e1s material para poder motivar y animar la oraci\u00f3n de cada ma\u00f1ana.\r\n\r\n\u00a0\r\n\r\nAdem\u00e1s, puedes descarg\u00e1rtela\u00a0para que la\u00a0lleves siempre contigo.";
    var respuesta = Peticiones.getBienvenida();
    respuesta.then(
        function(result) {
            $scope.titulo = result.bienvenida.titulo;
            $scope.texto = result.bienvenida.texto;
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


    .controller('buscadorCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})


    .controller('evangelioCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})


    .controller('oracionCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})

    .controller('quienessomosCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

});

