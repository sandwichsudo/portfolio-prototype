angular.module("home", [])

  .config(function ($stateProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'pages/home/home.html',
      controller: 'HomeCtrl as home',
      resolve: {
        projects: function ($http, portfolioService) {
          return portfolioService.getProjects()
            .then(function (res) {
              return res.data;
            });
        },
        navObject:function ($http, navService) {
           return navService.getNavObject()
            .then(function (res) {
              return res;
            });
        },
        myInfo:function ($http, myInfoService) {
           return myInfoService.getMyInfo()
            .then(function (res) {
              return res.data;
            });
        }
      }
    });


  })

  .controller("HomeCtrl", function (projects,navObject,myInfo, BASE_URL) {
    var home = this;
    home.BASE_URL = BASE_URL;
    home.projects = projects;
    home.navObject = navObject;
    home.myInfo = myInfo;
  });


