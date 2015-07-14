ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', 'messagesService', function ($scope, $http, $log, messagesService) {
    var vm = this;
    vm.allMessages = messagesService.messagesList;

    //Default value for dropdown filter
    $scope.ntgAttrs = "date";

    $scope.allmessages = messagesService.totalCount;

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