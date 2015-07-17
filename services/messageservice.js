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
        priority: false,
        isArchived: false
            //        markAs: { Add a function here later } 
    };

    this.messagesList = [];

    this.list = {};
    this.list.archived = [];

    //Message status
    this.info = {};
    this.info.totalCount = 0;
    this.info.unreadCount = 0;
    this.info.archivedCount = 0;

    var that = this;

    //Constructors
    this.newMessage = function (id, from, subject, body, date, status, priority, archived) {

        var newObj = angular.copy(message);
        newObj.id = id;
        newObj.from = from;
        newObj.subject = subject;
        newObj.body = body;
        newObj.date = date;
        newObj.status = status;
        newObj.priority = priority;
        newObj.isArchived = archived;

        return newObj;
        this.addMessage(newObj);
    };

    this.addMessage = function (messageObj) {
        that.messagesList.push(messageObj);
        that.info.totalCount++;
        that.info.unreadCount++;

    };


    //Archive / Unarchive

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
            }
        }

    };

    //Message priority & status functions

    this.readMessage = function (messageObj) {
        var list = that.messagesList;
        var count = that.info.unreadCount;

        if (messageObj.status === "unread") {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === messageObj.id) {
                    list[i].status = "read";
                    count--;
                }
            }
        }
    };

    this.markAs = function (messageObj) {
        var list = that.messagesList;

        for (var i = 0; i < list.length; i++) {
            if (list[i].id === messageObj.id) {
                if (messageObj.priority === true) {
                    return list[i].priority = false;
                }
                if (messageObj.priority === false) {
                    return list[i].priority = true;
                }
            }
        }
    };

    this.checkPriority = function (messageObj) {
        if (messageObj.priority === true)
            return true;
        if (messageObj.priority === false)
            return false;
    };
            }]);