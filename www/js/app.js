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

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/inicio');
    });
