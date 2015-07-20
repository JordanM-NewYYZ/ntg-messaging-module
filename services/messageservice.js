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
    this.list.selection = [];

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
        //        this.addMessage(newObj);
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

        function removeFromMessages(messageObj, list) {
            list = that.messagesList;
            for (var i = list.length; i--;) {
                if (list[i] === messageObj) {
                    list.splice(i, 1);
                    that.info.totalCount--;
                    if (messageObj.status === "unread") {
                        that.info.unreadCount--;
                    }
                }
            }
        }
    };

    this.unArchiveMessage = function (messageObj) {
        archivedlist = that.list.archived;
        that.messagesList.push(messageObj);

        function removeFromArchived(list, messageObj) {
            for (var i = list.length; i--;) {
                if (list[i] === messageObj) {
                    list.splice(i, 1);
                    that.info.totalCount++;
                    if (messageObj.status === "unread") {
                        that.info.unreadCount++;
                    }
                }
            }
        }

    };

    //Message priority & status functions

    this.readMessage = function (messageObj) {
        var list = that.messagesList;

        if (messageObj.status === "unread") {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === messageObj.id) {
                    that.info.unreadCount--;
                    list[i].status = "read";
                }
            }
        }
    };

    this.markAs = function (messageObj) {
        var list = that.messagesList;

        for (var i = 0; i < list.length; i++) {
            if (list[i].id === messageObj.id) {
                if (messageObj.priority === true) {
                    console.log(messageObj);
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

    this.selectMessage = function (messageObj) {
        selected = that.list.selection;

        for (var i = 0; i < selected.length; i++) {
            selected.push(messageObj);
            console.log("Pushed: ", selected);
            if (selected[i] === messageObj) {
                selected.splice(i, 1);
                console.log("Removed: ", selected);
            }
        }
        if (selected.length === 0) {
            selected.push(messageObj);
            console.log("Initial Push!");
        }
    }

    this.archiveSelectedMessages = function (messages) {
        count = messages.length
        that.info.archivedCount + count;
        that.list.archived.push(messages);
        removeFromMessages(messages);
        that.list.selection = [];

        //Write function to iterate through the array and remove the messages from the main list
    }
}]);