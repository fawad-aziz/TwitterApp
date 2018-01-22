(function () {
	'use strict';
	angular.module('twitterApp')
	.controller('tweetController', appointmentController);
	
	appointmentController.$inject = [
        'twitterApp.services.sharedService',
        '$interval',
        '$log'
	];
	
	function appointmentController(sharedService, $interval, $log) {
		var vm = this;
		var appHostUrl = "http://tweetapi.azurewebsites.net/";
        var tweetUrl = "api/tweets";
        vm.tweetCollection = [];
		
		function init() {
            updateTweets();
			$interval(function (){
                updateTweets();
            },60000);
		};
        
        function updateTweets() {
            sharedService.callGetUrl(appHostUrl + tweetUrl,
                function (response) {
                    vm.tweetCollection = response.data;
                },
                function () {
                    $log.log("Something went wrong while trying to retrieve tweets. We will try again in a minute.");
                }
            );
        };

		
		init();
	}
})();