angular.module('starter.controllers', [])

    .controller('menuCtrl', function ($scope, $state) {})

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

});
