angular.module('components', [])
  .directive('portfolioheader', function () {
    return {
        templateUrl: 'components/templates/portfolioheader.html',
        scope: {
          page: "="
        }
    };
  })
  .directive('hashtaglist', function () {
    return {
        templateUrl: 'components/templates/hashtaglist.html',
    		scope: {
    			project: "="
    		}
    };
  })
  .directive('portfolionav', function () {
    return {
        templateUrl: 'components/templates/portfolionav.html',
        scope: {
          projects: "="
        }
    };
  })
  .directive('projectlist', function () {
    return {
        templateUrl: 'components/templates/projectlist.html',
        scope: {
          projects: "="
        }
    };
  });
