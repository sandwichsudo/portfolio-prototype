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
          navobject: "="
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
  })
  .directive('creditlist', function () {
    return {
        templateUrl: 'components/templates/creditlist.html',
        scope: {
          credits: "="
        }
    };
  })
  .directive('projectinfo', function () {
    return {
        templateUrl: 'components/templates/projectinfo.html',
        scope: {
          project: "="
        }
    };
  })
  .directive('miniprofile', function () {
    return {
        templateUrl: 'components/templates/miniprofile.html',
        scope: {
          myinfo: "="
        }
    };
  })
  .directive('portfoliofooter', function () {
    return {
        templateUrl: 'components/templates/portfoliofooter.html',
        scope: {
          myinfo: "="
        }
    };
  });