angular.module("portfolioServices", [])
  .constant("BASE_URL", "http://localhost:31415")
  .service("portfolioService", function ($http, BASE_URL) {
    this.getProjects = function () {
      return $http.get(BASE_URL + "/data/projects.json");
    };
  }) 
  .service("creditService", function ($http, BASE_URL) {
    this.getCredits = function () {
      return $http.get(BASE_URL + "/data/credit.json");
    };
  }) 
  .service("navService", function ($http, BASE_URL) {
    this.getNavObject = function () {
      return $http.get(BASE_URL + "/data/projects.json")
      .then(function(res) {
          var navObject ={};
          navObject.projects = res.data; 
          return $http.get(BASE_URL + "/data/pages.json")
            .then(function(res) {
              navObject.pages = res.data; 
              navObject.isNavOpen = false;
              return navObject;
    		    }, function(reason) {
    		      console.err("Could not get Nav object");
            });
          }, 
          function(reason) {
            console.err("Could not get projects object");
		      }
      );
    };
  });

