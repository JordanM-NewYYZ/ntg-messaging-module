ntgMessaging.directive('ntgMessageList', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagelist.tmpl.html',
        scope: {
            messageInfo: "=",
        }
    };
}]);