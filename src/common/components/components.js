angular.module('components', [])
  .directive('portfolioheader', function () {
    return {
        templateUrl: 'components/templates/portfolioheader.html'
    };
  })
  .directive('hashtaglist', function () {
    return {
        templateUrl: 'components/templates/hashtaglist.html',
		scope: {
			project: "="
		}
    };
  });
