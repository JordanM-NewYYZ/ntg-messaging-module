ntgMessaging.directive('ntgMessageSummary', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
        require: '^ngModel',
        scope: {
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '=',
            archiveMessage: '&',
            messageStatus: '=',
            messagePriority: '=',
            updateStatus: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        }
    };
}]);