/* global ntgMessaging,angular */
'use strict()';
ntgMessaging.factory('messagesService', function () {


    var message = {
        id: '',
        from: '',
        subject: '',
        body: '',
        date: '',
        status: '',
        archived: '',
        //        markAs: { Add a function here later } 
    };

    var messagesService = {

        messagesList: [],
        archiveList: [],
        unreadCount: '',
        archivedCount: '',
        totalCount: 0,

        newMessage: function (id, from, subject, body, date, status, archived) {

            var newObj = angular.copy(message);
            newObj.id = id;
            newObj.subject = subject;
            newObj.body = body;
            newObj.date = date;
            newObj.status = status;
            newObj.archived = archived;

            return newObj;
        },

        addMessage: function (messageObj) {
            this.messagesList.push(messageObj);
            this.totalCount++;
            this.unreadCount++;
        }
    };

    return messagesService;


    //    this.archiveMessage = function (messageObj) {
    //        this.archivedCount++;
    //        this.archiveList.push(messageObj);
    //
    //        var list = this.messagesList;
    //
    //        //Removes duplicated messages*
    //        function removeFromMessages(list, messageObj) {
    //            for (var i = list.length; i--;) {
    //                if (list[i] === messageObj) {
    //                    list.splice(i, 1);
    //                }
    //            };
    //        };
    //    };
    //
    //    this.unArchiveMessage = function (messageObj) {
    //
    //        var list = this.archiveList;
    //
    //        function removeFromMessages(list, messageObj) {
    //            for (var i = list.length; i--;) {
    //                if (list[i] === messageObj) {
    //                    list.splice(i, 1);
    //                }
    //            };
    //        };
    //
    //    }

    //Count functions

});