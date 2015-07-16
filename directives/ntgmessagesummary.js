ntgMessaging.directive('ntgMessageSummary', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
        require: '^ngModel',
        scope: {
            fromWho: '=',
            defaultStatus: '=',
            subject: '=',
            date: '=',
            details: '=',
            archiveMessage: '&',
            messageStatus: '=',
            messagePriority: '=',
            statusSelector: '='
        }
    };
}]);