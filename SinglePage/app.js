var app = angular.module('myApp',["ui.router"]);

app.controller("myCtrl", function($scope,$location) {

    var init;
    init = function () {
        var loc = $location.absUrl();
        $scope.message = loc;


        var name = $location.search()['name']
        $scope.Ename = name;

        var age = $location.search()['age']
        console.log(age);
        $scope.Eage = age;

        var gender = $location.search()['gender']
        $scope.Egender = gender;

        var kinid = $location.search()['kinid']
        $scope.Ekinid = kinid;

        var doj = $location.search()['doj']
        $scope.Edoj = doj;

        var loc = $location.search()['location']
        $scope.Elocation = loc;
    };
    init();
    $scope.show = function () {
        var loc=$location.absUrl();

        $scope.message=loc+"?name="+$scope.Ename+"&age="+$scope.Eage+"&gender="+$scope.Egender+"&kinid="+$scope.Ekinid+"&doj="+$scope.Edoj+"&location="+$scope.Elocation;

    }
});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('about', {
            url:'/about',
            templateUrl: 'about.html',

        })
        .state('index',
            {   url:'/index',
                templateUrl: 'index.html',
                controller:"myCtrl"
            })
});




