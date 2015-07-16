ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', '$timeout', 'messagesService', function ($scope, $http, $log, $timeout, messagesService) {
    var vm = this;
    vm.allMessages = messagesService.messagesList;
    this.messagesService = messagesService;

    $scope.messages = messagesService.messagesList;
    
    //Default value for dropdown filter
    $scope.ntgAttrs = "date";

    $scope.infoCounters = messagesService.info;

    //List directive
    $scope.archiveMessage = messagesService.archiveMessage;

    //Summary directive
    $scope.fromWho = messagesService.messagesList;


    //Details directive
    $scope.messageId = messagesService.messagesList.id;


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