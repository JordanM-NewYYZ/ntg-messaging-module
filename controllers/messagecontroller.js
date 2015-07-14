ntgMessaging.controller('messagesController', ['$scope', '$http', '$log', 'messagesService', function ($scope, $http, $log, messagesService) {
    var vm = this;
    vm.allMessages = messagesService.messagesList;

    function init() {
        $log.debug('look i init\'d');
        $http.get('json/messages.json')
            .success(function (responses) {

                console.warn(responses);

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


                console.warn(messagesService.messagesList.length);

            })
            .error(function (reponse) {
                $log.error('Unable to get json', response);
            });
    }

    init();
}]);