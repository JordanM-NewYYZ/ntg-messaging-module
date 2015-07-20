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
    this.list.selection = [{
        "id": 1,
        "from": "Bob",
        "subject": "Important Meeting",
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "1436449905",
        "status": "unread",
        "priority": false,
        "archived": false
 }];

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

        //Removes duplicated messages*
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
        addMessage(selected, messageObj);

        function addMessage(selected, message) {
            selected.push(messageObj);
            console.log("Pushed: ", selected);
            checkStatus(selected, message);
        }

        function checkStatus(selected, message) {
            for (var i = 0; i < selected.length; i++) {
                if (selected[i] === messageObj) {
                    selected.splice(i);
                    console.log("Removed: ", selected);
                }
            }
        }
    }

            }]);