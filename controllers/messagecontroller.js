ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', '$timeout', 'messagesService', function ($scope, $http, $log, $timeout, messagesService) {
    var vm = this;
    vm.allMessages = messagesService.messagesList;
    this.messagesService = messagesService;

    vm.messages = messagesService.messagesList;
    vm.infoCounters = messagesService.info;

    //Default value for message sort dropdown filter
    vm.ntgAttrs = "date";


    //List directive
    vm.archiveMessage = messagesService.archiveMessage;

    //Summary directive
    vm.messages = messagesService.messagesList;
    vm.markAs = messagesService.markAs;
    vm.checkPriority = messagesService.checkPriority;
    vm.readMessage = messagesService.readMessage;

    vm.fromWho = messagesService.messagesList.from;
    vm.subject = messagesService.messagesList.subject;
    vm.date = messagesService.messagesList.date;
    vm.details = messagesService.messagesList.body;




    //Details directive



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