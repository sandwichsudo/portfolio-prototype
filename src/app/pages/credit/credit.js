angular.module("credit", [])

  .config(function ($stateProvider) {

    $stateProvider.state('credit', {
      url: '/credit',
      templateUrl: 'pages/credit/credit.html',
      controller: 'CreditCtrl as credit',
      resolve: {
        credits: function ($http, creditService) {
          return creditService.getCredits()
            .then(function (res) {
              return res.data;
            });
        },
        navObject:function ($http, navService) {
           return navService.getNavObject()
            .then(function (res) {
              return res;
            });
        }
      }
    });


  })

  .controller("CreditCtrl", function (credits, navObject, BASE_URL) {
    var credit = this;
    credit.BASE_URL = BASE_URL;
    credit.credits = credits;
    credit.navObject = navObject;
  });


