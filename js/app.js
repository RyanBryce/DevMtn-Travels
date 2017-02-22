angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('about',{
                url:'/',
                templateUrl: 'views/about.html'
            })
            .state('about.adventurers',{
                url: 'adventurers',
                templateUrl:'views/about-adventurers.html'
            })
            .state('about.contact',{
                url:'/contact',
                templateUrl: "views/contact.html",
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "views/packages.html",
                controller: 'packages'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "views/booked.html",
                controller:'booked'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "views/locations.html",
                controller: 'locations'
            });

        $urlRouterProvider
            .otherwise('/');
    });
