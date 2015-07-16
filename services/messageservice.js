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

    var that = this;
    this.addMessage = function (messageObj) {
        that.messagesList.push(messageObj);
        that.info.totalCount++;
        that.info.unreadCount++;

    };

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

    this.readMessage = function (messageObj) {
        console.log("hello");
        if (messageObj.status === "unread") {
            setTimeout(function () {
                console.log(messageObj);
                messageObj.status === "read";
                that.info.unreadCount--;
            }, 200);
        }
    };


    this.markAs = function setPriority(messageObj) {
        var list = that.messagesList;

        for (var i = 0; i < list.length; i++) {
            if (list[i].id === messageObj.id) {
                if (messageObj.priority === true) {
                    console.log("here -- true");
                    console.log(list[i]);
                    return list[i].status = false;
                }
                if (messageObj.priority === false) {
                    console.log("here -- false");
                    return list[i].status = true;
                }
            }
        }
    };
}]);