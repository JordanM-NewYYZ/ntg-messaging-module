ntgMessaging.directive('ntgMessageSummary', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
        scope: {
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '='
        }
    };
}]);