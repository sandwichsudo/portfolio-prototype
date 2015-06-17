angular.module("projectdetail", [])

  .config(function ($stateProvider, BASE_URL) {

    $stateProvider.state('projectdetail', {
      url: '/project-detail/:id',
      templateUrl: 'project-detail/project-detail.html',
      controller: 'ProjectDetailCtrl as projectdetail',
      resolve: {
        project: function ($http, $stateParams, portfolioService) {
          return portfolioService.getProjects()
            .then(function (res) {
              var projects =  res.data;
              for (var i = projects.length - 1; i >= 0; i--) {
                var nextProject = projects[i];
                if(nextProject.id === $stateParams.id){
                  return nextProject;
                }
              }
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


  .controller("ProjectDetailCtrl", function (project, navObject, BASE_URL) {
    var projectdetail = this;
    projectdetail.navObject = navObject;
    projectdetail.project = project;
    projectdetail.BASE_URL = BASE_URL;
  });
