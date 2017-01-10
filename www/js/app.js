angular.module('starter', ['ionic', 'starter.controllers', 'starter.servicies_peticiones', 'starter.servicies_modelos', 'starter.directives'])

    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('inicio', {
        url: "/inicio",
        templateUrl: "templates/inicio.html",
        controller: 'loginCtrl'
    })
        .state('maristapp', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'menuCtrl'
    })
        .state('maristapp.bienvenida', {
        url: "/bienvenida",
        views: {
            'menuContent': {
                templateUrl: "templates/bienvenida.html",
                controller: 'bienvenidaCtrl'
            }
        }
    })
        .state('maristapp.cursos', {
        url: "/cursos",
        views: {
            'menuContent': {
                templateUrl: "templates/cursos.html",
                controller: 'cursosCtrl'
            }
        }
    })
        .state('maristapp.oracion', {
        url: "/cursos/oracion",
        views: {
            'menuContent': {
                templateUrl: "templates/oracion.html",
                controller: 'oracionCtrl'
            }
        }
    })
        .state('maristapp.evangelio', {
        url: "/evangelio",
        views: {
            'menuContent': {
                templateUrl: "templates/evangelio.html",
                controller: 'evangelioCtrl'
            }
        }
    })
        .state('maristapp.quienessomos', {
        url: "/quienessomos",
        views: {
            'menuContent': {
                templateUrl: "templates/quienessomos.html",
                controller: 'quienessomosCtrl'
            }
        }
    })

        .state('maristapp.lema', {
        url: "/lema",
        views: {
            'menuContent': {
                templateUrl: "templates/lema.html",
                controller: 'lemaCtrl'
            }
        }
    })
        .state('maristapp.buscador', {
        url: "/buscador",
        views: {
            'menuContent': {
                templateUrl: "templates/buscador.html",
                controller: 'buscadorCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/inicio');
});
