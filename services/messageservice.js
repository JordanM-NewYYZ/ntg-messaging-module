/* global ntgMessaging,angular */
'use strict()';
ntgMessaging.service('messagesService', ['$log', function ($log) {
    var message = {
        id: '',
        from: '',
        subject: '',
        body: '',
        date: '',
        status: '',
        isArchived: '',
        //        markAs: { Add a function here later } 
    };

    this.messagesList = [];
    this.archiveList = {};
    this.unreadCount = '';
    this.archivedCount = '';

    this.list = {};
    this.list.archived = [];

    //Message status
    this.info = {};
    this.info.totalCount = 0;
    this.info.unreadCount = 0;
    this.info.archivedCount = 0;


    var counter = this.totalCount;


    this.newMessage = function (id, from, subject, body, date, status, archived) {

        var newObj = angular.copy(message);
        newObj.id = id;
        newObj.from = from;
        newObj.subject = subject;
        newObj.body = body;
        newObj.date = date;
        newObj.status = status;
        newObj.isArchived = archived;

        //        console.log(newObj);
        return newObj;
        this.addMessage(newObj);
    }

    var that = this;
    this.addMessage = function (messageObj) {
        that.messagesList.push(messageObj);
        //        $log.info(this.messagesList);
        that.info.totalCount++;
        that.info.unreadCount++;

    }

    this.archiveMessage = function (messageObj) {
        that.info.archivedCount++;
        that.list.archived.push(messageObj);

        removeFromMessages(messageObj);



        //Removes duplicated messages*
        function removeFromMessages(messageObj, list) {
            list = that.messagesList;
            for (var i = list.length; i--;) {
                if (list[i] === messageObj) {
                    list.splice(i, 1);
                    that.info.totalCount--;
                }
            }
        }
    };

    this.unArchiveMessage = function (messageObj) {

        var list = this.archiveList;

        function removeFromMessages(list, messageObj) {
            for (var i = list.length; i--;) {
                if (list[i] === messageObj) {
                    list.splice(i, 1);
                }
            };
        };

    }

    //Show info functions

    this.showSubject = function (messageObj) {


    }



}]);