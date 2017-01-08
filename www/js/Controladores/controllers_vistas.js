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


    .controller('cursosCtrl', function ($scope, Peticiones, $state, $ionicLoading) {
    $scope.cursos = [{"id":1,"nombre":"1\u00ba Infantil"},{"id":2,"nombre":"2\u00ba Infantil"},{"id":3,"nombre":"3\u00ba Infantil"},{"id":4,"nombre":"1\u00ba Primaria"},{"id":5,"nombre":"2\u00ba Primaria"},{"id":6,"nombre":"3\u00ba Primaria"},{"id":7,"nombre":"4\u00ba Primaria"},{"id":8,"nombre":"5\u00ba Primaria"},{"id":9,"nombre":"6\u00ba Primaria"},{"id":11,"nombre":"1\u00ba E.S.O."},{"id":12,"nombre":"2\u00ba E.S.O."},{"id":13,"nombre":"3\u00ba E.S.O."},{"id":14,"nombre":"4\u00ba E.S.O."},{"id":100,"nombre":"1\u00ba Bachillerato y FP (GM)"},{"id":101,"nombre":"2\u00ba Bachillerato y FP (GS)"}];
    var respuesta = Peticiones.getCursos();
    respuesta.then(
        function(result){
            $scope.cursos = result.cursos;
        }
    );
})

    .controller('evangelioCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})


    .controller('oracionCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

})

    .controller('quienessomosCtrl', function ($scope, Peticiones, $state, $ionicLoading) {

});

