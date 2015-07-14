ntgMessaging.config(function ($routeProvider) {
'use strict';
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/inbox.html',
        controller: 'messagesController',
        controllerAs: 'message'
    })
//        .when('/inbox/message/:id', {
//        templateUrl: 'views/message.html',
//        controller: 'messageController',
//        controllerAs: 'message'
//    })
        .otherwise({
        redirectTo: '/'
    });
});