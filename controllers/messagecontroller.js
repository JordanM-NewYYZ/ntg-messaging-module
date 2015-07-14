ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', 'messagesService', function($scope, $http, $log, messagesService) {
    
    $scope.messages = messagesService.messagesList;
    
            $http.get('json/messages.json')
            .success(function (responses) {
                angular.forEach(responses, function(responses) {
                    var message = messagesService.newMessage(responses.id, responses.from, responses.subject, responses.body, responses.date, responses.status, responses.archived)
                    message.id = responses.id;
                    message.from = responses.from;
                    message.subject = responses.subject;
                    message.body = responses.body;
                    message.date = responses.date;
                    message.status = responses.status;
                    message.archived = false;

                    messagesService.addMessage(message);
//                    messagesService.totalMessagesCount(message);

                });
                    
            })
            .error(function (reponse) {
                $log.error('Unable to get json', response);
            });
    
}]);