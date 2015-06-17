angular.module('portfolio', 
	['ui.router','ngAnimate', 'components', 
	'portfolioServices', 'home','projectdetail','credit'])

  .run(function ($state) {
    $state.go('home');
  });
