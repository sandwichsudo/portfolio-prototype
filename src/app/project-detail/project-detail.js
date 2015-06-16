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
        }
       }
    });

  })


  .controller("ProjectDetailCtrl", function (project, BASE_URL) {
    var projectdetail = this;

    projectdetail.project = project;
    projectdetail.BASE_URL = BASE_URL;
  });
