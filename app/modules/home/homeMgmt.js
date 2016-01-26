/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 26 Jan 2016
    Description : Base for Home module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var home = angular.module('home', ['ui.router', 'ngAnimate']);


home.config(["$stateProvider", function ($stateProvider) {

    //login page state
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/modules/home/index.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

}]);

