ntgMessaging.directive('ntgMessageDetails', ['$log', function ($log) {
    'use strict';
    return {
        templateUrl: 'directives/ntgmessagedetails.tmpl.html',
        //        require: 'ntgMessageSummary',
        scope: {
            forMessage: '=',
            loadMessages: '=',
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '=',
            archiveMessage: '=',
            isUnread: '=',
            messageStatus: '='
        }
    };

}]);