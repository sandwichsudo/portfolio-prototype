angular.module('portfolio', ['ui.router', 'components', 'portfolioServices', 'home','projectdetail'])

  .run(function ($state) {
    $state.go('home');
  });
