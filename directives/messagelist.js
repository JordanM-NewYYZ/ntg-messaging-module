ntgMessaging.directive('messageList', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/messagelist.tmpl.html',
        scope: {
            messageInfo: "="
        }
    };
}]);