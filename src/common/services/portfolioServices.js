angular.module("portfolioServices", [])
  .constant("BASE_URL", "http://localhost:31415")
  .service("portfolioService", function ($http, BASE_URL) {
    this.getProjects = function () {
      return $http.get(BASE_URL + "/data/projects.json");
    };
  });

