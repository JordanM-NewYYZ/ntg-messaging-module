ntgMessaging.directive('messageList', ['$log', function ($log) {
    'use strict';

    return {
        replace: true,
        templateUrl: 'directives/messagelist.tmpl.html',
        scope: {
            messageInfo: "="
        }
    };
}]);