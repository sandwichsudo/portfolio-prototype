angular.module("project-detail", [])

/*  .config(function ($stateProvider, BASE_URL) {

    $stateProvider.state('project-detail', {
      url: '/project-detail/:id',
      templateUrl: 'project-detail/project-detail.html',
      controller: 'projectDetailCtrl as project-detail',
      resolve: {
        project: function ($http, $stateParams) {
          return $http.get(BASE_URL + "/data/projects/" + $stateParams.id).then(function (res) {
            return res.data;
          })
        }
      }
    })

  })*/


  .controller("projectDetailCtrl", function (game, BASE_URL) {
/*    var projectDetail = this;

    projectDetail.game = game;
    projectDetail.BASE_URL = BASE_URL;*/
  });
