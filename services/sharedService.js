(function () {
    'use strict';

    angular
        .module('twitterApp')
        .service('twitterApp.services.sharedService', sharedService);

    sharedService.inject = ['$http'];

    function sharedService($http) {
        this.defaultErrorHandler = function defaultErrorHandler(response, customMessage) {
			if (typeof customMessage === 'undefined') {
				customMessage = "Error processing Api call";
			}

			if (response.data && response.data.message) {
				BootstrapDialog.alert(customMessage + ": " + response.data.message);
			} else {
				BootstrapDialog.alert(customMessage + ": " + response.status + ": " +response.statusText);
			}
		};

        this.callGetUrl = function callGetUrl(url, successHandler, errorHandler) {
			if (typeof errorHandler === 'undefined') {
				errorHandler = this.defaultErrorHandler;
			}

			return $http({
				url: url,
				method: 'GET',
			})
				.then(successHandler, errorHandler);
		};

		this.callDeleteUrl = function callDeleteUrl(url, successHandler, errorHandler) {
			if (typeof errorHandler === 'undefined') {
				errorHandler = this.defaultErrorHandler;
			}

			return $http.delete(url)
				.then(successHandler, errorHandler);
		};

		this.callPostUrl = function callPostUrl(url, data, successHandler, errorHandler) {
			if (typeof errorHandler === 'undefined') {
				errorHandler = this.defaultErrorHandler;
			}

			return $http.post(url, data)
				.then(successHandler, errorHandler);
		};

		this.callPutUrl = function callPutUrl(url, data, successHandler, errorHandler) {
			if (typeof errorHandler === 'undefined') {
				errorHandler = this.defaultErrorHandler;
			}

			return $http.put(url, data)
				.then(successHandler, errorHandler);
		};
    }
})();