ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', '$timeout', 'messagesService', function ($scope, $http, $log, $timeout, messagesService) {
    var vm = this;
    vm.allMessages = messagesService.messagesList;
    this.messagesService = messagesService;

    $scope.messages = messagesService.messagesList;
    $scope.infoCounters = messagesService.info;

    //Default value for message sort dropdown filter
    $scope.ntgAttrs = "date";


    //List directive
    $scope.archiveMessage = messagesService.archiveMessage;

    //Summary directive
    $scope.messages = messagesService.messagesList;
    $scope.markAs = messagesService.markAs;
    $scope.checkPriority = messagesService.checkPriority;
    $scope.readMessage = messagesService.readMessage;

    $scope.fromWho = messagesService.messagesList.from;
    $scope.subject = messagesService.messagesList.subject;
    $scope.date = messagesService.messagesList.date;
    $scope.details = messagesService.messagesList.body;




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