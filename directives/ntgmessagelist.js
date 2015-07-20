ntgMessaging.directive('ntgMessageList', ['$log', function ($log) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagelist.tmpl.html',
        scope: {
            messages: '=',
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '=',
            messageStatus: '=',
            messagePriority: '=',
            archiveMessage: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        }
    };
}]);