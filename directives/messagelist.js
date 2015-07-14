ntgMessaging.directive('messageList', ['$log', function($log) {
    return {
        replace: true,
        templateUrl: 'directives/messagelist.tmpl.html',
        scope: true,
        controller: 'messagesController',
        controllerAs: 'messages'
    };
    
}]);