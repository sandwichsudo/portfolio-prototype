angular.module('portfolio', ['ui.router','ngAnimate', 'components', 'portfolioServices', 'home','projectdetail'])

  .run(function ($state) {
    $state.go('home');
  });
