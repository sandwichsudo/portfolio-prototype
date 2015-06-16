angular.module("home", [])

  .config(function ($stateProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl as home',
      resolve: {
        projects: function ($http, portfolioService) {
          return portfolioService.getProjects()
            .then(function (res) {
              return res.data;
            });
        }
      }
    });


  })

  .controller("HomeCtrl", function (projects, BASE_URL) {
    var home = this;
    home.BASE_URL = BASE_URL;
    console.log(home);
    home.projects = projects;
    home.isNavOpen = false;
  });


