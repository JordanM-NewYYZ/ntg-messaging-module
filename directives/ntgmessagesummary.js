ntgMessaging.directive('ntgMessageSummary', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
        require: '^ngModel',
        scope: {
            messages: '=',
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '=',
            archiveMessage: '&',
            messageStatus: '=',
            messagePriority: '=',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        }
    };
}]);