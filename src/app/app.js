angular.module('portfolio', ['ui.router', 'components', 'portfolioServices', 'home'])

  .run(function ($state) {
    $state.go('home');
  });
