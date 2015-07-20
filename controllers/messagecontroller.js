ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', '$timeout', 'messagesService', function ($scope, $http, $log, $timeout, messagesService) {
    var vm = this;
    var mv = $scope;
    vm.allMessages = messagesService.messagesList;
    this.messagesService = messagesService;

    mv.infoCounters = messagesService.info;

    //Default value for message sort dropdown filter
    mv.ntgAttrs = "date";


    //Directive Attributes
    mv.messages = messagesService.messagesList;
    mv.markAs = messagesService.markAs;
    mv.archiveMessage = messagesService.archiveMessage;
    mv.checkPriority = messagesService.checkPriority;
    mv.readMessage = messagesService.readMessage;
    mv.fromWho = messagesService.messagesList.from;
    mv.subject = messagesService.messagesList.subject;
    mv.date = messagesService.messagesList.date;
    mv.details = messagesService.messagesList.body;

    //List Attributes
    mv.selectMessage = messagesService.selectMessage;
    mv.selectedMessageList = messagesService.list.selection;
    mv.archiveSelectedMessages = messagesService.archiveSelectedMessages;

    $http.get('json/messages.json')
        .success(function (responses) {
            //            console.warn(responses);
            var messagesFromJson = [];
            angular.forEach(responses, function (response) {
                //console.warn(value,index);
                var message = messagesService.newMessage(
                    response.id,
                    response.from,
                    response.subject,
                    response.body,
                    response.date,
                    response.status,
                    response.priority,
                    response.archived
                );
                messagesFromJson.push(message);
            });

            for (var i = 0; i < messagesFromJson.length; i++) {
                messagesService.addMessage(messagesFromJson[i]);
            }
        })
        .error(function (response) {
            $log.error('Unable to get json', response);
        });

}]);